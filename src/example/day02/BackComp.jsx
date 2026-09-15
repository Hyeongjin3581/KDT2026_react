const BackComp = ({onMyEvent2})=>{
    return (<>
        <li><a href="https://maplescouter.com/ko/info?name=%EC%8B%9C%EC%99%80%EB%A6%B0" onClick={(event)=>{
            event;
            onMyEvent2('백엔드 클릭됨(함수는 전달받음)');
        }}>백엔드</a></li>
        <ul>
        <li>Java</li>
        <li>Oracle</li>
        <li>Jsp</li>
        <li>Spring Boot</li>
        </ul>
    </>)
}

export default BackComp;