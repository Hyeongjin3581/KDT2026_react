import {useLocation , useSearchParams } from "react-router-dom";

export default function RouterHooks(){
    const location = useLocation();
    const [SearchParams , setSeatchParams] = useSearchParams();
    const mode = SearchParams.get('mode');
    const pageNum = SearchParams.get('pageNum');

    const changeMode = () => {
        const nextMode = (mode==='list') ? 'view' : 'list';

        setSeatchParams({
            mode : nextMode, pageNum
        });
    }

    const nextPage = () => {
        let pageTemp = (pageNum===null || isNaN(pageNum)) ? 1 : parseInt(pageNum) + 1;

        setSeatchParams({
            mode, pageNum : pageTemp
        });
    }

    const prevPage = () =>{
        let pageTemp = (pageNum===null || isNaN(pageNum)) ? 1 :parseInt(pageNum) -1;
    
        setSeatchParams({
            mode, pageNum : pageTemp
        });
    }
    return(<>
        <h2>라우터 관련 Hook</h2>
        <div>
            <ul>
                <li> URL : {location.pathname}</li>
                <li>쿼리스트링 : {location.search}</li>
                <li> mode : {mode} </li>
                <li> pageNum : {pageNum} </li>
            </ul>
            <button onClick={changeMode}>mode변경</button>
            <button onClick={prevPage}>이전page</button>
            <button onClick={nextPage}>다음page</button>
        </div>
    </>);
} // RouterHooks end
