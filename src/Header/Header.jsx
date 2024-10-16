import "./header.scss";
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <div className="logo-icon">
          <img src="src\assets\dice-logo.svg" alt="Twenty sided dice" />
        </div>
        <div className="logo-text">
          <h4>VIK&apos;S</h4>
          <h1>INITIATIVE TRACKER</h1>
        </div>
      </div>

      <div className="buttons-container">
        <button className="save">
          <Icon className="" icon="material-symbols:save-outline" />
        </button>
        <button className="info">
          <Icon className="" icon="material-symbols:info-outline" />
        </button>
        <a
          href="https://github.com/vitkarino"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="github">
            <Icon className="" icon="mdi:github" />
          </button>
        </a>
      </div>
    </div>
  );
}
