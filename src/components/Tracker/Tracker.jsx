import "./tracker.scss";
import Combatant from "./Combatant/Combatant.jsx";
import { useState } from "react";
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
  const [combatants, setCombatants] = useState([
    { id: 1, initiative: 32, name: "Taelon", hp: 10, ac: 15 },
    { id: 2, initiative: 54, name: "Erlow", hp: 15, ac: 14 },
    { id: 3, initiative: 12, name: "Tolesis", hp: 8, ac: 13 },
  ]);

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
            {combatants.map((c) => (
              <Combatant key={c.id} combatant={c} />
            ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
