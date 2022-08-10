import React, { useContext, useState } from 'react'
import { AuthContext } from './context/AuthProvider.js';
import axios from 'axios';


function MyBlogs() {
    const {auth, setAuth} = useContext(AuthContext);
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    
    
    const date = (today, format) => {
        const map = {
            mm: ('0' + (today.getMonth() + 1)).slice(-2),
            dd: ('0' + today.getDate()).slice(-2),
            yyyy: today.getFullYear()
        }
        return format.replace(/yyyy|mm|dd/gi, matched => map[matched]);
    };


    const handlePostSubmit = async (e) => {
        e.preventDefault();
        let today = new Date();

        today = date(today, 'yyyy-mm-dd');
        try{
            const data = JSON.stringify({username: auth.user, date: today, post_title: postTitle, post_details: postContent});
            const response = await axios.post('http://localhost:3001/MyBlogs/post', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(JSON.stringify(response.data));
        }catch(err){
            console.log(err);
        }
    };

  
    return (
        <div>
        <h1>Welcome to your blogs, {auth.user}!</h1>
            <div>
                <form onSubmit={handlePostSubmit}>
                    <h6>Create your blog!</h6>
                    <div>Hello </div>
                    <label>Post Title</label>
                    <input 
                    type="text" 
                    className='PostContent' 
                    onChange={(e) => setPostTitle(e.target.value)}
                    value={postTitle}
                    required>
                    </input>
                    <label>Post Content</label>
                    <input 
                    type="text" 
                    className='PostContent' 
                    onChange={(e) => setPostContent(e.target.value)}
                    value={postContent}
                    required></input>
                    <button>Post</button>
                </form>
            </div>
        </div>
    )
}

export default MyBlogs