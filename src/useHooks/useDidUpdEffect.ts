import { useRef, useEffect } from 'react';

export const useDidUpdEffect = (func: () => any, inputs: Array<any>): void => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      func();
    } else {
      didMountRef.current = true;
    }
  }, inputs);
};