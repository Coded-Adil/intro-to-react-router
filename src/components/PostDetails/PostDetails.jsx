import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    return (
        <div>
            <h2>Post Details No: {id}</h2>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;