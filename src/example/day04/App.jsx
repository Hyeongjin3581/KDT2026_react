import { Route , Routes } from "react-router-dom"
import Home from "./Home"

export default function App(props){
    return (<>
    <Routes>    {/* 여기에 들어가는 경로들은 주소정의에 따라 렌더링됨. */}
        <Route path="/Home" element={<Home/>}/> {/* 세글자 정도만 치고 Ctrl + spacebar */}
    </Routes>
    </>)
}