const User = (props)=> {
    return (
        <div>
            <b>{props.user.username}</b> <span>{props.user.email}</span>
        </div>
    );
}

const Array = ()=> { // 리터럴객체를 포함한 배열 
    const users = [
        {
            id : 100,
            userName : "아기오구",
            email : "ogu@naver.com" 
        },
        {
            id : 200,
            userName : "몰티즈",
            email : "moltiz@naver.com" 
        },
        {
            id : 300,
            userName : "리트리버",
            email : "mongmong@naver.com" 
        }
    ];
    return (
        <div>
            {/* props를 넘겨주는 부모 컴포넌트 */}
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
        </div>
        // <div>
        //     <div>
        //         <b>{users[0].userName}</b>
        //         <span>{users[0].email}</span>   
        //     </div>
        //     <div>
        //         <b>{users[1].userName}</b>
        //         <span>{users[1].email}</span>   
        //     </div>
        //     <div>
        //         <b>{users[2].userName}</b>
        //         <span>{users[2].email}</span>   
        //     </div>
            
        // </div>
    );
}

export default Array;