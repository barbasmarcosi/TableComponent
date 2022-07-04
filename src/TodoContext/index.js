import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  /*const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);*/

  const [searchValue, setSearchValue] = React.useState("");
  const [orderTable, setOrderTable] = React.useState("");
  const [openTable, setOpenTable] = React.useState(false);
  const [openAddModal, setOpenAddModal] = React.useState(false);
  const [openModifyModal, setOpenModifyModal] = React.useState(false);
  const [clickId, setClickId] = React.useState(0);
  const [newPersonName, setNewPersonName] = React.useState("");
  const [newPersonLastName, setNewPersonLastName] = React.useState("");

  //const completedTodos = todos.filter((todo) => !!todo.completed).length;
  //const totalTodos = todos.length;

  const localStg = (set) => {
    if (set) {
      localStorage.setItem("TODOS_V1", JSON.stringify(set));
    } else {
      return JSON.parse(localStorage.getItem("TODOS_V1"));
    }
  };

  let persons = localStg();

  if (searchValue.length >= 1) {
    persons = persons.filter((todo) => {
      const todoText = todo.nombre.toLowerCase();
      const todoText2 = todo.apellido.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText) || todoText2.includes(searchText);
    });
  }

  const dynamicSort = (property) => {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  };
  persons.sort(dynamicSort(`${orderTable}`));

  const addPerson = (nombre, apellido) => {
    persons.sort(dynamicSort("id"));
    let person = {
      id: persons[persons.length - 1].id + 1,
      nombre: nombre,
      apellido: apellido,
    };
    persons.push(person);
    localStg(persons);
  };

  const modifyPerson = (id, nombre, apellido) => {
    persons.sort(dynamicSort("id"));
    persons[id].nombre = nombre;
    persons[id].apellido = apellido;
    localStg(persons);
  };

  const deletePerson = (id) => {
    const gridIndex = persons.findIndex((todo) => todo.id === id);
    persons.splice(gridIndex, 1);
    localStg(persons);
  };

  return (
    <TodoContext.Provider
      value={{
        //loading,
        //error,
        //totalTodos,
        //completedTodos,
        searchValue,
        setSearchValue,
        persons,
        orderTable,
        setOrderTable,
        openAddModal,
        setOpenAddModal,
        openModifyModal,
        setOpenModifyModal,
        clickId,
        setClickId,
        deletePerson,
        addPerson,
        modifyPerson,
        dynamicSort,
        newPersonName,
        setNewPersonName,
        newPersonLastName,
        setNewPersonLastName,
        openTable,
        setOpenTable,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

/*localStorage.setItem('TODOS_V1', JSON.stringify([
    {
      id: 1,
      nombre: "Marcos",
      apellido: "Barbas",
    },
    {
      id: 2,
      nombre: "Juan Pablo",
      apellido: "Perez",
    },
    {
      id: 3,
      nombre: "Matias",
      apellido: "Silva",
    },
    {
      id: 4,
      nombre: "Pepe",
      apellido: "Fernandez",
    },
    {
      id: 5,
      nombre: "Maria",
      apellido: "Torre",
    },
    {
      id: 6,
      nombre: "Camila",
      apellido: "Lamda",
    },
    {
      id: 7,
      nombre: "Sofia",
      apellido: "Castro",
    },
  ]))*/
