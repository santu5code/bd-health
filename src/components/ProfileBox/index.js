import React from 'react'
import ProfileVector from '../../assets/secondpage/profilevector.png';

const ProfileBox = () => {
    return (
        <>
          <div className="profile-box text-center">
              
                  <img className='profile-logo img-fluid' src={ProfileVector} alt="profile vector" />
                
                <h1>Check Doctor Profile</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Molestias aperiam eveniet consequatur atque ipsam molestiae!</p>
            </div>  
        </>
    )
}

export default ProfileBox
