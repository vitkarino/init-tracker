import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header/Header.jsx";
import Background from "./components/Background/Background.jsx";
import "./styles/main.scss";
import Wrapper from "./components/Wrapper/Wrapper.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Tracker from "./components/Tracker/Tracker.jsx"
import ContextMenu from "./components/ContextMenu/ContextMenu.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Wrapper>
      <Header />
      <Footer />
      <Tracker />
    </Wrapper>
    <Background />
    <ContextMenu />
  </StrictMode>
);