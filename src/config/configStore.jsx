import { configureStore } from "@reduxjs/toolkit";
import counter from "../modules/counter";


// const store = cretatestor(reducer);
const store = configureStore({
  //객체 안에 리듀서가 들어갑니다. 
  reducer: {
    counter:counter,
  }
})

export default store;

// 