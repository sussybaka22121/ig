import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element");
}

// Empty component for root path
const EmptyComponent = () => <div></div>;

createRoot(rootElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<EmptyComponent />} />
      <Route path="/DF1UsayvWNS/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
