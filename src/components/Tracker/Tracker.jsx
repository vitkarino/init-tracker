import "./tracker.scss";
import Combatant from "./Combatant/Combatant.jsx";
import { Icon } from "@iconify/react";
import { useState } from "react";
import combatantData from "@/data/combatantData.json";

const Tracker = () => {
  const [combatants, setCombatants] = useState(combatantData);

  const addCombatant = () => {
    const newCombatant = {
      id: combatants.length + 1,
      initiative: 0,
      name: `Add name`,
      hp: 10,
      ac: 10,
    };
    setCombatants((prevCombatants) => [...prevCombatants, newCombatant]);
  };

  return (
    <div className="tracker-container">
      <div className="combatants-grid">
        {combatants.map((c) => (
          <Combatant key={c.id} combatant={c} />
        ))}
        <button className="add-new-btn" onClick={addCombatant}>
          <Icon className="icon" icon="material-symbols:add" id="hp" />
        </button>
      </div>
    </div>
  );
}

export default Tracker;