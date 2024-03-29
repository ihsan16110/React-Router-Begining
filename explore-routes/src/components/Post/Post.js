import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';
const Post = ({post}) => {
    const {id,title,body}= post;
    const navigate =useNavigate();

    const handleNavigate =()=>{
        navigate(`/post/${id}`);

    }
    return (
        <div className='post'>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <body>Show Details</body>
            <Link to={`/post/${id}`}>visit: {id}</Link>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            <button>Show Details2</button>
            

        </div>
    );
};

export default Post;