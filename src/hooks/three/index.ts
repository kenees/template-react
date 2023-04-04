import { useMemo } from "react";
import useRender from "./useRender";

const useThree = () => {
  let renderer = useRender();
  let scene = {};
  let light = {};

  return useMemo(
    () => ({
      renderer,
      scene,
      light,
    }),
    [renderer, scene, light]
  );
};

export { useThree };
