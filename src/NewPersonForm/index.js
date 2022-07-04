import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function NewPersonForm() {
  const [newPersonName, setnewPersonName] = React.useState("");
  const [newPersonLastName, setnewPersonLastName] = React.useState("");
  const { addPerson, setOpenAddModal } = React.useContext(TodoContext);

  const onChangeNombre = (event) => {
    setnewPersonName(event.target.value);
  };
  const onChangeApellido = (event) => {
    setnewPersonLastName(event.target.value);
  };
  const onCancel = () => {
    setOpenAddModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(newPersonName);
    console.log(newPersonLastName);
    addPerson(newPersonName, newPersonLastName);
    setOpenAddModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Ingrese la nueva persona</label>
      <textarea
        value={newPersonName}
        onChange={onChangeNombre}
        placeholder="Nombre"
      />
      <textarea
        value={newPersonLastName}
        onChange={onChangeApellido}
        placeholder="Apellido"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { NewPersonForm };
