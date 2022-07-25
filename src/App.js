import React, {useState, useEffect} from 'react';
import './App.css';
//Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  //State stuffs
  const [inputText, setInputText] = useState( "" );
  const [todos, setTodos] = useState( [] );
  const [status, setStatus] = useState( "all" )
  const [filteredTodos, setFilteredTodos] = useState( [] );
  //Run once when the app starts
  useEffect( () => {
    getLocalTodos();
  }, [] );
  //useEffect
  useEffect( () => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status] );
  //Functions
  const filterHandler = () => {
    switch ( status )
    {
      case 'completed':
        setFilteredTodos( todos.filter( ( todo ) => todo.completed === true ) );
        break;
      case 'uncompleted':
        setFilteredTodos( todos.filter( ( todo ) => todo.completed === false ) );
        break;
      default:
        setFilteredTodos( todos );
        break;
    }
  };
  const saveLocalTodos = () => { 
    localStorage.setItem('todos', JSON.stringify(todos));
}

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      // JSON.parse(localStorage.getItem('todos'));
    // console.log(todoLocal);
    setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        status={status}
        setStatus={setStatus}
      />
      <TodoList 
        filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
