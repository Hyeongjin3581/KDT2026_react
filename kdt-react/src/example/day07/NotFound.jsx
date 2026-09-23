import { Link } from "react-router-dom";

export default function NotFound(){
    return(<>
    <h2>Not Found</h2>
        <p>
            페이지를 찾을 수 없습니다. ㅋㅅㅋ <br/>
            <Link to="list">목록으로 바로가기</Link>
        </p>
    </>);
}