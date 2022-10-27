import { useState } from "react";

const Event = ()=>{
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("black");
    const onClickEnter = () => setMessage("안녕하세요"); // onClick 이벤트 발생 시 호출될 함수
    const onClickLeave = ()=> setMessage("안녕히 가세요");

    return ( // 렌더링 부분
        <>
            {/* <button onClick="onClickEnter()">입장</button>   : html과 js를 연결해주는 이벤트문법 */}
            <button onClick={onClickEnter}>입장</button>  
            <button onClick={onClickLeave}>퇴장</button>  
            <h1 style={{color}}>{message}</h1>
            {/* 한 줄짜리는 무조건 화살표 표기 사용: onClick={()=>setColor('red') */}
            <button style={{color:'red'}} onClick={()=>setColor('red')}>빨</button>
            <button style={{color:'green'}} onClick={()=>setColor('green')}>초</button>
            <button style={{color:'blue'}} onClick={()=>setColor('blue')}>파</button>
            
        </>
    )
}
export default Event;
