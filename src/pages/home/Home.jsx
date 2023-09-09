import React from 'react';
import './Home.css'
import ProfileSide from '../../Components/ProfileSide/ProfileSide';

const Home = () => {
    return (
        <div className='Home'>
           <ProfileSide></ProfileSide>
            <div className="postSide">Post</div>
            <div className="RightSide">RightSide</div>
        </div>
    );
};

export default Home;