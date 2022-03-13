import React from 'react';
import './userStyle.css';

const User = () => {
  return (
    <>
        <div className='user'>
           <div className='back'><i class="fa-solid fa-angle-left"></i></div>
           <div className='user-detail'>
               <div><img src="./images/user.png" alt="UserImage" /></div>
               <p>Maitreyi</p>
           </div>
        </div>      
    </>
  );
}

export default User;
;