"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"

// Dynamically import Three.js with no SSR to avoid Node.js environment issues
const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === "undefined" || !mountRef.current) return

    let cleanup: () => void = () => {}

    // Dynamically import Three.js
    const initThree = async () => {
      try {
        const THREE = await import("three")

        // Scene setup
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setClearColor(0x000000, 0)
        mountRef.current?.appendChild(renderer.domElement)

        // Create simple particles
        const particlesGeometry = new THREE.BufferGeometry()
        const particlesCount = 100
        const posArray = new Float32Array(particlesCount * 3)

        for (let i = 0; i < particlesCount * 3; i++) {
          posArray[i] = (Math.random() - 0.5) * 10
        }

        particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

        // Material
        const particlesMaterial = new THREE.PointsMaterial({
          size: 0.02,
          color: 0xffffff,
          transparent: true,
          opacity: 0.3,
        })

        // Mesh
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
        scene.add(particlesMesh)

        camera.position.z = 5

        // Animation
        const animate = () => {
          const animationId = requestAnimationFrame(animate)

          // Rotate particles
          particlesMesh.rotation.x += 0.001
          particlesMesh.rotation.y += 0.001

          renderer.render(scene, camera)

          // Store animation ID for cleanup
          return animationId
        }

        const animationId = animate()

        // Handle resize
        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight
          camera.updateProjectionMatrix()
          renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener("resize", handleResize)

        // Set cleanup function
        cleanup = () => {
          window.removeEventListener("resize", handleResize)
          cancelAnimationFrame(animationId)
          if (mountRef.current && renderer.domElement) {
            mountRef.current.removeChild(renderer.domElement)
          }
          renderer.dispose()
        }

        setIsLoaded(true)
      } catch (error) {
        console.error("Failed to initialize Three.js:", error)
      }
    }

    initThree()

    // Cleanup
    return () => cleanup()
  }, [])

  return <div ref={mountRef} className="fixed inset-0 -z-10" style={{ pointerEvents: "none" }} />
}

// Export as dynamic component with no SSR
export default dynamic(() => Promise.resolve(ThreeBackground), { ssr: false })
