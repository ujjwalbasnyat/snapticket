import React from "react";
import Background from "./components/Back_Ground";
import FrontGround from "./components/FrontGround";
import Add_Card from "./components/Add_Card";

function Page() {
  return (
    <div className="relative">
      <Background />
      <FrontGround />
      <div className="absolute bottom-4 right-4">
        <Add_Card />
      </div>
    </div>
  );
}

export default Page;
