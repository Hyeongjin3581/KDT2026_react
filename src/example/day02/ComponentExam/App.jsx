import {useState} from 'react';
import FrontComp from './FrontComp';
import BackComp from './BackComp';

function App(){
    const [mode , setMode] = useState('both');
    const handleSetMode = (mode) => {
        setMode(mode);
    };
    
    // eslint-disable-next-line no-useless-assignment
    let contents =' ';
    if(mode==='front'){
        contents = <>
            <FrontComp onSetMode={(mode) => {
                setMode(mode);
            }}></FrontComp>
        </>
    }else if(mode ==='back'){
        contents =<> 
            <BackComp setMode={setMode}/>
        </>
    }else{
        contents =<>
            <FrontComp onSetMode ={(mode) =>{
                handleSetMode(mode);
            }}></FrontComp>
            <BackComp setMode={handleSetMode} />
        </>
    }
    return(<>
        <h2><a href='/' onClick={(event) =>{
            event.preventDefault();
            setMode('both');
        }}>리액트-상태</a></h2>
        <ol>
            {contents}
        </ol>
    </>)
}

export default App;

