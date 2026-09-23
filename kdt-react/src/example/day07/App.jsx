import { Routes, Route } from "react-router-dom"
import NotFound from "./NotFound"


export default function App(){
    return(<>
        <Routes>
            <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
    </>)
}