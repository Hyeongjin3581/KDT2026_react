export default function Component5( props ){
    // {/* onClick ="함수명()" --> 리액트방법 --> onClick = 함수명 */}
    // 1. c -> C  / 2. 함수실행 X
    function event1(){ alert('김두두둗두둗ㄷ두둗두ㅜㄷ');}

    const event2 = function(){ alert('골드 1원딜이');}

    const event3 = ()=>{alert('비에고 원딜은 쫌~');}

    return (<>
        <button onClick={event1}>이벤트1</button>
        <button onClick={event2}>이벤트2</button>
        <button onClick={event3}>이벤트3</button>
        <button onClick={() =>{alert('사고긴 해 ㅋ')}}>이벤트4</button>
    </>)
}
// () 자체가 함수를 정의하는 행위?