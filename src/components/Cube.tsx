import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function Cube() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 80 / 80, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(80, 80);
    renderer.setClearColor(0x000000, 0);
    containerRef.current?.appendChild(renderer.domElement);

    // Create a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Position the camera
    camera.position.z = 5;

    // Set up the animation loop
    const animate = function () {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up function
    return () => {
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="absolute bottom-0 left-0 z-20" />;
}

export default Cube;
