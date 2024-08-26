import React from 'react';

function TodoList({ todo }) {
  const handleUpdate = (_id) => {
    const updateTodo = {
      _id: _id,
    };

    fetch(`http://localhost:3000/completed`, {  
      method: "PUT",
      body: JSON.stringify(updateTodo),
      headers: {
        "Content-Type": "application/json",
      }
    }).then(async (res) => {
      const json = await res.json();
      console.log("updated data", json);
      alert("Your Todo is updated");
    }).catch(err => console.error("Error updating todo:", err));
  };

  return (
    <div>
      {todo.map((todoItem, index) => (
        <div key={todoItem._id}>
          <h3>{todoItem.title}</h3>
          <p>{todoItem.description}</p>
          <button onClick={() => handleUpdate(todoItem._id)}>
            {todoItem.completed ? "Completed" : "Incomplete"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;