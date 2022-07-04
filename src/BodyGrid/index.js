import React from "react";
import "./BodyGrid.css";
import { TodoContext } from "../TodoContext";
import { ModifyPersonForm } from "../ModifyPersonForm";
import { ModifyPersonModal } from "../ModifyPersonModal";
import { HeadGrid } from "../HeadGrid";
import { GridContainer } from "../GridContainer";
import { ProyectoBodyGrid } from "../ProyectoBodyGrid";
const head = [
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
];

function BodyGrid(props) {
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
  const [openSingleTable, setOpenSingleTable] = React.useState(false);
  const [openTableIcon, setOpenTableIcon] = React.useState(">");
  const putTable = () => {
    setOpenSingleTable((prevState) => !prevState);
    if (openTableIcon === ">") {
      setOpenTableIcon("v");
    } else {
      setOpenTableIcon(">");
    }
  };
  const body = [
    {
      id: 1,
      descripcion: "Proyecto 1",
      fechaInicio: "11/11/2022",
      fechaFin: "13/12/2022",
    },
    {
      id: 2,
      descripcion: "Proyecto 2",
      fechaInicio: "11/12/2022",
      fechaFin: "17/12/2022",
    },
    {
      id: 3,
      descripcion: "Proyecto 3",
      fechaInicio: "07/11/2022",
      fechaFin: "07/12/2022",
    },
    {
      id: 4,
      descripcion: "Proyecto 4",
      fechaInicio: "04/02/2022",
      fechaFin: "04/04/2022",
    },
  ];
  return (
    <>
      <tr key={props.id}>
        <td>{props.id}</td>
        <td>{props.nombre}</td>
        <td>{props.apellido}</td>
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
      {!!openSingleTable && (
        <td colSpan="3" className="SubTable">
          <GridContainer>
            <thead>
              <tr>
                {head.map((todo) => (
                  <HeadGrid
                    value={todo.value}
                    column={todo.column}
                    id={todo.id}
                    key={todo.id}
                  />
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((todo) => (
                <ProyectoBodyGrid
                  key={todo.id}
                  id={todo.id}
                  descripcion={todo.descripcion}
                  fechaInicio={todo.fechaInicio}
                  fechaFin={todo.fechaFin}
                  //onDelete={() => deletePerson(todo.id)}
                  //setOpenModifyModal={setOpenModifyModal}
                />
              ))}
            </tbody>
          </GridContainer>
        </td>
      )}
    </>
  );
}

export { BodyGrid };
