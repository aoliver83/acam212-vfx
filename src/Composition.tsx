import { Composition } from "remotion";
import { MyComponent } from "./MyComponent";

export const Root = () => {
  return (
    <Composition
      id="Acam212Reel"
      component={MyComponent}
      durationInFrames={150}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};