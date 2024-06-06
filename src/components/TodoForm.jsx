import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice"; 

const TodoForm = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    setValue("title", data.title)  
    console.log(data)
    reset();
    dispatch(addTodo({ 
      title: data.title // this is our payload
    }));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      <h1 className="text-2xl font-bold mb-4 text-center">ToDo List</h1>
      <label className="block text-left mb-2 font-medium text-gray-700">
        Title
      </label>
      <input
        name="title"
        type="text"
        className="border rounded w-full p-2 mb-4"
        {...register("title", { required: true })}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
