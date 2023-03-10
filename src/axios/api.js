import axios from "axios";

// axios를 통해서 가공해봅시다.
const instance = axios.create({
  baseURL:process.env.REACT_APP_SERVER_URL,
  timeout: 1,
  // timeout 몇초까지 기다렸다고 응답을 받지 못하면 오류를 발생시킬꺼야
  // 밀리세컨드 1 말도 안되는 숫자이기에 오류가 발생될 것입니다. 
});

instance.interceptors.request.use(
  // 요청을 보내기 전 수행되는 함수
  function(config){
    console.log("인터셉터 요청 성공!")
    return config;
  },
  // 오류 요청을 보내기 전 수행되는 함수
  function(error){
    console.log("인터셉터 요청 오류!")
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  // 요청을 보내기 전 수행되는 함수
  function(response){
    console.log("인터셉터 응답 받았습니다.")
    return response
  },
  // 오류 요청을 보내기 전 수행되는 함수
  function(error){
    console.log("인터셉터 응답 오류 발생")
    return Promise.reject(error)
  }
)
export default instance;