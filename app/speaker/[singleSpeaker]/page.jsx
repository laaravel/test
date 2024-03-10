'use client'

import { useEffect, useState } from "react";


const Speaker = ({ params }) => {
  const [post, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch(`/api/speaker/${params.singleSpeaker}`);
    const data = await response.json();

    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(post)

  return (
    <div>
      <h1 className="userSpeakTitle">{post.schedule}</h1>
      <div className="userCard">
        <div className="userProfile">
          <span className="img">{post.profile}</span>
        </div>
        <div className="des">
          <h4 className="userName">{post.name}</h4>
          <div className="lectureDetails">
            {post.lecture}
          </div>
          <div className="userTime">
            this lecture will started at {post.startTime} till {post.endTime}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Speaker;
