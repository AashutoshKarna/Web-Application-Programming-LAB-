// import {useState} from 'react'

// function Todo() {
//     const[newTodo, setNewTodo]=useState('')
//     const[todos, setTodos]=useState([])

//     // for adding a todo
//     const handleSubmit = (e) => {
//         e.preventDefault(); //because we dont want to refresh everything
//         if(newTodo){
//             setTodos([...todos, {text:newTodo, completed:false}])
//             setNewTodo('')
//         }

//     }
//     //for deleting a todo
//     const handleDelete = (index) => {
//         const newTodos = [...todos];
//         newTodos[index].completed = !newTodos[index].completed 
//         setTodos(newTodos)
//     }
//   return (
//     <div>
//         <h1>Todo App</h1>
//         <form onSubmit = {handleSubmit}>
//             <input type="text" placeholder='Add new Todo'
//             value={newTodo}
//             onChange={(e)=>setNewTodo(e.target.value)}
//             />
//             <button type='submit'>Add Todo</button>
//         </form>
//         <ul>
//             {todos.map((todo, index)=>
//             (
//                 <li key={index}>
//                     <span style={{textDecoration : todo.completed ? 'line-through' : 'none'}}>
//                     {todo.text}</span>
//                     <button onClick={()=>handleDelete(index)}>Delete</button>
//                 </li>
//             )
//             ) }
//         </ul>
//     </div>
//   )
// }

// export default Todo

import { useState } from "react";

function Todo() {
    //this will take value from input field
  const [newTodo, setNewTodo] = useState(""); 
  //this contains our all todo list in array
  const [todos, setTodos] = useState([]); 
  const [editIndex, setEditIndex] = useState(null); // null because initially nothing is selected to edit
  const [editTodo, setEditTodo] = useState(""); 

  //create
  const handleSubmit = (e) => {
    e.preventDefault(); // for avaoiding full refresh
    if (newTodo) {  
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo(""); 
    }
  };

  //delete
  const handleDelete = (index) => {
    // this keeps all todos except clicked (i.e. we create a new array excluding todo(to show deletion) at the given index)
    setTodos(todos.filter((todo, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditIndex(index); 
    setEditTodo(todos[index].text);
  };

  // update
  const handleUpdate = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex].text = editTodo; 
    setTodos(updatedTodos);
    setEditIndex(null); 
    setEditTodo(""); 
  };

  return (
    <div>
      <h1>Todo App</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add todo" value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
                //if it is being edited
              <>
                <input
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                />
                <button onClick={handleUpdate}>Update</button>
              </>
              //else
            ) : (
              <>
                <span>{todo.text}</span>{" "}
                <button onClick={() => handleEdit(index)}>Edit</button>{" "}
                <button onClick={() => handleDelete(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;