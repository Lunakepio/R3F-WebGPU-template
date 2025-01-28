import { useFrame } from "@react-three/fiber";
import {
  uniform,
  float,
  vec2,
  sin,
  cos,
  uv,
  mod,
  div,
  sub,
  length,
  pow,
  abs,
  vec3,
  vec4,
  add,
  mul,
  normalGeometry,
  normalize,
  positionGeometry,
  cameraProjectionMatrix,
  positionLocal,
  modelViewMatrix,
  modelPosition,

} from "three/tsl";

export function useMaterial() {
  // Create uniform and shader calculations
  const uTime = uniform(float(0.0));

  const normal = normalize(normalGeometry)
  const position = normalize(positionGeometry)

  // Get UV coordinates and time
  const currentUV = uv();



  const finalColor = vec4(normal, 1.0);

  const finalGeometry = positionLocal

  // Update time in animation frame
  useFrame((state, delta) => {
    uTime.value -= delta * 10.0;
  });

  return {
    key: uTime.id,
    colorNode: finalColor,
    geometryNode: finalGeometry,
  };
}
