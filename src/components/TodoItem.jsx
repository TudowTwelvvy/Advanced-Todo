import React from 'react'
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { markCompleted, markIncompleted, removeTodo, toggleTodo } from '../redux/actions';
import { FaCheckSquare, FaTimes } from "react-icons/fa";
import { FaTrash } from 'react-icons/fa6';

function TodoItem({todo, index}) {
  const dispatch = useDispatch()
  return (
    <li className='flex items-center justify-between borderb-2 py-2 gap-4'>
      <div className='flex items-center'>
        <span className='mr-4 text-gray-600'>{index+1}</span>
        <span className={`mr-4 ${todo.completed? "line-through text-red-500":" "}`}>{todo.text}</span>
      </div>

      <div className='space-x-3 ml-8'>
        <button onClick={()=> dispatch(toggleTodo(index))} className='mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded'>{todo.completed ? <BsToggle2Off/> : <BsToggle2On/>}</button>
        <button onClick={()=> dispatch(removeTodo(index))} className='mr-2 text-sm bg-red-500 text-white sm:px-2 py-1 px-1 rounded'><FaTrash/></button>


        {
          !todo.completed && (
            <button onClick={()=> dispatch(markCompleted(index))} className='mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded'><FaCheckSquare /></button>
          )
        }

        {
          todo.completed && (
            <button onClick={()=> dispatch(markIncompleted(index))} className='mr-2 text-sm bg-yellow-500 text-white sm:px-2 py-1 px-1 rounded'> 
          <FaTimes/></button>
          )
        }
        
        
      </div>
    </li>
  )
}

export default TodoItem