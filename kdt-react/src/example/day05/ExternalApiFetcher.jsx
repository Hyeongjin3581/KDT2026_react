import axios from "axios";
import { useState, useEffect } from "react";

function RandomUser(props) {

    // 6번째 줄 수정
    const [myJSON, setMyJSON] = useState({ results: [] });

    useEffect(function () {

    const getRandomUser = async function () {
        const response = await axios.get(
            "https://randomuser.me/api/?results=5"
        );

        const data = response.data;

        setMyJSON(data);
    };

    getRandomUser();

}, []);

    // 현재 상태변수에 존재하는 리스트들을 tr 구성하여 하나씩 html 만들기
    let trTag = myJSON.results.map((data) => {
        return (
            // key={{ }} → key={ }
            <tr key={data.login.md5}>

                <td>
                    <img
                        src={data.picture.thumbnail}
                        alt={data.login.username}
                    />
                </td>

                <td>
                    <a
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            props.onProfile(data);
                        }}>
                        {data.login.username}
                    </a>
                </td>

                <td>
                    {data.name.title} {data.name.first} {data.name.last}
                </td>

                <td>{data.nat}</td>
                <td>{data.email}</td>
            </tr>
        );
    });

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>사진</th>
                        <th>로그인</th>
                        <th>이름</th>
                        <th>국가</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>{trTag}</tbody>
            </table>
        </div>
    );
} // RandomUser end


export default function ExternalApiFetcher() {

    return (
        <>
            <h2>외부 서버 통신</h2>

            <RandomUser
                onProfile={(sData) => {

                    console.log(sData);

                    let info = `
                    전화번호 : ${sData.cell}
                    성별 : ${sData.gender}
                    username : ${sData.login.username}
                    password : ${sData.login.password}
                    `;

                    alert(info);
                }}
            />

        </>
    );
}

/*
    axios란? API 비동기통신
    사용법 (동기화 통신)
        const 함수명 = async() =>{
            cosnt response = await axios.HTTP메소드명 ("통신할주소?쿼리스트링" , {body});
            const data = response.data 
            }

*/