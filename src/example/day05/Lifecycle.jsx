import { useEffect, useState } from "react"

function MoveBox(props){
    const [position , setPosition] = useState(props.initPosition);
    const [leftCount , setLeftCount] = useState(1);
    const boxStyle = {
        backgroundColor : 'red' , position : 'relative' , textAlign : 'center' , 
        width : '100px' , height : '100px' , margin : '10px' , lineHeight : '100px',
        left : `${position}px`
    }
    const moveLeft = () => {
        setPosition( ()=> position-20);
        setLeftCount( ()=> leftCount +1);
    }
    const moveRight = () => {
        setPosition (() => position + 20);
    }
    useEffect( ()=> {
        console.log('useEffect 실행 --> 마운트')
        return ()=> {
            console.log('useEffect 실행 --> 언마운트')
        }
    }, [leftCount]); // 의존성 배열에 State 변수 할당
    console.log('return 실행 --> 렌더링')
    return(<>
        <div style ={boxStyle}>{leftCount}</div>
        <button onClick={moveLeft}>좌측이동</button>
        <button onClick={moveRight}>우측이동</button>
    </>)
}

export default function Lifecycle(){
    return(<>
    <MoveBox initPosition= {50} ></MoveBox>
    </>)
}