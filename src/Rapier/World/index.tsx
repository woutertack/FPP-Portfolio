import React from "react";
import { GroupProps } from "@react-three/fiber";
import { Cylinder, Sky, Cloud, Stars } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

import { RapierWorldFloor as Floor } from "Rapier/World/Floor";
import { RapierWorldPlayer as Player } from "Rapier/World/Player";

import { Socials } from "./Components/Socials";
import { Court } from "./Components/Court";
import { NameText } from "./Components/NameText";
import Work from "./Components/Work";
import { Dog } from "./Components/Dog";
import Cat from "./Components/Cat";
import { Object3D } from "three";
import Mountain from "./Components/Mountain";

import SpotLights from "./Components/Spotlights";
import { Bushes } from "./Components/nature/Bushes";
import { Stump } from "./Components/nature/Stump";
import { Grass } from "./Components/nature/Grass";
import { Trees } from "./Components/nature/Trees";

const RapierWorld = (props: GroupProps) => {
  return (
    <group name="World" {...props}>
      {/* this will give a little orange light touch to the sky */}
      <Sky
        distance={50000}
        sunPosition={[-20, -4.5, -140]}
        mieCoefficient={0.15}
        rayleigh={8}
        mieDirectionalG={0}
      />

      <Cloud
        position={[0, 45, 0]}
        opacity={0.7}
        speed={0.4} // Rotation speed
        width={50} // Width of the full cloud
        depth={1.5} // Z-dir depth
        segments={200} // Number of particles
      />

      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
      <RigidBody type="fixed" colliders="trimesh">
        <Cylinder args={[20, 20, 50, 20]}>
          <meshBasicMaterial opacity={0} />
        </Cylinder>
      </RigidBody>

      <SpotLights />

      <Work />
      <Dog />
      <Cat />
      <NameText />
      <Court />
      <Socials />
      <Mountain />
      <Bushes />
      <Stump />
      <Trees />
      {/* <Grass /> */}

      <Floor />
      <Player />
    </group>
  );
};

export { RapierWorld };
