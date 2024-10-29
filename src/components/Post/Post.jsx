import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();
    const postStyle = {
        border: '1px solid skyblue',
        borderRadius: '20px',
        padding: '5px'
    };
    const handleShowDetail = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div style={postStyle}>
            <h4>Post No: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Detailed Post</Link>
            <br />
            <button onClick={handleShowDetail}>Click to see Details</button>
        </div>
    );
};

export default Post;