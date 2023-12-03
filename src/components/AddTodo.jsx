import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();

    if(!input)
    {
        return ;
    }
    dispatch(addTodo({ text: input }));
    setInput('');
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleAddTodo} className="bg-gray-100 p-4 rounded-lg shadow-md">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter Todo'
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-60"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 ml-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
