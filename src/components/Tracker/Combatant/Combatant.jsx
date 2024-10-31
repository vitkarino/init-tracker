import "./combatant.scss";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Combatant({ combatant }) {
  const {
    // attributes,
    // listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({
    id: combatant.id,
    transition: {
      duration: 200,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)' 
    }
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1000 : 0,
    touchAction: 'none',
  };

  return (
    <div 
      className={`combatant-container ${isDragging ? 'dragging' : ''}`} 
      ref={setNodeRef} 
      style={style}
    >
      {/* <button className="drag" {...attributes} {...listeners}>
        <Icon icon="mdi:drag" />
      </button> */}
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
    </div>
  );
}

Combatant.propTypes = {
  combatant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    initiative: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    hp: PropTypes.number.isRequired,
    ac: PropTypes.number.isRequired,
  }).isRequired,
};