import React, { useState } from 'react';
import './App.css';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import CreatePost from './Components/CreatePost/CreatePost';

function App() {

 const [post, setPost] = useState([{name: "", post: ""}])
  return (
    <div>
      <DisplayPost parentPost={post} />
      <CreatePost createPost = {post} />
    </div>
  );
}

export default App;
