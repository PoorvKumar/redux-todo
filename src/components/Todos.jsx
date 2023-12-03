import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo, removeTodo } from '../features/todo/todoSlice';

const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    console.log(todos);

    const [editingId, setEditingId] = useState(null);
    const [editedText, setEditedText] = useState('');

    const handleEditClick = (id,text) => {

        setEditingId(id);
        setEditedText(text);
    };

    const handleSave = (id) => {
        dispatch(editTodo({ id, text: editedText }));
        setEditingId(null);
        setEditedText('');
    }

    const handleDeleteClick = (id) => {
        // console.log(id);
        dispatch(removeTodo(id));
    };

    return (
        <div className='flex flex-col items-center mt-8'>
            <div className='text-2xl font-bold mb-4'>Todos</div>
            <ul className='bg-gray-100 p-4 rounded-md'>
                {todos?.map((todo) => (
                    <li key={todo.id} className='mb-2 text-gray-800 w-80'>
                        {editingId === todo.id ? (
                            <input
                                type='text'
                                value={editedText}
                                onChange={(e) => setEditedText(e.target.value)}
                                autoFocus
                            />
                        ) : (
                            <span>{todo.text}</span>
                        )}
                        {editingId === todo.id ? (
                            <button onClick={() => handleSave(todo.id)} className='ml-2 text-blue-600'>
                                Save
                            </button>
                        ) : (
                            <button onClick={() => handleEditClick(todo.id,todo.text)} className='ml-2 text-blue-600'>
                                Edit
                            </button>
                        )}

                        <button onClick={() => handleDeleteClick(todo.id)} className='ml-2 text-red-600'>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos;
