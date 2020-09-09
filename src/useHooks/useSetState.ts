import { useState, useEffect } from 'react';

export const useSetState = () => {
  const [isComponentUnMounted, setComponentUnmounted] = useState<boolean>(false);

  useEffect(() => () => { alert(34); setComponentUnmounted(true); }, []);
  console.log({ f: isComponentUnMounted });
  return { isComponentUnMounted };
};