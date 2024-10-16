import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header/Header.jsx";
import Background from "./Background/Background.jsx";
import "./main.scss";
import Wrapper from "./Wrapper/Wrapper.jsx";
import Footer from "./Footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Wrapper>
      <Header />
      <Footer />
    </Wrapper>
    <Background />
    
  </StrictMode>
);
