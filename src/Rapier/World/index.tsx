import React, { useEffect, useState } from "react";
import { GroupProps, useThree } from "@react-three/fiber";
import { Cylinder, Sky, Cloud, Stars, SpotLight, Environment } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

import { RapierWorldFloor as Floor } from "Rapier/World/Floor";
import { RapierWorldPlayer as Player } from "Rapier/World/Player";

import { Socials } from "./Components/Socials";
import { Court } from "./Components/Court";
import { NameText } from "./Components/NameText";
import Work from "./Components/Work";
import { Dog } from "./Components/Dog";
import Cat from "./Components/Cat";
import { Vector3, WebGLRenderer, Euler, MathUtils, Object3D } from "three";
import Mountain from "./Components/Mountain";
import { ThreePoint } from "Components/Lighting/ThreePoint";
import sky from "./Components/assets/Textures/sky.jpg";
import SpotLights from "./Components/Spotlights";

const RapierWorld = (props: GroupProps) => {
  

  // // animate the sky/sun
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Update sky position every second
  //     setSkyPosition(prevPosition => {
  //       const newX = prevPosition.x + 3; // Update x position
  //       const newZ = prevPosition.z + 5; // Update z position
  //       return new Vector3(newX, prevPosition.y, newZ);
  //     });
  //   }, 1000);

  //   return () => clearInterval(interval); // Clean up the interval on unmount
  // }, []);
  const targetObj = React.useMemo(() => {
    const obj = new Object3D();
    obj.position.set(10.5, 2, -4);
    obj.updateMatrixWorld();
    return obj;
  }, []);

  const target2Obj = React.useMemo(() => {
    const obj = new Object3D();
    obj.position.set(-16.5, 1, -9.6);
    obj.updateMatrixWorld();
    return obj;
  }, []);

  return (
    <group name="World" {...props}>
     
     {/* this will give a little light touch to the stars */}
      <Sky distance={50000} 
       sunPosition={[-20, -4.5, -140]}
       
      mieCoefficient={0.15}
      rayleigh={8}
      mieDirectionalG={0}
      

       /> 

{/* spotlight 1 Corner footballfield */}
<SpotLight
color={(0xAAAA77)}
  position={[21, 4.2, -2]}
  
  distance={20}
  angle={0.75}
  attenuation={10}
  intensity={2}
  target={targetObj}

  anglePower={0.2} // Diffuse-cone anglePower (default: 5)
  
/>

{/* spotlight 2 Corner footballfield */}
<SpotLight
color={(0xAAAA77)}
  position={[-1.15, 4.1, -10]}
  
  distance={20}
  angle={0.75}
  attenuation={10}
  intensity={2}
  target={targetObj}

  anglePower={0.2} // Diffuse-cone anglePower (default: 5)
  
/>
{/* spotlight 3 on the works*/}
<SpotLight
color={(0xCCCCCC)}
  position={[-14, 4.2, -1]}
  
  distance={20}
  angle={0.85}
  attenuation={15}
  intensity={2}
  target={target2Obj}

  anglePower={0.2} // Diffuse-cone anglePower (default: 5)
  
/>

       
       <Cloud
  position={[0, 45, 0]}
  opacity={0.7}
  speed={0.4} // Rotation speed
  width={50} // Width of the full cloud
  depth={1.5} // Z-dir depth
  segments={200} // Number of particles
/>



    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
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
    
      <Floor />
      <Player />
    </group>
  );
};

export { RapierWorld };
