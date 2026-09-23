import { Routes, Route } from "react-router-dom"
import NotFound from "./NotFound"
import List from "./List"
import Write from "./Write"
import './index.css'


export default function App(){
    return(<>
        <Routes>
            <Route path="*" element={<NotFound></NotFound>}></Route>
            <Route path="/list" element={<List/>}></Route>
            <Route path="/write" element={<Write/>}></Route>
        </Routes>
    </>)
}