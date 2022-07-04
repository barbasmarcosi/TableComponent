import React from "react";
import "./HeadGrid.css";
import { TodoContext } from "../TodoContext";

function HeadGrid(props) {
  const [orderTableIcon, setOrderTableIcon] = React.useState("-");
  const { orderTable, setOrderTable } =
    React.useContext(TodoContext);

  const orderTableButton = () => {   
    if (orderTable === props.column) {
      setOrderTable("-" + props.column);
      setOrderTableIcon("^");
    } else {
      setOrderTable(props.column);
      setOrderTableIcon("v");
    }
  };
  return (
    <th className="HeadGrid-button" onClick={() => orderTableButton(props.value + " " + orderTableIcon)}>
      {props.value + " " + orderTableIcon}
    </th>
  );
}

export { HeadGrid };
