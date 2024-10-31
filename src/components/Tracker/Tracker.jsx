import "./tracker.scss";
import Combatant from "./Combatant/Combatant.jsx";
import { Icon } from "@iconify/react";
import { useState } from "react";
import combatantData from "@/data/combatantData.json";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

export default function Tracker() {
  // Initialize state with JSON data
  const [combatants, setCombatants] = useState(combatantData);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setCombatants((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

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
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={[restrictToVerticalAxis]}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={combatants.map((c) => c.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="combatants-grid">
            {combatants.map((c) => (
              <Combatant key={c.id} combatant={c} />
            ))}
            <button className="add-new-btn" onClick={addCombatant}>
              <Icon className="icon" icon="material-symbols:add" id="hp" />
            </button>
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
