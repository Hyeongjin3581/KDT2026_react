function FrontComp(props){
    return(<>
    <li><a href="/" onClick={() =>{
        props.onMyEvent1();
    }}>프론트엔드</a></li>
    <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript</li>
        <li>jQuery</li>
    </ul>
</>)
}

function Component6(){
    return (<>
    <h2>React-Event</h2>
        <ol>
        <FrontComp onMyEvent1={() =>{
            alert('프론트엔드 클릭됨(부모전달) ' );
        }}></FrontComp>
        <BackComp onMyEvent2={(msg)=>{
            alert(msg);
        }}/>
        </ol>
    </>)
}
const BackComp = ({onMyEvent2})=>{
    return (<>
        <li><a href="/" onClick={(event)=>{
            event.preventDefault();
            onMyEvent2('백엔드 클릭됨(자식전달)');
        }}>백엔드</a></li>
        <ul>
        <li>Java</li>
        <li>Oracle</li>
        <li>Jsp</li>
        <li>Spring Boot</li>
        </ul>
    </>)
}

export default Component6