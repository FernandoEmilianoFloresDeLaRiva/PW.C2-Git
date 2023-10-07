import React, { useContext } from "react";
import Contenedor from "../../components/TareasContenedor/Contenedor";
import "./Index.css";
import { ListaContext } from "../../context/TareasContext/ListaContext";
import Form from "../../components/Form/Form";

function Index() {
  const { tareas, dispatch } = useContext(ListaContext);
  return (
    <div className="body">
      <header>Lista de Tareas:</header>
      <main>
        <Form funcion={dispatch} />
        <Contenedor lista={tareas} funcion={dispatch}/>
      </main>
    </div>
  );
}

export default Index;
