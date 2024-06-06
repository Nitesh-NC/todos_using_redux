import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "todos",
    initialState: [ 
        { id:1, title:"dummy", completed:false}, 
    ],
    reducers:{
        addTodo: (state, action) => {  // state is initial state and action->payload comes from component
            const newTodo = { 
                id: Date.now(),
                title: action.payload.title, 
                completed: false,
            }
            //now append this new object to the state object
            state.push(newTodo); // basically add new todo to end of the array(which is taking new atate and upadte the store)
        },
        checked: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id); //finding index of todo item in the state array that match id of payload
            console.log(index);
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => { 
            //checks each todo item id and includes it in the new array only if it does not match the payload id
             return state.filter((todo) => todo.id !== action.payload.id); //need to add return as we are replacing the old state with new one
        },
    },
}); 

export const { addTodo, checked, deleteTodo } = todoSlice.actions; //getting actions out of action object
export default todoSlice.reducer; // exporting like this inorder to add it to store

