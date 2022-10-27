import { useState } from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date());

    const tick = () => {  // 현재시간을 계속 업데이트
        setDate(new Date());
    }

    setInterval(tick, 1000); // 1초마다 화면 갱신
    return (
        <div>
            <h1>현재 시간을 표시합니다.</h1>
            <h2>현재 시각은 {date.toLocaleTimeString()}</h2>
        </div>
    )
}
export default Clock;