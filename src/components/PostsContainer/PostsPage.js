//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

const PostsPage = ({dummyData}) => {
  return (
    <div className="posts-container-wrapper">
      {dummyData.map((data,i)=> {
        return <Post key={i} post ={data}/>
      })}
    </div>
  );
};

export default PostsPage;

