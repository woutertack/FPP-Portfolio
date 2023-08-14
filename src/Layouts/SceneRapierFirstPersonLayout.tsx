import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Debug, Physics } from "@react-three/rapier";
import { folder, Leva, useControls } from "leva";
import { Suspense, useState, useEffect } from "react";

import { Helpers } from "Components/Helpers";
import { Lighting } from "Components/Lighting";
import { KEYBINDINGS } from "Configs/keybindings";
import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaCanvas } from "Settings/Leva/Canvas";
import { SettingsLevaPhysics } from "Settings/Leva/Physics";
import { LayoutProps } from "Types/LayoutProps";
import LoadingScreen from "../Components/LoadingScreen/LoadingScreen";

/**
 * Layout for a scene with Rapier physics engine for First Person view.
 *
 * @param {LayoutProps} props
 * @returns {JSX.Element}
 */
const SceneRapierFirstPersonLayout = ({
  children,
}: LayoutProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay using useEffect and setTimeout
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout duration as needed

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []); // Run only once on component mount

  const { flat, frameloop, linear, shadows } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      Canvas: folder(
        {
          flat: SettingsLevaCanvas.flat(),
          frameloop: SettingsLevaCanvas.frameloop(),
          linear: SettingsLevaCanvas.linear(),
          shadows: SettingsLevaCanvas.shadows(true),
        },
        Settings.folder(LEVA.ORDER.CANVAS),
      ),
    },
    Settings.folder(LEVA.ORDER.GENERAL),
  );
  const { gravity, paused, showDebug } = useControls(
    LEVA.SCHEMA.PHYSICS,
    {
      gravity: SettingsLevaPhysics.gravity(),
      paused: SettingsLevaPhysics.paused(),
      showDebug: SettingsLevaPhysics.showDebug(true),
    },
    Settings.folder(LEVA.ORDER.PHYSICS),
  );

  return (
    <>
      <Canvas
        camera={undefined}
        flat={flat}
        frameloop={frameloop}
        linear={linear}
        orthographic={false}
        shadows={shadows}
      >
        <Suspense fallback={<LoadingScreen />}>
          {!isLoading ? (
            <>
              
              <Lighting />
              {/* changed keybindings to qwerty so you can use arrows and QWERTY */}
              <KeyboardControls map={KEYBINDINGS.QWERTY}>
                <Physics
                  colliders={undefined}
                  gravity={[gravity.x, gravity.y, gravity.z]}
                  paused={paused}
                  timeStep="vary"
                  updatePriority={undefined}
                >
                  {children}
                </Physics>
              </KeyboardControls>
            </>
          ) : null}
        </Suspense>
      </Canvas>
      <Leva
        collapsed={false}
        fill={false}
        flat={false}
        hidden={true}
        oneLineLabels={true}
        titleBar={true}
      />
    </>
  );
};

export { SceneRapierFirstPersonLayout };
