import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo, toggleTodo, deleteTodo } from "../reducer/todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div
      className="bg-gray-200 box-border shadow-lg flex flex-col justify-center items-center border-2 w-4/5 gap-4 mt-24
     rounded-lg"
    >
      <div className="text-7xl mb-20 font-semibold text-center mt-14 text-gray-300">
        <h1>Todo App</h1>
      </div>
      <div className="flex gap-2">
        <input type="text" value={newTodo} onChange={handleInputChange} />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 px-4 py-2 rounded-lg shadow-md border-2 cursor-pointer text-2xl font-bold"
        >
          +
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex gap-6">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
              className="w-6 h-6 ml-2 mt-1.5"
            />

            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="bg-red-500 px-4 py-2 rounded-lg shadow-md border-2 cursor-pointer text-2xl font-bold ml-10"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
