import React from "react";
import "./Contenedor.css";
import { LISTA_TYPES } from "../../constants/listaReducer";
import Tarea from "../Tarea/Tarea";

function Contenedor({ lista, funcion }) {
  const funcionBorrar = (index) => {
    funcion({ type: LISTA_TYPES.delete, payload: index });
  };
  return (
    <section>
      {lista.length !== 0 ? (
        lista.map((tarea, index) => {
          return (
            <Tarea
              key={index}
              content={tarea}
              funcion={() => funcionBorrar(index)}
            />
          );
        })
      ) : (
        <p>!No hay tareas cargadas!</p>
      )}
    </section>
  );
}

export default Contenedor;
