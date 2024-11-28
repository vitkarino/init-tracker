import "./combatant.scss"
import { useState } from "react";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import ContextMenu from "../../ContextMenu/ContextMenu.jsx"; 

export default function Combatant({ combatant }) {
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [menuVisible, setMenuVisible] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setMenuPosition({ x: e.pageX - 100, y: e.pageY - 200 }); // Slight offset
    setMenuVisible(true);
  };
  

  const handleClickOutside = () => {
    setMenuVisible(false);
  };

  const contextOptions = [
    { id: 1, label: "Edit", icon: "material-symbols:edit-outline" },
    { id: 2, label: "Delete", icon: "material-symbols:delete-outline" },
    { id: 3, label: "Color", icon: "ic:outline-color-lens" },
  ];

  return (
    <div 
    onContextMenu={handleContextMenu} 
    onClick={handleClickOutside}
    className="combatant-container">
      <div className="combatant" tabIndex="0">
        <div className="initiative">
          <h2>{combatant.initiative}</h2>
        </div>
        <div className="name">
          <p className="label">NAME</p>
          <h2>{combatant.name}</h2>
        </div>
        <div className="stats">
          <p className="label">
            <Icon className="icon" icon="mdi:heart-outline" id="hp" />
            HP: {combatant.hp}
          </p>
          <p className="label">
            <Icon className="icon" icon="material-symbols:shield-outline" id="ac" />
            AC: {combatant.ac}
          </p>
        </div>
        <div className="edit-combatant">
          <button className="delete">
            <Icon className="icon" icon="material-symbols:delete-outline" />
          </button>
          <button className="color">
            <Icon className="icon" icon="ic:outline-color-lens" />
          </button>
        </div>
      </div>

      {menuVisible && (
        <ContextMenu
          data={contextOptions}
          menuPosition={menuPosition}
          onClickOutside={handleClickOutside}
        />
      )}
    </div>
  );
};

Combatant.propTypes = {
  combatant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    initiative: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    hp: PropTypes.number.isRequired,
    ac: PropTypes.number.isRequired,
  }).isRequired,
};