import { Route, Routes } from "react-router-dom";
import Jin from "./Jin";
import LimJunHee from "./LimJunHee";
import Seokam from "./Seokam";
import TopNavi from "./TopNavi";

export default function App(){
    return (<div className="projectLayout">
    <TopNavi />
    <main className="projectContent">
    <Routes>
            <Route path="/" element={ <h2>000 팀 프로젝트 홈</h2> } />
            <Route path="/LimJunHee" element={ <LimJunHee/> } />
            <Route path="/Jin" element={ <Jin/> } />
            <Route path="/Seokam" element={ <Seokam/> } />
            <Route path="*" element={ <h2>페이지를 찾을 수 없습니다.</h2> } />
    </Routes>
    </main>
    </div>)
}

