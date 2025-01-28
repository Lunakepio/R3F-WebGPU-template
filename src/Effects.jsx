import * as THREE from "three/webgpu";
import * as TSL from "three/tsl";
import { smaa } from 'three/examples/jsm/tsl/display/SMAANode'
import { bloom } from 'three/examples/jsm/tsl/display/BloomNode'
import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";

export const Effects = ({ strength = 1.5, radius = 0.5 }) => {
  const { gl, scene, camera } = useThree()
  const [postProcessing] = useState(() => new THREE.PostProcessing(gl))
  // Configure passes
  useEffect(() => {
    const scenePass = TSL.pass(scene, camera)
    scenePass.setMRT(TSL.mrt({ output: TSL.output, emissive: TSL.emissive }))
    const outputPass = scenePass.getTextureNode()
    const scenePassEmissive = scenePass.getTextureNode('emissive')
    const bloomPass = smaa(bloom(scenePassEmissive, strength, radius, 0.1))
    postProcessing.outputNode = outputPass.add(bloomPass)
    postProcessing.needsUpdate = true
  }, [scene, camera, strength, radius])
  // Take over render queue
  useFrame(() => postProcessing.render(), 1)
}
