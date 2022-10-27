import { useState } from "react";

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage("안녕하세유 ~");
    const onClickLeave = () => setMessage("안녕히 가세유 ~");
    const [color, setColor] = useState('black');
    
    let prnMsg = "없음";
    const testClick = () => {
        prnMsg = "어서오세요.";
        console.log(prnMsg);
    }

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <button onClick={testClick}>왜안나오냐미친노마</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color: 'red'}} onClick={()=>setColor('red')}>붉은색~</button>
            <button style={{color: 'blue'}} onClick={()=>setColor('blue')}>푸른색~</button>
            <button style={{color: 'yellow'}} onClick={()=>setColor('yellow')}>그사이 3초~</button>
        </div>
    )

}
export default Say;