import { LISTA_TYPES } from "../../constants/listaReducer";

export default function ListaReducer(state, action) {
  switch (action.type) {
    case LISTA_TYPES.delete:
      return state.filter((tarea, index) => index !== action.payload);
    case LISTA_TYPES.add:
      return [...state, action.payload];
    default: {
      throw new Error(`La accion ${action.type} no esta definida :(`);
      return state;
    }
  }
}
