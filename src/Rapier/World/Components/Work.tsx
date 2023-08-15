import { Vector3, Euler, MathUtils } from "three/src/Three";
import { useGLTF, Text } from "@react-three/drei";
import work1 from "./assets/work1.gltf";
import work2 from "./assets/work2.gltf";

export function Work(props: any) {
  const { scene: work1Scene }: any = useGLTF(work1);
  const { scene: work2Scene }: any = useGLTF(work2);

  return (
    <>
      {/* work 1 */}
      {/* used mesh instead of rigidbody so i can use onClick */}
      <mesh
        position={new Vector3(-19.5, -0.1, -4)}
        type="fixed"
        rotation={new Euler(0, MathUtils.degToRad(70), 0)}
        onDoubleClick={() => {
          window.open(
            "https://app-realestate-production.up.railway.app/",
            "_blank",
          );
        }}
      >
        <primitive object={work1Scene} />
      </mesh>
      <Text
        position={new Vector3(-17.1, 3.75, -5.8)}
        rotation={new Euler(0, MathUtils.degToRad(70), 0)}
        type="fixed"
        fontSize={0.35}
        color={0xffffff}
      >
        React JS / MongoDB
      </Text>

      {/* work 2 */}
      <mesh
        position={new Vector3(-17, -0.1, -10)}
        type="fixed"
        rotation={new Euler(0, MathUtils.degToRad(50), 0)}
        onDoubleClick={() => {
          window.open("https://agenda-app-798fb.firebaseapp.com/", "_blank");
        }}
      >
        <primitive object={work2Scene} />
      </mesh>
      <Text
        position={new Vector3(-14, 3.75, -11)}
        rotation={new Euler(0, MathUtils.degToRad(50), 0)}
        type="fixed"
        fontSize={0.35}
        color={0xffffff}
      >
        Vanilla JS / Firebase
      </Text>
    </>
  );
}

export default Work;
