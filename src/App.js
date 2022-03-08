import React, { useState } from 'react';
import './App.css';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import CreatePost from './Components/CreatePost/CreatePost';

function App() {

 const [post, setPost] = useState([{name:"", post:""}])

function addNewPost(newPost){       // newPost is the form data coming from CreatePost
  let tempPost = [...post, newPost]  // ...post is grabbing all of the existing data and NewPost is just adding that to it 
  setPost(tempPost)    // this is where we are actually saving all of our post data to post on line 8
}

  return (
    <div>
      <DisplayPost parentPost={post} />   {/* passing in the post data as props to access it in the component */}
      <CreatePost addNewPost={addNewPost} />     {/* passing in the addNewPost function so we can pull the data up to this level */}
    </div>
  );
}

export default App;
