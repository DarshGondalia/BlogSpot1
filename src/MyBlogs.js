import React, { useContext, useState } from 'react'
import { AuthContext } from './context/AuthProvider.js';
import axios from 'axios';
import { Input } from './styles/Input.style.js';
import { Button } from './styles/Button.style.js';
import Publish from '@mui/icons-material/Publish.js';
import SaveAlt from '@mui/icons-material/SaveAlt.js';

const PublishIcon = Publish.default;
const SaveAltIcon = SaveAlt.default;

function MyBlogs() {
    const {auth, setAuth} = useContext(AuthContext);
    const [postTitle, setPostTitle] = useState('');
    const [postDescription, setPostDesc] = useState('');
    const [postKeywords, setPostKeywords] = useState('');
    const [postContent, setPostContent] = useState('');
    const [WordCount, setWordCount] = useState(0);

    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes()
    const dateTime = date+' '+time;

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
            <h6>Create your blog!</h6>
            <div>
                <form onSubmit={handlePostSubmit} className='blog-form'>
                    <div className='form-nav'>
                        <div className='d-flex align-items-center display-9 float-end gap-4'>
                            {dateTime}
                            <Button><SaveAltIcon />&nbsp;Save</Button> 
                            <Button><PublishIcon />&nbsp;Post</Button>
                        </div>
                    </div>
                    <div className='d-flex align-items-center text-center fw-bold mb-2'>
                        <label className='form-left'>Blog Title</label>
                        <Input
                            className='form-right'
                            type="text"
                            onChange={(e) => setPostTitle(e.target.value)}
                            placeholder='Enter title here'
                            value={postTitle}
                            required
                            >
                        </Input>
                    </div>

                    <div className='d-flex align-items-center text-center fw-bold mb-2'>
                        <label className='form-left'>Blog Description</label>
                        <Input
                            className='form-right'
                            type="text" 
                            onChange={(e) => setPostDesc(e.target.value)}
                            placeholder='what do you blog about?'
                            value={postDescription}
                            required
                        >
                        </Input>
                    </div>

                    <div className='d-flex align-items-center text-center fw-bold mb-4'>
                        <label className='form-left'>Keyword Tags</label>
                        <Input
                            className='form-right'
                            type="text"
                            onChange={(e) => setPostKeywords(e.target.value)}
                            placeholder="education, business, finance, crypto, etc..."
                            value={postKeywords}
                            required
                        >
                        </Input>
                    </div>
                    <div className='d-flex text-center fw-bold mb-2'>
                        <label className='form-left mt-1'>Post Content</label>
                        <textarea
                            className='form-content ms-1'
                            onChange={(e) => {
                                const arr = e.target.value.split(' ')
                                setWordCount(arr.filter(word => word !== '').length)
                                setPostContent(e.target.value)
                            }}
                            value={postContent}
                            placeholder="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan..."
                            required
                        >
                        </textarea>
                    </div>
                    <div className='text-center'>
                        <label>Word count: {WordCount}</label>
                    </div>
                    <div className='d-flex text-center fw-bold mb-2'>
                        <label className='form-left'>
                            Media File
                        </label>
                        <input
                            type='file'
                        >
                        </input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MyBlogs