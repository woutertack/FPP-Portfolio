// import { ClimbingBoxLoader } from "react-spinners";
import { Html, useProgress } from "@react-three/drei";

import "./LoadingScreen.css";

const LoadingScreen = () => {
  const { progress } = useProgress();
  return (
    <Html fullscreen>
      <div className="wrap">
        <div className="text">
          {progress ? progress.toFixed(1) : "0.0"} % loaded
        </div>
      </div>
    </Html>
  );
};

export default LoadingScreen;
