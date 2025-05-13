import { useEffect, useState } from 'react';

export const useIsHydratingFinished = () => {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setIsFinished(true);
  }, []);

  return isFinished;
};
