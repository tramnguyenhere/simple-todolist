import React, {useState} from 'react';
import './App.css';
//Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  const [inputText, setInputText] = useState( "" );
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <header>
        <h1>Tram Nguyen's Todo list</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList />
    </div>
  );
}

export default App;
