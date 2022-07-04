import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function ModifyPersonForm(props) {
  const { modifyPerson, setOpenModifyModal, clickId, newPersonName, setNewPersonName, newPersonLastName, setNewPersonLastName } = React.useContext(TodoContext);

  const onChangeNombre = (event) => {
    setNewPersonName(event.target.value);
  };
  const onChangeApellido = (event) => {
    setNewPersonLastName(event.target.value);
  };
  const onCancel = () => {
    setOpenModifyModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    let id = clickId-1;
    modifyPerson(id, newPersonName, newPersonLastName);
    setOpenModifyModal(false);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Ingrese los nuevos datos de la persona</label>
      <textarea
        value={newPersonName}
        onChange={onChangeNombre}
        placeholder={'Nombre'}
      />
      <textarea
        value={newPersonLastName}
        onChange={onChangeApellido}
        placeholder={'Apellido'}
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
          Modificar
        </button>
      </div>
    </form>
  );
}

export { ModifyPersonForm };
