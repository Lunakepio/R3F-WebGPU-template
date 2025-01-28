import "./App.css";
import { WebGPUCanvas } from "./WebGPUCanvas";
import { Experience } from "./Experience";
import { WebGPUPostProcessing } from "./WebGPUPostProcessing";
import { Stats } from "@react-three/drei";

function App() {
  return (
    <>
      <WebGPUCanvas quality={"default"}>
        <Experience />
        {/* <WebGPUPostProcessing quality={"default"} /> */}
      </WebGPUCanvas>
      <Stats />
    </>
  );
}

export default App;
