import { useDispatch } from "react-redux";
import { checked, deleteTodo } from "../redux/todoSlice";
import PropTypes from 'prop-types';


const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(checked({  //payload
        id: id,
        completed: !completed,
      })
    );
  };

  const remove = () => {
    dispatch(deleteTodo({ //payload
      id:id
    }));
  };

  return (
    <li
      className={`p-4 mt-4 rounded-lg shadow-md ${
        completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center ">
        <span className="flex items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={toggle}
          />
          <div className="hidden">{id}</div>
          {title}
        </span>
        <button
          onClick={remove}
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  
};


export default TodoItem;
