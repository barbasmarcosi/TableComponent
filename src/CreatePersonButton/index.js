import React from "react";
import './CreatePersonButton.css';

function CreatePersonButton(props) {
  const onClickButton = () => {
    props.setOpenAddModal(prevState => !prevState);
  };
  return (
    <>
      <button onClick={onClickButton}>{props.children}</button>
    </>
  );
}

export { CreatePersonButton };
