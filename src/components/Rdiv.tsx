import React, { useState } from "react";
import { AboutMe } from "./AboutMe";
import { Navigator } from "./Navigator";
import { Resume } from "./Resume";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
const componentMap: { [key: string]: React.FC } = {
  AboutMe: AboutMe,
  Resume: Resume,
  Projects: Projects,
  Contact: Contact,
  // Add other components here
};

export function Rdiv() {
  const [parentState, setParentState] = useState("AboutMe");
  function handleChildData(childData: string) {
    setParentState(childData);

    setParentState(childData);
  }

  const DynamicComponent = componentMap[parentState];
  return (
    <div className="font-poppins relative">
      <div className="absolute right-0 top-0">
        <Navigator prop={handleChildData} />
      </div>
      <div className="transition ease-in duration-50  ">
        {DynamicComponent ? React.createElement(DynamicComponent) : null}
      </div>
    </div>
  );
}
