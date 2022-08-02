import React, { useContext, useState } from 'react'
import { AuthContext } from './context/AuthProvider.js';


function MyBlogs() {
    const {auth, setAuth} = useContext(AuthContext);
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    
    const handlePostSubmit = () => {
            
    };

  
    return (
        <div>
        <h1>Welcome to your blogs, {auth.user}!</h1>
            <div>
                <form onSubmit={handlePostSubmit}>
                    <h6>Create your blog!</h6>
                    <label>Post Title</label>
                    <input 
                    type="text" 
                    className='PostContent' ></input>
                    <label>Post Content</label>
                    <input 
                    type="text" 
                    className='PostContent' ></input>
                    <button>Post</button>
                </form>
            </div>
        </div>
    )
}

export default MyBlogs