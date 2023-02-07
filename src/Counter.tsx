import { useContext, useEffect, useState } from "react";
import { CounterContext, CounterContextType } from "./context/counterContext";

function Counter() {
   const { value, increase } = useContext(CounterContext) as CounterContextType
  return (
    <>
      <>
        <h1>Counter Function component - 1</h1>
        <p>{value}</p>
        <button onClick={increase}>+</button>
      </>
    </>
  );
}
export { Counter };
