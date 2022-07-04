import React from "react";
import "./BodyGrid.css";
import { TodoContext } from "../TodoContext";
import { ModifyPersonForm } from "../ModifyPersonForm";
import { ModifyPersonModal } from "../ModifyPersonModal";

/*const head = [
  {
    id: 1,
    value: "Numero de proyecto",
    column: "nroProyecto",
  },
  {
    id: 2,
    value: "Descripcion",
    column: "descripcion",
  },
  {
    id: 3,
    value: "Fecha de Inicio",
    column: "fechaInicio",
  },
  {
    id: 4,
    value: "Fecha de Fin",
    column: "fechaFin",
  },
];*/

function ProyectoBodyGrid(props) {
  const {
    openModifyModal,
    setOpenModifyModal,
    clickId,
    setClickId,
    setNewPersonName,
    setNewPersonLastName,
  } = React.useContext(TodoContext);
  const onClickButton = (id, name, lastName) => {
    setClickId(id);
    setNewPersonName(name);
    setNewPersonLastName(lastName);
    setOpenModifyModal((prevState) => !prevState);
  };
  const [openTable, setOpenTable] = React.useState(false);
  const [openTableIcon, setOpenTableIcon] = React.useState(">");
  const putTable = () => {
    setOpenTable((prevState) => !prevState);
    if (openTableIcon === ">") {
      setOpenTableIcon("v");
    } else {
      setOpenTableIcon(">");
    }
  };
  return (
    <>
      <tr key={props.id}>
        <td>{props.id}</td>
        <td>{props.descripcion}</td>
        <td>{props.fechaInicio}</td>
        <td>{props.fechaFin}</td>
        <td
          className="BodyGrid-button BodyGrid-moreContentButton"
          onClick={() => putTable()}
        >
          {openTableIcon}
        </td>
        <td
          className="BodyGrid-button BodyGrid-editButton"
          onClick={() => onClickButton(props.id, props.nombre, props.apellido)}
        >
          /
        </td>
        <td
          className="BodyGrid-button BodyGrid-deleteButton"
          onClick={props.onDelete}
        >
          X
        </td>
      </tr>
      {!!openModifyModal && (
        <ModifyPersonModal>
          <ModifyPersonForm id={clickId} />
        </ModifyPersonModal>
      )}
    </>
  );
}

export { ProyectoBodyGrid };
