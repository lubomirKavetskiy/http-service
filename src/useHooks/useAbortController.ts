import React from 'react';

export const useAbortController = (): { controller: AbortController; } => {
  const controller: AbortController = new AbortController();

  React.useEffect(
    () => () => {
      controller.abort();
    },
    // eslint-disable-next-line
    []
  );

  return { controller };
};
