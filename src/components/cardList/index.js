import React from 'react';
import Card from '../card';
import "./index.css";



const Cardlist = ({ users, onCLick }) => {
  console.log("data",users);
  return (
    <div className='card-container-wrraper'>
      {users.map((user, index) => (
        <Card user={user} key={user._id} onCLick={onCLick}/>
        
      ))}
    </div>
  );
};

export default Cardlist;
