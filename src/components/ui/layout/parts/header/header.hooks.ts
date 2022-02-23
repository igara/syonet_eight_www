import React from 'react';

export const useXXXState = (flag?: boolean) => {
  return React.useState(flag);
};

export const useXXXCallback = () => {
  return React.useCallback(() => {}, []);
};

export const useXXXEffect = (args: {}) => {
  return React.useEffect(() => {}, [args]);
};
