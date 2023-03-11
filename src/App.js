import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { __getTodos } from './modules/todosSlice';

function App() {
  const dispatch = useDispatch();
  const {isLodaing, error, todos} = useSelector(state => {
    return state.todos
  })

  useEffect(()=> {
    dispatch(__getTodos())
  },[])

  if(isLodaing) {
    return <div>로딩 중 ....</div>
  } 
  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      {
        todos.map(todos => {
          return <div key={todos.id}>
            {todos.title}           
          </div>
        })
      }
    </div>
  )
}

export default App