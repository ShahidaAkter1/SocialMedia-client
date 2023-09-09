import React from 'react';
import cover from '../../img/cover.jpg'
import profile from '../../img/profileImg.jpg';
import './ProfileCard.css'

const ProfileCard = () => {
    return (
        <div className="ProfileCard">
          <div className="ProfileImages">
            <img src={cover} alt="" />
            <img src={profile} alt="" />
          </div>

          <div className="ProfileName">
            <span>Shahida Akter</span>
            <span>Junior Web Designer</span>
          </div>


          <div className="followStatus">
             <hr></hr>

             <div>
                <div className="follow">
                    <span>6,890</span>
                    <span>Following</span>
                </div>

                <div className="vl"></div>

                <div className="follow">
                    <span>1</span>
                    <span>Follower</span>
                </div>
             </div>

             <hr/>
          </div>

          <span>
            My Profile
          </span>
        </div>
    );
};

export default ProfileCard;