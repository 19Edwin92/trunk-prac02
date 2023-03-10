import { useDispatch } from "react-redux";
import { addNumber, minusNumber } from '../modules/counter';

export const useCounter = () => {
  const dispatch = useDispatch();
  const onPlusButtonClickHandler = () => {
    dispatch(addNumber(1)
    )
  }
  const onMinusButtonClickHandler = () => {
    dispatch(minusNumber(1)
    )
  }
  return [onPlusButtonClickHandler, onMinusButtonClickHandler]
}