import React from 'react';
import Card from '../card';
import "./index.css";

const Cardlist = ({ users }) => {
  return (
    <div className='card-container-wrraper'>
      {users.map((user, index) => (
        <Card user={user} key={user._id} />
      ))}
    </div>
  );
};

export default Cardlist;
