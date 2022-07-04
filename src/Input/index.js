import React from 'react';
import { TodoContext } from '../TodoContext';
import './Input.css';

function Input() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="filter"
      placeholder="Ingrese su busqueda"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { Input };