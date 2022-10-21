import React from 'react'
import MyPict from "./Images/MyPicture.jpg"

const ProfilePhoto = () => {
  return (
    <div>
      
                
        <img className='ProfilePhoto' src={MyPict} alt="Med Amir EL AYNI" height={350} width={300}/>

    </div>
  );
}

export default ProfilePhoto ;
