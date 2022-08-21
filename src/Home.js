import React, {useState} from 'react';
// import ListPost from './ListPost.js';
import axios from 'axios';
import Post from './components/Post.js';

function Home() {

  const [list, setList] = useState([]);


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
  const blogList = list.map(currPost => {
    const date = currPost.convertedtime.substring(5, 7) + '/' + currPost.convertedtime.substring(8, 10) + '/' + currPost.convertedtime.substring(0, 4);
    return (
      <div key={currPost.id}>
          <br />
          <Post 
            username={currPost.username}
            date={date}
            title={currPost.posttitle}
            content={currPost.postcontent}
          >
          </Post>
        </div>
      )
      }
    );

  return <>{blogList}</>;
}

export default Home