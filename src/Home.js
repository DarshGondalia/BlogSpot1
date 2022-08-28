import React, {useRef, useState} from 'react';
import axios from 'axios';
import Post from './components/Post.js';
import ThumbUpOffAlt from '@mui/icons-material/ThumbUpOffAlt.js';
import ThumbUp from '@mui/icons-material/ThumbUp.js';
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline.js';
import ChatBubble from '@mui/icons-material/ChatBubble.js';

const ThumbUpOffAltIcon = ThumbUpOffAlt.default;
const ThumbUpIcon = ThumbUp.default;
const ChatBubbleOutlineIcon = ChatBubbleOutline.default;
const ChatBubbleIcon = ChatBubble.default;

function Home() {
  const [list, setList] = useState([]);

  const usernameHandler = () => {

  }

  const blogs = async () => {
    try{
        let response = await axios.get('http://localhost:3001/home');
        let data = response.data.rows;
        setList(data);
        return list;
    }catch(err){
        console.log(err);
    }
  };
  blogs();
  //currPost = {id: uuid, time: timeuuid, username: text, posttitle: text, 
  //postdescription: text, postcontent: text, postkeywords: text, likes: null, likedBy: null}
  const blogList = list.map((currPost, index) => {
    const date = currPost.convertedtime.substring(5, 7) + '/' + currPost.convertedtime.substring(8, 10) + '/' + currPost.convertedtime.substring(0, 4);
    return (
      <div key={index}>
          <br />
          <div className='post'>
            <span>
              {currPost.photo}
              <span className='username-link' onClick={usernameHandler}> {currPost.username}</span>
              &nbsp;·&nbsp;<span className='opacity-60'>{date}</span>
            </span>
            <h2 className='mt-1 mb-2 display-7'>{currPost.posttitle}</h2>
            <p>{currPost.postcontent}</p>
            <div className='d-flex mt-3'>
              <div className='d-flex align-items-center gap-2'>
                <ThumbUpOffAltIcon sx={{'&:hover': {opacity: 0}}}/>
                <ThumbUpIcon sx={{
                    position: 'absolute', opacity: 0,
                    '&:hover': {opacity: 1}
                  }}
                />
                420
              </div>
              <div div className='d-flex align-items-center gap-2 ms-4'>
                <ChatBubbleOutlineIcon sx={{'&:hover': {opacity: 0}}}/>
                <ChatBubbleIcon sx={{
                    position: 'absolute', opacity: 0,
                    '&:hover': {opacity: 1}
                  }}
                />
                69
              </div>
            </div>
          </div>
        </div>
      )
      }
    );

  return <>{blogList}</>;
}

export default Home