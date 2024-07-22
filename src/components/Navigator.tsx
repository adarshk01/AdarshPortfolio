import { useState } from "react";
interface ChildComponentProps {
  prop: (data: string) => void;
}
export function Navigator({ prop }: ChildComponentProps) {
  const [glow, useGlow] = useState<string | null>("AboutMe");

  const handleInputChange = (gloa: string) => {
    prop(gloa);
  };

  return (
    <div>
      <div
        className="  bg-navi-001 border  border-stone-1000 rounded-bl-3xl flex text-white gap-10 items-center pl-10 text-base font-medium"
        style={{ height: "65px", width: "450px" }}
      >
        <div
          className={`cursor-pointer  transition ease-linear delay-90 ${
            glow == "AboutMe" ? "text-amber-200" : "hover:text-stone-300"
          }`}
          onClick={function () {
            useGlow("AboutMe");
            handleInputChange("AboutMe");
          }}
        >
          About
        </div>
        <div
          className={`cursor-pointer  transition ease-linear delay-90 ${
            glow == "Resume" ? "text-amber-200" : "hover:text-stone-300"
          }`}
          onClick={function () {
            useGlow("Resume");
            handleInputChange("Resume");
          }}
        >
          Resume
        </div>
        <div
          className={`cursor-pointer  transition ease-linear delay-90 ${
            glow == "Projects" ? "text-amber-200" : "hover:text-stone-300"
          }`}
          onClick={function () {
            useGlow("Projects");
            handleInputChange("Projects");
          }}
        >
          Projects
        </div>
        <div
          className={`cursor-pointer  transition ease-linear delay-90 ${
            glow == "Contacts" ? "text-amber-200" : "hover:text-stone-300"
          }`}
          onClick={function () {
            useGlow("Contacts");
            handleInputChange("Contact");
          }}
        >
          Contact
        </div>
      </div>
    </div>
  );
}
