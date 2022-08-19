import React, {useState} from 'react';
// import ListPost from './ListPost.js';
import axios from 'axios';

function Home() {

  const [list, setList] = useState([]);


  const blogs = async () => {
    try{
        let response = await axios.get('http://localhost:3001/home');
        let data = response.data.rows;
        setList(data);
        return list;
        console.log(data[0]);
        for(let i = 0; i < data.length; i++){
          list.push(data[i]);
        }
        console.log(list.length);
        return JSON.parse(list);
    }catch(err){
        console.log(err);
    }
  };
  blogs();
  //currPost = {id: uuid, time: timeuuid, username: text, posttitle: text, 
  //postdescription: text, postcontent: text, postkeywords: text, likes: null, likedBy: null}
  const blogList = list.map(currPost =>  
      
      <div>
        <h2>
        {currPost.username}, {currPost.posttitle}, {currPost.convertedtime}, {currPost.postcontent}
        </h2>
        <h6>{currPost.posttitle}</h6>
      </div>
    );

  return <div>{blogList}</div>;
}

export default Home