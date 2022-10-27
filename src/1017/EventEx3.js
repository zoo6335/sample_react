import { useState } from 'react';

const EventEx3 = ()=> {
    const[username, setUsername] = useState('');
    const[message, setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(username + " : " + message);
        setUsername('');
        setMessage('');
    }
    const onKeyPress = e => {
        if(e.key === "Enter") {
            onClick();
        }
    }
    return(
        <>
        <h1>이벤트 연습</h1>
        <input type='type' placeholder='사용자명' value={username} onChange={onChangeUsername} />
        <input type='type' placeholder='아무거나 입력' value={message} onChange={onChangeMessage} 
        onKeyPress={onKeyPress}/>
        <button onClick={onClick}>버튼이댜</button>
        </>
    );
}
export default EventEx3;