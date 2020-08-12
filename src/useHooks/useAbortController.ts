import React from 'react';

export const useAbortController = () => {
  const controller: AbortController = new AbortController();

  React.useEffect(
    () => () => {
      controller.abort();
    },
    [controller]
  );

  return {controller};
};
