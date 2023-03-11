import { useDispatch } from "react-redux";
// import { addNumber,minusNumber } from '../modules/counter';
import { __addNumber,__minusNumber } from "../modules/counter";

export const useCounter = () => {
  const dispatch = useDispatch();
  const onPlusButtonClickHandler = () => {
    // dispatch(addNumber(1) // 여기서 사자린 dispatch.type 은 어디로 간 것일까? -> __addNumber 를 선언한 thunk로 가서 확인해보자. 
    dispatch(__addNumber(1)
    )
  }
  const onMinusButtonClickHandler = () => {
    // dispatch(minusNumber(1)
    dispatch(__minusNumber(1)
    )
  }
  return [onPlusButtonClickHandler, onMinusButtonClickHandler]
}