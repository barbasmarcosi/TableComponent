import React from "react";
import { TodoContext } from "../TodoContext";
import { AddPersonModal } from "../AddPersonModal";
import { HeadGrid } from "../HeadGrid";
import { BodyGrid } from "../BodyGrid";
import { GridContainer } from "../GridContainer";
import { Input } from "../Input";
import { CreatePersonButton } from "../CreatePersonButton";
import { NewPersonForm } from "../NewPersonForm";
import { Header } from "../Header";
import { NavBar } from "../NavBar";

function AppUI() {
  const {
    //error,
    //loading,
    //searchedTodos,
    //completeTodo,
    deletePerson,
    openAddModal,
    setOpenAddModal,
    openModifyModal,
    setOpenModifyModal,
    persons,
  } = React.useContext(TodoContext);

  const head = [
    {
      id: 1,
      value: "Id",
      column: "id",
    },
    {
      id: 2,
      value: "Nombre",
      column: "nombre",
    },
    {
      id: 3,
      value: "Apellido",
      column: "apellido",
    },
  ];

  return (
    
    <React.Fragment>
      <Header />
      <NavBar />
      <Input />
      <CreatePersonButton setOpenAddModal={setOpenAddModal}>
        +
      </CreatePersonButton>
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
          {persons.map((todo) => (
            <BodyGrid
              key={todo.id}
              id={todo.id}
              nombre={todo.nombre}
              apellido={todo.apellido}
              onDelete={() => deletePerson(todo.id)}
              //setOpenModifyModal={setOpenModifyModal}
            />
          ))}
        </tbody>
      </GridContainer>

      {!!openAddModal && (
        <AddPersonModal>
          <NewPersonForm />
        </AddPersonModal>
      )}

      {/*<TodoCounter />

      <TodoSearch />

      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />*/}
    </React.Fragment>
  );
}

export { AppUI };
