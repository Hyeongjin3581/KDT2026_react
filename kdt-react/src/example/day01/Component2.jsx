function FrontComp(props){
    return(<>
        <li>프론트엔드</li>
        <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>jQuery</li>
        </ul>
    </>)
}

const BackComp = (props) => {
    return(<>
        <li> 백엔드 </li>
        <ul>
            <li>Java</li>
            <li>Oracle</li>
            <li>JSP</li>
            <li>Spring Boot</li>
        </ul>
    </>)
}
let FormComp = function(props){
    return(<>
        <form>
            <select>
                <option value ="front">프론트엔드</option>
                <option value ="back">백엔드</option>
            </select>
            <input/>
            <input value="추가"/>
        </form>
    </>)
}

export default function Component2(props){
    return (<>
        <div>
            <h2>리엑트 컴포넌트</h2>
            <ol>
                <FrontComp></FrontComp>
                <BackComp></BackComp>
            </ol>
            <FormComp></FormComp>
        </div>
    </>)
}