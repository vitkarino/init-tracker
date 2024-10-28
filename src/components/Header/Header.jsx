import "./header.scss";
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <div className="logo-icon">
          <img src="src\assets\logo.svg" alt="Twenty sided dice" />
        </div>
      </div>

      <div className="buttons-container">
        <button className="save">
          <Icon className="" icon="material-symbols:save-outline" />
        </button>
        <button className="info">
          <Icon className="" icon="material-symbols:info-outline" />
        </button>
      </div>
    </div>
  );
}
