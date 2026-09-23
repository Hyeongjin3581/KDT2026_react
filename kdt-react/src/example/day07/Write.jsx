import axios from "axios";
import { useNavigate , Link } from "react-router-dom";

export default function Write(porps){
    const navigate = useNavigate();  // [1] 화면을 이동하기 위한 훅
    // html -> <a> ,                 REACT -> <Link> ,
    // JS -> location.href="" .   REACT -> navigate("")
    // html/js 코드는 깜빡거림. 

    //* 등록함수
    const 등록함수 = async ( event ) => {
        event.preventDefault();
        console.log(event.target)
        const obj = {   // 어려우면 chap 19 랑 chap 20 다시 확인 후 이해할 것
            name : event.target.writer.value ,
            subject : event.target.title.value , 
            content : event.target.contents.value
        }
        // axios (url, body) : // 백엔드에게 HTTP POST 통신
        const response = await axios.post("http://localhost:8080/write" , obj);
        const data = response.data;
        if( data == true ){ navigate("/list")}
    }




   return(<>
    <div>
        <Link to="/list">목록</Link>
            <form onSubmit={등록함수}>
                작성자 : <input name="writer"/> <br/>
                제목 : <input name="title"/>  <br/>
                내용 : <textarea name="contents" row="3" />
                <input type="submit" value="작성"/> 
            </form>
        </div>
   </>);
}