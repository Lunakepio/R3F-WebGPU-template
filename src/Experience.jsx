import { Effects } from "./Effects";
import { LightEnvironment } from "./LightEnvironment";
import { MarioKart } from "./Mariokart";

import { Mesh } from "./mesh/Mesh";
import { Particles } from "./particles/Particles";

export const Experience = () => {
  return (
    <>
      {/* <MarioKart /> */}
      <LightEnvironment />
      <Particles />
    </>
  );
};
