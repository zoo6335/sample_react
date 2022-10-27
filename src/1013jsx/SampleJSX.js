import './Sample.css'

function SampleJSX () {
    const name = "곰돌이";
    // const textStyle = {
    //     backgroundColor : "#222",
    //     color : "royalBlue",
    //     fontSize : "2em"
    // };
    // return (
    //     <div>
    //         {name === "이주봉" ? (<h1>주봉이 입니다.</h1>):(<h1>주봉이가 아닙니다.</h1>)}
    //     </div>
    // );
    return <div className="textStyle">{name === "곰돌이" && <h1>곰돌이를 출력합니다 !</h1>}</div>
}

export default SampleJSX;   // 이 함수를 외부에서 쓸 수 있도록 내보내기

// 방식 2: 화살표 함수
// const SampleJSX = () => {
// }
