import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();
    const postStyle = {
        border: '3px solid green',
        padding: '10px',
        borderRadius: '20px'
    }

    const handleShowDetails = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div style={postStyle}>
            <h2>User ID: {id}</h2>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
            <Link to={`/post/${id}`}>Show Post</Link>
            <button onClick={handleShowDetails}>Show Details</button>
        </div>
    );
};

export default Post;