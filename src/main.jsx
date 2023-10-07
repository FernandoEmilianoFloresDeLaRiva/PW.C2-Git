import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./pages/Index/Index";
import { ListaProvider } from "./context/TareasContext/ListaContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ListaProvider>
      <Index />
    </ListaProvider>
  </React.StrictMode>
);
