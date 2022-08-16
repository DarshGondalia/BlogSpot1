import React, {useState} from 'react';
import axios from 'axios';
import { AirlineSeatLegroomExtraSharp } from '@mui/icons-material';

function Profile() {
  const [profile, setProfile] = useState([]);

  const profInfo = async () => {
    try{
      let response = await axios.get('http://localhost:3001/getProfile');
      let data = response.data.rows;
      setProfile(data);
    }catch(err){
      console.log(err);
    }
  };
  profInfo();
  
  return (
    <div>Profile</div>
  )
}

export default Profile