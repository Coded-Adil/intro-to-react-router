import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    const postStyle = {
        border: '1px solid skyblue',
        borderRadius: '20px',
        padding: '5px'
    }
    return (
        <div style={postStyle}>
            <h4>Post No: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Detailed Post</Link>
        </div>
    );
};

export default Post;