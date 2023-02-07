import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Logo from "./Logo";
import { CounterClass } from "./CounterClass";
import { Counter } from "./Counter";
import { CounterProvider } from "./context/counterContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </CounterProvider>
  );
}

export default App;
