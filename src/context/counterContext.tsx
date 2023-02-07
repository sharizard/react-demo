import React, { ReactElement, useState } from "react";

export type CounterContextType = {
  value: number;
  increase: () => void;
};

const CounterContext = React.createContext<CounterContextType | null>(null);

const CounterProvider: React.FC<{ children: ReactElement }> = ({
  children,
}) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <CounterContext.Provider
      value={{
        value: count,
        increase,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export { CounterProvider, CounterContext };
