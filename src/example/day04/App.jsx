import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import TopNav from "./TopNav";
import NotFound from "./NotFound";
import CommonLayout from "./CommonLayout";
import LayoutIndex from "./LayoutIndex";
export default function App(){
    return (<>
    <TopNav></TopNav>
    <Routes>    {/* 여기에 들어가는 경로들은 주소정의에 따라 렌더링됨. */} {/* 세글자 정도만 치고 Ctrl + spacebar */}
            <Route path="/" element={ <Home/> } />
            <Route path="/intro" element={ <CommonLayout/>} >
                <Route index element={ <LayoutIndex /> } />
            </Route>
            <Route path="*" element={ <NotFound/> } />
    </Routes>
    </>)
}

