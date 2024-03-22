import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const { id, title, body } = post;
    const handleBack=()=>{
        navigate(-1);
    }
    return (
        <div>
            <h2>Post ID: {id} </h2>
            <p>Title: {title}</p>
            <button onClick={handleBack}>Back</button>
        </div>
    );
};

export default PostDetails;