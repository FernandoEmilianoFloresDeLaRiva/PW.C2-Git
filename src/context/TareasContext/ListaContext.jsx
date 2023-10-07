import { useReducer, createContext } from "react";
import ListaReducer from "./ListaReducer";

export const ListaContext = createContext();

export const ListaProvider = ({ children }) => {
  const [tareas, dispatch] = useReducer(ListaReducer, []);
  return (
    <ListaContext.Provider value={{ tareas, dispatch }}>
      {children}
    </ListaContext.Provider>
  );
};
