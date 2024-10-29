import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body } = post;
    const { postId } = useParams();
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    }
    console.log(postId);
    return (
        <div>
            <h2>Post Details No: {id}</h2>
            <h4>{title}</h4>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;