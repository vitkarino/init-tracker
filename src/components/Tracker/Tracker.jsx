import "./tracker.scss";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <div className="tracker-container">
      <div className="combatant" tabIndex="0">
        <div className="drag-combatant">
          <button className="drag">
            <Icon className="" icon="mdi:drag" />
          </button>
        </div>
        <div className="initiative">
          <p className="label">INITIATIVE</p>
          <h2>1</h2>
        </div>
        <div className="name">
          <p className="label">NAME</p>
          <h2>Taelon</h2>
        </div>
        <div className="stats">
          <p className="label">
            <Icon className="icon" icon="mdi:heart-outline" id="hp" />
            HP: 8
          </p>
          <p className="label">
            <Icon
              className="icon"
              icon="material-symbols:shield-outline"
              id="ac"
            />
            AC: 15
          </p>
        </div>
        <div className="edit-combatant">
          <button className="delete">
            <Icon className="" icon="material-symbols:delete-outline" />
          </button>
          <button className="color">
            <Icon className="" icon="ic:outline-color-lens" />
          </button>
        </div>
      </div>
    </div>
  );
}
