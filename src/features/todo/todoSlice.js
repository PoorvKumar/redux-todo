import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    todos: [],
};

export const todoSlice=createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action)=>
        {
            const todo={
                id: nanoid(),
                text: action.payload.text
            };

            state.todos.push(todo);
        },
        removeTodo: (state,action)=>
        {
            const id=action.payload;

            state.todos=state.todos.filter((todo)=>(todo.id!==id));
        },
        editTodo: (state,action)=>
        {
            state.todos=state.todos.map((todo)=>
            {
                if(todo.id===action.payload.id)
                {
                    return { ...todo, text: action.payload.text };
                }
                return todo;
            })
        }
    },
});

export const { addTodo, removeTodo, editTodo }=todoSlice.actions;

export default todoSlice.reducer;