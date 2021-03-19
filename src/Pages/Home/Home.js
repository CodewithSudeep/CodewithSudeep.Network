import React from 'react'
import './style.css'

// @dev import components
import Navbar from '../../Components/Navbar/Navbar'
import PostCardMin from '../../Components/PostCardMinimized/PostCardMin'

// @dev import images
import SangyaIcon from '../../Images/Sangya.jpg'

export default function Home() {
    return (
        <div className="home">
            {/* @dev navbar */}
            <Navbar />

            <div className="home-body">
                {/* @dev user profile */}
                <div className="user-profile">
                    <div className="user-image">
                        <img src={SangyaIcon} alt="User Icon"/>
                    </div>

                    <div className="user-info">
                        <h1>Sangya Sherpa</h1>
                        <h3>_.sangya._, Full Stack Developer</h3>
                    </div>
                </div>

                {/* @dev posts */}
                <div className="posts">
                    {/* @dev */}
                    {/* map the images from server here */}
                    <PostCardMin />
                    <PostCardMin />
                    <PostCardMin />
                    <PostCardMin />
                    <PostCardMin />
                    <PostCardMin />
                    <PostCardMin />
                </div>

                {/* @footer */}
                <div className="footer">
                    <div>CodewithSudeep.Network</div>
                    <div>&copy; 2021 CodewithSudeep.Network from CodewithSudeep</div>
                </div>
            </div>
        </div>
    )
}
