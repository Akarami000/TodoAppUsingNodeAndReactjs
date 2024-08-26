import React, { useState } from 'react';

function CreateTodos({ todo, setTodos }) {
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');

  const handleSubmit = () => {
    const newTodo = {
      title: Title,
      description: Description,
      completed: false,
    };


    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(async (res) => {
      const json = await res.json();
      console.log(json);
      alert("Todo Added");
      setTodos([...todo, newTodo]);
    })
    .catch((err) => {
      console.error("Error adding todo:", err);
    });
  };

  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Add time"
        value={Title}  // Bind input value to state
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Description"
        value={Description}  // Bind input value to state
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit Todo</button>
    </div>
  );
}

export default CreateTodos;