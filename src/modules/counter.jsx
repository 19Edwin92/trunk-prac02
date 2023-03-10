import { createSlice } from "@reduxjs/toolkit";
// createSlice()
// 덕스 패턴으로 만들었던 actiontype, actionCreator 를 단번에 만들 수 있도록 

// createSlice로 생성하고, 그 안에 객체를 가지는 아래와 같은 3개의 객체를 가집니다. 
    // name: '',
    // initialState: '',
    // reducers: ''

    
// Initial State
const initialState = {
  number: 0,
};


const counterSlice = createSlice({
  name : 'counter',
  initialState,
  reducers: {
    addNumber: (state, action)=> {
      state.number = state.number + action.payload
    },
    minusNumber: (state, action)=> {
      state.number = state.number - action.payload
    },
  }
})

export default counterSlice.reducer;
export const {addNumber, minusNumber} = counterSlice.actions;