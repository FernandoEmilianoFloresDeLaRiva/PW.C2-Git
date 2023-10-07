import React, { useRef } from "react";
import { LISTA_TYPES } from "../../constants/listaReducer";
import "./Form.css";

function Form({ funcion }) {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    funcion({
      type: LISTA_TYPES.add,
      payload: inputRef.current.value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Escriba nueva Tarea:</label>
      <input type="text" ref={inputRef} id="title" />
    </form>
  );
}

export default Form;
