// [필수] 1. 리엑트 라이브러리 최초로 렌더링(그리기) 하는 함수 
import { createRoot } from "react-dom/client";
//[필수] 2. index.html 에서 root 마크업 가져오기 , #ID , Class
const root = document.querySelector( "#root")
// [필수] 3. 가져온 root 마크업을 createRoot 함수에 전달한다.
const create = createRoot( root );

// [선택] 최초로 화면을 그리기 할 컴포넌트 가져와서 렌더링
// 1. import 이용하여 컴포넌트를 가져온다.
// import App from './App.jsx'
// 2. 가져온 컴포넌트 랜더링하기 (렌더는 한번만 가능함 !!!!!!!!!!!!!!!!!)
// create.render (<App> </App>)

// import MyMarkup from "./example/day01/MyMarkUp";
// create.render(<MyMarkup></MyMarkup>)

// import Component1 from "./example/day01/Component1";
// create.render(<Component1></Component1>)

// import Component2 from "./example/day01/Component2";
// create.render(<Component2></Component2>)

// import Component3 from "./example/day01/Component3";
// create.render(<Component3></Component3>)

// import Component4from "./example/day01/Component4";
// create.render(<Component4></Component4>)

// import Component5 from "./example/day01/Component5";
// create.render(<Component5></Component5>)

// import Component6 from "./example/day01/Component6";
// create.render(<Component6></Component6>)

// import Component1 from "./example/day02/Component1"
// create.render(<Component1></Component1>)

// import Component2 from "./example/day02/Component2"
// create.render(<Component2></Component2>)

// import App from "./example/day02/ComponentExam/App"
// create.render(<App></App>)

// import Component1 from "./example/day03/Component1";
// create.render(<Component1></Component1>)

// import Component2 from "./example/day03/Component2";
// create.render(<Component2></Component2>)

// import Component3 from "./example/day03/Component3";
// create.render(<Component3></Component3>)


// --------------------- day 04 --------------------------------
// 최초 렌더링되는 컴포넌트 앞뒤로 라우터컴포넌트 감싼다.

// import App from "./example/day04/App";
// import { BrowserRouter } from "react-router-dom";
// create.render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//     )


// --------------------- day 05 --------------------------------
// 최초 렌더링되는 컴포넌트 앞뒤로 라우터컴포넌트 감싼다.

// import App from "./example/day05/App";
// import { BrowserRouter } from "react-router-dom";
// create.render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//     )

// --------------------- day 06 --------------------------------

import App from "./example/day06/App";
import { BrowserRouter } from "react-router-dom";
create.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )




// ---------------------- practice -----------------------------
// import Practice1 from "./example/Practice1/practice1";
// create.render(<Practice1></Practice1>)

// import Practice2 from "./example/Practice2/practice2";
// create.render(<Practice2></Practice2>)

// import App from "./example/practice3/App";
// import { BrowserRouter } from "react-router-dom";
// create.render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//     )


// import App from "./example/practice4_1/App";
// import { BrowserRouter } from "react-router-dom";
// create.render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//     )