import { NavLink } from "react-router-dom";
import "./index.css";

export default function TopNavi(){
    return(
        <aside className="topNavi" aria-label="팀 프로젝트 메뉴">
            <h1 className="projectTitle">000 팀 프로젝트</h1>
            <nav className="projectMenu">
                <NavLink to="/" end>홈</NavLink>
                <NavLink to="/LimJunHee">LimJunHee</NavLink>
                <NavLink to="/Jin">Jin</NavLink>
                <NavLink to="/Seokam">Seokam</NavLink>
            </nav>
        </aside>
    );
}

// <a href="이동할경로"> 텍스트 </a>                        : 페이지 로드(새로고침) 있다.
// <NavLink to = "이동할경로"> 텍스트 </NavLink>    : 페이지 로드(새로고침) 없다.
// <Link to = "이동할경로"> 텍스트 </Link>                  : 페이지 로드(새로고침) 없다. active클래스가없다.