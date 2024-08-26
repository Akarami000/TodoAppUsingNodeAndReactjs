import { useState, useEffect } from 'react';
import './App.css';
import CreateTodos from './components/CreateTodos';
import TodoList from './components/TodoList';

function App() {
  const [Todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      });
  }, []);

  return (
    <div>
      <CreateTodos todo={Todos} setTodos={setTodos} /> 
      <TodoList todo={Todos} />
    </div>
  );
}

export default App;