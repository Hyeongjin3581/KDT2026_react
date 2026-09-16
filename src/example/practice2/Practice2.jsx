import { useState } from "react"

export default function Practice2(){
    const [ name , setName ] = useState('킴투투');
    const [ phone , setPhone ] = useState('밥');
    const [ age , setAge ] = useState(99);
    const [ members, setMembers ] = useState([
        { name: '신동엽', phone: '010-7894-7894', age: 50 },
        { name: '강호동', phone: '010-4321-4321', age: 40 },
        { name: '유재석', phone: '010-1234-1234', age: 30 }
    ]); // 빈배열 선언

    const 등록함수 = () => {
        const obj = {name, phone, age}
        members.push(obj);
        setMembers([...members])// 렌더링을 위한 member setter 하기.
    }

    const 삭제함수 = (index)=> {
        members.splice(index , 1)
        setMembers([...members])
    }

    return(<>
        <input value={name} onChange={(e) => {setName(e.target.value); }}/>
        <input value={phone} onChange={(e) => {setPhone(e.target.value); }}/>
        <input value={age} onChange={(e) => {setAge(e.target.value); }}/>
        <button onClick={등록함수}>등록</button>
        <br/>
        { 
            members.map ( (n , index) => {
                return(<>
                    <div>
                        <span> 성명 : {n.name} </span>
                        <span> 연락처 : {n.phone} </span>
                        <span> 나이 : {n.age} </span>
                        {/* {index} */}
                        <button onClick={ () => 삭제함수(index)}> 
                            삭제 
                        </button>
                    </div>
                </>);
            })
        }
        <div>총 인원 : {members.length} </div>
    </>)
}