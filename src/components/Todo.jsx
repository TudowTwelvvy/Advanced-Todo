import React, { useState } from 'react';
import { FaCirclePlus } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { BsSearch } from "react-icons/bs";
import FilterButton from './FilterButton';
import TodoList from './TodoList';
import { addTodo, updateSearchTerm } from '../redux/actions';

function Todo() {
  const dispatch= useDispatch()
  const [newTodoText,setNewTodoText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTodo =(text)=>{
    dispatch(addTodo(text))
  }

  const handleAddClick = ()=>{
    if(newTodoText.trim()!== ''){
      handleAddTodo(newTodoText.trim())
      setNewTodoText('')
    }
  }

  const handleSearchChange=(value)=>{
    setSearchTerm(value);
    dispatch(updateSearchTerm(value))
  }

  console.log(newTodoText)
  return (
    <div className='max-w-4xl mx-auto bg-gray-100 sm:mt-8 p-4 rounded'>
      <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>PERSONAL TODO APP</h2>

      <div className='flex justify-between items-center w-full mb-4 bg-white rounded-lg border-2'>
        <input onChange={(e)=>setNewTodoText(e.target.value)} type="text" name="addTodoInput" placeholder='Add Todo'className='p-2 focus:outline-none focus:outline-none flex-1' value={newTodoText}/>
        <button onClick={handleAddClick} className=' p-2 text-pri-blue text-3xl cursor-pointer hover:text-opacity-85'><FaCirclePlus/></button>
      </div>


      <div className='flex flex-col-reverse md:flex-row md:items-center  justify-between gap-2 md:gap-36 '>
        <FilterButton/>

        <div className='flex flex-1 items-center mb-2 md:mb-4  bg-white justify-between rounded border-2 '>
          <input onChange={(e)=>handleSearchChange(e.target.value)} type="text" name="searchTodoInput" placeholder='Search'className='p-1 md:p-2 focus:outline-none focus:outline-none flex-1 w-full' value={searchTerm}/>
          <button  className=' p-1 text-pri-blue text-lg md:text-3xl cursor-pointer hover:text-opacity-85 :'><BsSearch/></button>
        </div>
      </div>

      <TodoList/>
    </div>
  )
}

export default Todo