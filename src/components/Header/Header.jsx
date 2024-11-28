import "./header.scss";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <div className="logo-icon">
          <img src="src\assets\logo.svg" alt="Twenty sided dice" />
        </div>
      </div>

      <div className="buttons-container">
        <button className="save">
          <Icon className="icon" icon="material-symbols:save-outline" />
        </button>
        <button className="info">
          <Icon className="icon" icon="material-symbols:info-outline" />
        </button>
      </div>
    </div>
  );
}

export default Header;
