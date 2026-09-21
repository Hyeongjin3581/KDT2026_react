import { NavLink } from "react-router-dom"

export default function TopNavi(){
    return(<>
        <nav>
            <NavLink to ="/">생명주기, </NavLink>
            <NavLink to ="/local">내부통신, </NavLink>
            <NavLink to ="/external">외부통신, </NavLink>
        </nav>
    </>)
}

// <a href="이동할경로"> 텍스트 </a>                        : 페이지 로드(새로고침) 있다.
// <NavLink to = "이동할경로"> 텍스트 </NavLink>    : 페이지 로드(새로고침) 없다.
// <Link to = "이동할경로"> 텍스트 </Link>                  : 페이지 로드(새로고침) 없다. active클래스가없다.