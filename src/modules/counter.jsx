import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// createSlice()
// 덕스 패턴으로 만들었던 actiontype, actionCreator 를 단번에 만들 수 있도록 

// createSlice로 생성하고, 그 안에 객체를 가지는 아래와 같은 3개의 객체를 가집니다. 
    // name: '',
    // initialState: '',
    // reducers: ''


// 1-15 Thunk 이용하기 => createAsyncThunk 실행과 식별자 생성 __ (언더바 두개)
//// (1) 이름 : 의미는 크게 없음
//// (2) 함수 : 비동기처리를 하기 위한, 서버에 요청을 하기 위해 사용    
export const __addNumber = createAsyncThunk(
  "ADD_NUMBER_WAIT",
  (payload, thunkAPI) => {
    // 수행하고 싶은 동작 : 예제에서는 3초를 설정해보자. 
    setTimeout(()=> {
      thunkAPI.dispatch(addNumber(payload)) // 여기에 들어가는 것을 볼 수 있다. 
    }, 3000)
  }
);

export const __minusNumber = createAsyncThunk(
  "MINUS_NUMBER_WAIT",
  (payload, thunkAPI) => {
    // 수행하고 싶은 동작 : 예제에서는 3초를 설정해보자. 
    setTimeout(()=> {
      thunkAPI.dispatch(minusNumber(payload)) // 여기에 들어가는 것을 볼 수 있다. 
    }, 3000)
  }
);
    


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