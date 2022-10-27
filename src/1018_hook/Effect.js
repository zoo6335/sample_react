import { useState, useEffect } from "react";

const Effect = ()=>{
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState(''); // 초기화
    useEffect(() => {
        console.log("렌더링 언제 되는지 보쟈")
        console.log({name, nickname});
    }, []); // 이 빈 배열은 '의존성 배열' : 들어온 값이 바뀌는 useEffect 가 렌더링ㅇ
    const onChangeName = e => {
        setName(e.target.value);
    }
    const onChangeNickname = e => {
        setNickname(e.target.value);
    }
    return (
        <>
        <div>
            <input value={name} onChange={onChangeName} /><br/>
            <input value={nickname} onChange={onChangeNickname} />
        </div>
        <div><b>이름 : </b> {name}</div>
        <div><b>닉네임 : </b> {nickname}</div>
        </>
    );
}
export default Effect;