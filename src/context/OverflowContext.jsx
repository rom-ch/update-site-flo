import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const OverflowContext = createContext();

export function OverflowProvider({ children }) {
  const [count, setCount] = useState(0);

  const lockScroll = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const unlockScroll = useCallback(() => {
    setCount((prev) => Math.max(0, prev - 1));
  }, []);

  useEffect(() => {
    document.body.style.overflow = count > 0 ? "hidden" : "auto";
  }, [count]);

  return (
    <OverflowContext.Provider value={{ lockScroll, unlockScroll }}>
      {children}
    </OverflowContext.Provider>
  );
}

export const useOverflow = () => useContext(OverflowContext);
