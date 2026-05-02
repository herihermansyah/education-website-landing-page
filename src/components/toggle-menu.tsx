import {Menu, X} from "lucide-react";
import React from "react";

type ToggleMenuType = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  clicked: boolean;
  className?: string;
};

function ToggleMenu({onClick, clicked, className}: ToggleMenuType) {
  return (
    <button className={`${className} cursor-pointer`} onClick={onClick}>
      {clicked ? <X size={35} /> : <Menu size={35} />}
    </button>
  );
}

export default ToggleMenu;
