import React from 'react';
import './Home.css'
import ProfileSide from '../../Components/ProfileSide/ProfileSide';
import PostSide from '../../Components/PostSide/PostSide';

const Home = () => {
    return (
        <div className='Home'>
           <ProfileSide></ProfileSide>
            <PostSide></PostSide>
            <div className="RightSide">RightSide</div>
        </div>
    );
};

export default Home;