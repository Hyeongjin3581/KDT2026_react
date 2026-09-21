import { useRef , useState } from "react"


export default function UseRefExam1(){
    const [stateNum , setStateNum] = useState(0);
    const refNum = useRef(0);
    let myNum = 0;

    const plusState = () => {
        setStateNum(stateNum + 1);
        console.log('State 증가' , stateNum);
    }

    const plusRef = () => {
        refNum.current = refNum.current + 1;
        console.log('Ref증가' , refNum.current);
    }
    const plusNum = () => {
        console.log('일반 변수증가' , ++myNum);
    }

    return(<>
    <h2>useRef 사용하기</h2>
    <div>
        <p>State : {stateNum}</p>
        <p>Ref : {refNum.current}</p>
        <p>myNum : {myNum} </p>
        <button onClick={plusState}>State증가</button>
        <button onClick={plusRef}>Ref증가</button>
        <button onClick={plusNum}>Num증가</button>
    </div>
    </>);
}