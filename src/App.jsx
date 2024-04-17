import React from "react";
import Background from "./components/background";
import Foreground from "./components/foreground";

function App() {
  return (
    <div className="h-screen w-full bg-[#1B1A55] relative">
      <Background />
      <Foreground />
    </div>
  );
}

export default App;
