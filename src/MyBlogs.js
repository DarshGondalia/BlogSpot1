import React, { useContext, useState } from 'react'
import { AuthContext } from './context/AuthProvider.js';
import axios from 'axios';


function MyBlogs() {
    const {auth, setAuth} = useContext(AuthContext);
    const [postTitle, setPostTitle] = useState('');
    const [postDescription, setPostDesc] = useState('');
    const [postKeywords, setPostKeywords] = useState('');
    const [postContent, setPostContent] = useState('');

    const handlePostSubmit = async (e) => {
        e.preventDefault();
        // let today = new Date();

        // today = date(today, 'yyyy-mm-dd');
        try{
            const data = JSON.stringify({username: auth.user, posttitle: postTitle, postdescription: postDescription, postkeywords: postKeywords, postcontent: postContent});
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

                    <label>Post Description</label>
                    <input 
                    type="text" 
                    className='PostContent' 
                    onChange={(e) => setPostDesc(e.target.value)}
                    value={postDescription}
                    required>
                    </input>

                    <label>Post Keywords</label>
                    <input 
                    type="text" 
                    className='PostContent' 
                    onChange={(e) => setPostKeywords(e.target.value)}
                    value={postKeywords}
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