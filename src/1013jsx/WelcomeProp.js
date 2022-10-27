function WelcomeProp(props) {
// 구조 분해, 비구조화 할당
const {name, job, font, children, color} = props;

    return (
        <div> 
            <h1 style={{color:color, fontSize:font}}> 
            안녕하세요. 저는 {name}이고, 직업은 {job}입니다.{children}
            </h1>
        </div>
    );
}

WelcomeProp.defaultProps = {
    name: "익명",
    job: "무직",
    color: "black",
    font: "2em"
}

export default WelcomeProp;