// userMemo ? 컴포넌트 최적화를 위한 HOOK (불필요한 렌더링을 막음)

import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = nums => {
    console.log("평균값 계산 중...");
    if(nums.length === 0) return 0;
    // 배열의 각 요소를 순회하면서 callback 함수의 실행결과를 누적하여 하나의 결과값을 반환
    // 콜백 함수는 함수 자체를 인자로 전달하는 함수를 말한다.
    const sum = nums.reduce((a, b) => a + b);
    return sum / nums.length;
}

const Memo = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState(0);
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []); // 의존성 배열
    
    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number)); 
        // concat : 불변성을 위해 기존 배열을 놔두고 추가하는거임
        // ★ js 의 원시타입은 불변성이 있어서 내부적으로 기존 값을 저장해두고 후에 변경될 때마다 하나씩 그 값을 추가한다.
        setList(nextList);
        setNumber("");
        inputEl.current.focus();
    }, [number, list]);
    
    const avg = useMemo(() => getAverage(list), [list]) // list 가 바뀔 때만 렌더링
    
    return (
        <>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => <li key={index}> {value} </li>)}
            </ul>
            <p><b>평균값 : </b> {avg}</p>
        </>
    )
}
export default Memo;