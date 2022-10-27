// ★ Map 함수
import { useState } from "react";
import '../App.css';
// 동적으로 변하는 배열 사용, id는 자동으로 증가
const ArrayMap = () => {
    const [names, setNames] = useState ([
        {id: 1, text: "청소"},
        {id: 2, text: "식사"},
        {id: 3, text: "산책"},
        {id: 4, text: "낮잠"}
    ]);
    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState("5");  // 4번까지 있어서 기본값을 5로 넣음
    const onChange = e => setInputText(e.target.value); // 인풋창에서 입력받는 값
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };
    // const namesList = names.map(name => <li key={name.id}>{name.text}</li>);
    
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }
    const namesList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>
    ));

    return (
        <div>
            <p className="title-name">to do List </p>
            <p>삭제는 해당 항목을 더블클릭 하세요.</p>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </div>
    )
}

export default ArrayMap;