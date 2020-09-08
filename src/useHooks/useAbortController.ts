import React from 'react';

export const useAbortController = (): { controller: AbortController; } => {
  const controller: AbortController = new AbortController();

  React.useEffect(
    () => () => {
      alert('abort');
      controller.abort();
    },
    []
  );

  return { controller };
};
