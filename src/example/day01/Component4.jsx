function FrontComp(props){
    const liRows = [];
    for(let i =0; i<props.propData1.length ; i++){
        // 부모로부터 전달받은 props 내 propData1 반복
        liRows.push( // java는 add() , js는 push()
            <li key={i}>{props.propData1[i]}</li>
            // 배열명.push( 값 ); // 배열내 값 추가
        );
    }
    return (<>
        <li>{props.frTitle}</li>
        <ul>
            {liRows}
        </ul>
    </>)
}

const BackComp =({propData2 , baTitle}) => {
    const liRows =[]; // 배열
    let keyCnt =0;
    for(let row of propData2){
        // 부모로부터 전달받은 props내 propData1을 반복
        liRows.push(
            <li key={keyCnt++}>{row}</li>

        );
    }
    return (<>
        <li>{baTitle}</li>
        <ul>
            {liRows}
        </ul>
    </>)
}



function Component4(){
    const frontData = [ 'HTML5', 'CSS3' , 'Javascript', 'jQuery', "React" ];
    const backData = [ 'Java' , 'Oracle' , 'JSP' , 'Spring Boot'  ]
     return (<>
        <div>
            <h2>React-Props</h2>
            <ol>
                <FrontComp propData1 = {frontData} frTitle ="프론트엔드"></FrontComp>
                <BackComp propData2 = {backData} baTitle= "백엔드"/>
            </ol>
        </div>
    </>)
}

export default Component4

// function App(){
//     const frontData = ['HTML5' , 'CSS3' , 'Jaavascript' , 'jQuery'];
//     const backData = ['Java' , 'Oracle' , 'JSP' , 'Spring Boot'];
//     return (<>
//         <div>
//             <h2>React-Props</h2>
//             <ol>
//                 <FrontComp propData1 = {frontData} frTitle ="프론트엔드"></FrontComp>
//                 <BackComp propData2 = {backData} baTitle= "백엔드"/>
//             </ol>
//         </div>
//     </>)
// }
