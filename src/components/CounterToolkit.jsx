import React from 'react'
import { useSelector } from 'react-redux';
import { useCounter } from '../hook/useCounter';

function CounterToolkit() {
  // useSelect와 useDispatch를 통해서 저장소와, acton.type 을 가져와야 되는 부분은 동일합니다. 
  const counter = useSelector((state)=> state.counter)
  // 함수를 커스텀훅으로 분리시켜보자. from '../hook/useCounter'
  const [onPlusButtonClickHandler, onMinusButtonClickHandler] = useCounter();
 
  return (
    <>
    <div>
      <p>현재 카운터의 숫자</p>
      {counter.number}</div>
    <div>
      <button onClick={onPlusButtonClickHandler}>더하기</button> : 23/3/11 Thunk(setTimeout 3s) 로 업그레이드 됨
      <br/>
      <button onClick={onMinusButtonClickHandler}>빼기</button> : 23/3/11 Thunk(setTimeout 3s) 로 업그레이드 됨
    </div>
    </>
  )
}

export default CounterToolkit;