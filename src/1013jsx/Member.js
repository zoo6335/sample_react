import './Sample.css'

const member = {
    name : "이주봉",
    job : "백수",
    addr : "서초구",
    gender : "려성"
}

const getGreeting = (user) => {
    if(user) return <h1>환영합니다. {member.name}님</h1>
    return <h1>환영합니다. 방문자님</h1>
}

const MemberInfo = () => {
    return(
        <div>
            <p className='title-name'>안녕하세요 ~ 저는 {member.name}입니다.</p>
            <p className='title-name'>직업은 {member.job}입니다.</p>
            <p className='title-name'>주소는 {member.addr}입니다.</p>
            <p className='title-name'>성별은 {member.gender}입니다.</p>
            <div className='welcome-text'>{getGreeting(true)}</div>
        </div>
    );
}
export default MemberInfo;