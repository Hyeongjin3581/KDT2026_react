/* 구조분해 : 객체/배열 내 요소들을 각각 변수로 분해
    const {name , age} = {name : "유재석" , age = 50}
    console.log(name, age);

    const [name , setName] = ["유재석" , function setter(){} ]
    console.log(name);  setName( );
*/

import { useState } from "react";

let 전역변수 = 0; //함수 바깥에 변수


export default function Component2( ){
    let 지역변수 = 1; // 함수 안에 변수
    // 1. 전역변수 , 지역변수 증가함수 : 내부적으로는 증가, 화면은 증가 x (렌더링을 안했기 때문)
    const 증가함수1 = () => {
        전역변수++;
        지역변수++;
        console.log(전역변수,지역변수)
    }
    // 2. useState 함수를 이용한 새로고침(함수재호출 --> 함수 return )

    // const [상태변수명 , set상태변수명 ] = useState(초기값);
    const [count , setCount] = useState( 0 );
    const 증가함수2 = () => {
        setCount(count + 1);
    }   // setXXX ( 새로운값 ) : 자동으로 현재 컴포넌트가 재실행 , 지역변수(함수내 선언안된 변수)는 초기화.
    //상태변수는 상태/값이 유지된다. 

    //3 . 수박 요소 1개를 갖는 배열 초기값으로 상태변수 선언

    // 배열/객체 상태는 기존 값을 직접 수정하지 않는다.
    // push()는 기존 배열 내부만 수정하므로 배열의 참조값은 그대로이다.
    // React는 이전 state와 새로운 state를 비교하여 변경 여부를 판단한다.
    // [...array]를 사용하면 새로운 배열이 생성되어 참조값이 달라진다.
    // 따라서 새로운 배열을 setArray()에 전달하면 재렌더링된다.

    const [array, setArray] = useState(['수박']);
    // 배열내 '사과' 요소를 추가하여 setXXX 배열을 대입. 내부적으로는 배열추가 o , 화면으로는 추가 x
    const 증가함수3 = () => {
        // array.push('사과'); setArray(array); console.log(array)
        array.push('사과'); setArray([...array])
    }


        return (<>
        <h3>상태 관리</h3>
        <h4>전역변수 : {전역변수} , 지역변수 : {지역변수}</h4>
        <button onClick={증가함수1}>버튼1</button>
        <h4>상태변수 :{count}</h4>
        <button onClick={증가함수2}>버튼2</button> 
        <h4>상태변수 : {array} </h4>
        <button onClick={증가함수3}>버튼3</button>
    </>)
}