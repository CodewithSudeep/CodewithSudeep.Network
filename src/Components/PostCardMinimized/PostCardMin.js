import React from 'react'
import './style.css'

export default function PostCardMin() {
    const postImageStyle = {
        background: `url(https://images.unsplash.com/photo-1616107541518-67d6e5de795e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80) no-repeat`,
        backgroundSize: "cover"
    }
    return (
        <div className="postCardMinified">
            <div className="post-image" style={postImageStyle}></div>
        </div>
    )
}
