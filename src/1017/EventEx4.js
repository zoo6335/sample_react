import { useState } from 'react';

const EventEx4 = () => {
    const [value, setValue] = useState('grape');

    const handleChange = (event) => {
        setValue(event.target.value); // 발생한 이벤트의 값을 가져옴
    }
    const handleSubmit = (event) => {
        alert('선택한 과일 : ' + value);
        event.preventDefault(); // 창이 새로고침 되는걸 막음(내가 지정한 이벤트 외에는 막는것)
    }

    return(
        <form onSubmit={handleSubmit}>
            <lable>과일을 선택하세요.
                <select value={value} onChange={handleChange}>
                    <option value='apple'>사과</option>
                    <option value='banana'>바나나</option>
                    <option value='grape'>포도</option>
                    <option value='peach'>복숭아</option>
                </select>
            </lable>
            <button type='submit'>제출</button>
        </form>
    );
}
export default EventEx4;