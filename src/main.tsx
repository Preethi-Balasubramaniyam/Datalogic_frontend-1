import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Header from "./components/Common/Header/index.tsx";
import Headertwo from "./components/Common/Header/header-two.tsx";
import Headerthree from "./components/Common/Header/header-three.tsx";
import Footer from "./components/Common/footer/index.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    
    <div id="datalogic-header">
    <Header />
      <Headertwo />
      <Headerthree />
    </div>
      <App />
    <Footer />
  </StrictMode>
);
