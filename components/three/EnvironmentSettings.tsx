import { CameraControls, Environment } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import useDisplay from "@/hooks/useDisplay";

const EnvironmentSettings = () => {
  const { isDesktop } = useDisplay();

  return (
    <>
      <CameraControls
        minDistance={1}
        maxDistance={4}
        maxPolarAngle={Math.PI / 2 + 0.1}
        dollySpeed={isDesktop ? 0.5 : 1.6}
        mouseButtons={{ left: 1, middle: 8, right: 0, wheel: 8 }}
        touches={{ one: 32, two: 256, three: 0 }}
        smoothTime={0.2}
        draggingSmoothTime={isDesktop ? 0.2 : 0.16}
      />
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} intensity={0.1} />
      </EffectComposer>
      <color args={["#000000"]} attach="background" />
      <directionalLight intensity={0.8} position={[2, 2, 2]} />
      <Environment preset="city" />
    </>
  );
};

export default EnvironmentSettings;
