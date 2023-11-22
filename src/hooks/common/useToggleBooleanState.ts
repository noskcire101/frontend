import { useCallback, useState } from "react";

function useToggleBooleanState() {
  
  const [booleanState, setBooleanState] = useState(false);

  const setBooleanTrue = useCallback(() => {
    setBooleanState(true);
  }, [setBooleanState]);

  const setBooleanFalse = useCallback(() => {
    setBooleanState(false);
  }, [setBooleanState]);

  return { booleanState, setBooleanTrue, setBooleanFalse };
}

export default useToggleBooleanState;
