import { useEffect, useLayoutEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  uniform,
  float,
  vec3,
  vec4,
  add,
  mul,
  sin,
  cos,
  normalize,
  length,
  smoothstep,
  positionGeometry,
  uv,
  normalGeometry,
  bufferAttribute,
} from "three/tsl";
import { BufferAttribute, Float32BufferAttribute } from "three";
import { useMaterial } from "./useMaterial";
import { Instance, Instances } from "@react-three/drei";
import { MathUtils } from "three";
import { SpriteNodeMaterial } from "three/webgpu";


export const Particles = () => {
  const pointsRef = useRef();
  const geometryRef = useRef();
  const { key, colorNode, geometryNode } = useMaterial();

  const particles = Array.from({ length: 1000}, () => ({
    factor: MathUtils.randFloat(0.1, 2),
    speed: MathUtils.randFloat(0.01, 0.75),
    xFactor: MathUtils.randFloatSpread(10),
    yFactor: MathUtils.randFloatSpread(10),
    zFactor: MathUtils.randFloatSpread(10)
  }))
  return (
    <Instances limit={particles.length} ref={pointsRef}>
      <planeGeometry args={[1, 1]} />
      <spriteNodeMaterial colorNode={colorNode} positionNode={geometryNode} />
      {particles.map((data, i) => (
        <Instance key={i} position={[data.xFactor, data.yFactor, data.zFactor]} scale={data.factor} />
      ))}
    </Instances>
  );
};
