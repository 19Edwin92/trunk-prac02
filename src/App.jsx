// json-server 열기 : yarn json-server --watch db.json --port 4000 
// import axios from 'axios'
import api from './axios/api'
import React, { useEffect, useState } from 'react'
import CounterToolkit from './components/CounterToolkit'

function App() {
  const [todos, setTodos] = useState(null)
  const [inputValuse, setInputValue] = useState({
    title:"",
    // NoSQL 방식은 자동으로 id를 부여해줍니다. 그래서 입력하지 않는 것입니다. 
  })
  const [targerId, setTargetId] = useState('')
  const [contents, setContens] = useState('')
                        // 비동기 통신을 위한 함수선언문 앞에 async 를 선언하면 비동기 프로그래밍을 할 것이라고 명시하는 부분입니다. 
                        // 그러나 서버로부터 받아오는 시간이 있기 때문에, await를 사용하지 않으면, 콘솔에 값이 기록되지 않을 것입니다. 
                        // 그러기에, 값을 할당 받을 때까지 기다려달다는 await를 통해서 원하는 값에 접근할 수 있게 됩니다. 기다렷!!

  // GET
  const fetchTodos = async () => {
 //const {data} = await axios.get(`'http://localhost:4000/todos'`); // 환경변수 활용하기
 //const {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);  // 새로운 인스턴스를 활용해서 간략하게 입력하는 것도 가능합니다 
   const {data} = await api.get(`/todos`);
    setTodos(data);
  };

  useEffect(() => {       //db.json에서 값을 가져오기
    fetchTodos();
  }, []);

  // POST
  const SumbintFunc = async (e) => {
    e.preventDefault();                                 
  //axios.post('http://localhost:4000/todos', inputValuse);    // 환경변수 활용하기
  //axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, inputValuse);  // 새로운 인스턴스를 활용해서 간략하게 입력하는 것도 가능합니다 
    api.post(`/todos`, inputValuse);
    setInputValue([...todos, inputValuse])
    fetchTodos();
  } 
  const onDeleteButtonHandler =  async (id) => {
  //axios.delete(`http://localhost:4000/todos/${id}`)          // 환경변수 활용하기
  //axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`)  // 새로운 인스턴스를 활용해서 간략하게 입력하는 것도 가능합니다 
    api.delete(`/todos/${id}`)
    setTodos(todos.filter(el => el.id !== id))
  }

  const onUpdateButtonHandler= async () => {
  //axios.patch(`http://localhost:4000/todos/${targerId}`      // 환경변수 활용하기
  //axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${targerId}`, {  // 새로운 인스턴스를 활용해서 간략하게 입력하는 것도 가능합니다 
    api.patch(`/todos/${targerId}`, {
      title:contents
    })
    setTodos(todos.map(el =>{
      if(el.id === Number(targerId)) {
        return {...el, title:contents}
      } else {
        return el
      }
    }))
  }

  return (
    <>
    <CounterToolkit />
    <hr/>
    AXIOS

    <>
        {/* 수정영역 */}
        <div>
          <input 
              type="text" 
              value={targerId} 
              onChange={e => setTargetId(e.target.value)} 
              placeholder='수정할 id' />
          <input 
              type="text" 
              value={contents} 
              onChange={e => setContens(e.target.value)} 
              placeholder='수정할 내용' />

          <button onClick={onUpdateButtonHandler}>수정</button>
        </div>

        {/* 입력공간 */}
        <form onSubmit={(e)=> SumbintFunc(e)}>
          <input type="text"
              value={inputValuse.value}
              onChange={(e) => setInputValue({
              title: e.target.value
            })} />
          <button type='submit'>추가하기</button>
        </form>
      </>
                      {/* 내용입력공간 */}
                      {/* 처음실행시에는, 요청을 받아오기 전이기 때문에 null이다. 이 부분에 옵셔널체이닝을 넣으면 일단 undefined가 반환되고, 오류메시지는 뜨지 않는다. */}
                      {/* 이어서 실행되는 결과에 따라 화면이 리렌더링 되면서, 내용이 적용될 것이다.  */}
      <div>
  
        {todos?.map(el => (
          <p key={el.id}>
            {el.id} : {el.title} <button onClick={()=> onDeleteButtonHandler(el.id)}>삭제</button>
          </p>))}
      </div>
    </>
  )
}

export default App