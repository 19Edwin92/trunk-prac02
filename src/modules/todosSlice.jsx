// 비동기 함수를 위해서 thunk를 불러옵시다.
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos : [],
  isLoading: false,
  isError: false,
  error: null
};

export const __getTodos = createAsyncThunk(
  // 가짜서버인 json-server에서 가져온 자료를 store에 넣어봅시다 . 2개의 툴킷이 제공하는 API를 활용해봅시다.
  "getTodos",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:4001/todos')
      console.log(response.data)
      return thunkAPI.fulfillWithValue(response.data);
    }
    catch (error) {
      console.log("error", error)
      return thunkAPI.rejectWithValue(error);
    }  
  }
);

export const todosSlice = createSlice({
  name : "todos",
  initialState,
  reducers : {},
  extraReducers : {
    [__getTodos.pending] : (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__getTodos.fulfilled] : (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.todos = action.payload
    },
    [__getTodos.rejected] : (state, action) => {
      state.isLoading = false; 
      state.isError = true;
      state.error = action.payload
    }
  }
});

// export const {} = todosSlice.actions;
export default todosSlice.reducer;