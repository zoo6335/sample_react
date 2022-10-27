import { useState } from "react";

const EventInput = () => {
    const [message, setMessage] = useState('안녕하세용');
    const changeMsg = (e)=>{
        setMessage(e.target.value);  // 이벤트 요소의 타켓(input박스에 들어온 값)
    } 
    
    return(
        <div>
            <h1>이벤트 연습</h1>
            <input type="type" name="message" placeholder="아무거나 입력해" onChange={changeMsg}/>
            <h2>입력 받은 메시지 : {message}</h2>
        </div>
    );
}

export default EventInput;