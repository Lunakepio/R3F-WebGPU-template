import { AdditiveBlending } from 'three';
import { useMaterial } from './useMaterial';

export const Mesh = ({position, rotation, scale}) => {
  const { colorNode, key } = useMaterial();
  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <cylinderGeometry args={[0, 0.17, 0.5, 32, 32]} />
      <meshStandardMaterial key={key} colorNode={colorNode} transparent emissive={colorNode} blending={AdditiveBlending}/>
    </mesh>
  )
}
