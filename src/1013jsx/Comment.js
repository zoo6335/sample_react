const formatDate = (date) => {
    return date.toLocalDateString();
}

const Comment = (props) => {
    return (
        <div>
            <div>
                <img src={props.author.avatarUrl} alt={props.author.name} /> 
                <div>{props.author.name}</div>  
            </div>
            <div>{props.text}</div>
            <div>{formatDate(props.date)}</div>
        </div>
    );
}

export default Comment;