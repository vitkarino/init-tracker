import { useState, useEffect } from "react";
import "./contextmenu.scss";

export default function ContextMenu() {
  return (
    <div
    className="context-menu"
      onContextMenu={(e) => {
        e.preventDefault();
        console.log("Right Click");
      }}
    >
      MenuContext
    </div>
  )
}
