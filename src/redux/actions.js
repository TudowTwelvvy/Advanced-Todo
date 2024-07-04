import { ADD_TODO, MARK_ALL_COMPLETED, MARK_COMPLETED, MARK_INCOMPLETE, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH_TERM } from "./actionTypes"

export const addTodo =(text)=>{
  return {
    type: ADD_TODO,
    payload:{text}
  }
};

export const toogleTodo =(id)=>{
  return{
    type: TOGGLE_TODO,
    payload:{id}
  }
}

export const removeTodo =(id)=>{
  return{
    type: REMOVE_TODO,
    payload:{id}
  }
}

export const markCompleted =(id)=>{
  return{
    type: MARK_COMPLETED,
    payload:{id}
  }
}

export const markInompleted =(id)=>{
  return{
    type: MARK_INCOMPLETE,
    payload:{id}
  }
}

export const filterTodos =(filter)=>{
  return{
    type: FILTER_TODO,
    payload:{filter}
  }
}

export const markAllCompleted =(filter)=>{
  return{
    type: MARK_ALL_COMPLETED
  }
}

export const updateSearchTerm =(searchTerm)=>{
  return{
    type: UPDATE_SEARCH_TERM,
    payload:{searchTerm}
  }
}

