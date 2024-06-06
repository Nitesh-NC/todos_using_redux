import TodoItem from "./TodoItems";
import { useSelector } from "react-redux";


const TodoList = () => {

  const todos = useSelector((state) => state.todos)

  // const todos = [
	// 	{ id: 1, title: 'todo1', completed: false },
	// 	{ id: 2, title: 'todo2', completed: false },
	// 	{ id: 3, title: 'todo3', completed: false },
	// ];


  return (
    <>
      <ul className="list-none p-0">
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} /> 
      ))}
      </ul>
    </>
  );
};

export default TodoList;
