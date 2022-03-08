import React, { useState } from 'react';

const CreatePost = (props) => {

    const[name, setName] = useState(''); //  getting data from form holding it for handleSubmit function below
    const[post, setPost] = useState(''); 
    
function handleSubmit(event){
    event.preventDefault();  // prevents page reload
    let newPost = {   
        name: name,
        post: post
    };
    console.log(newPost)    // console log to see data if there is an issue
    props.addNewPost(newPost)     // this function is pulling out the name and post data and passing it into our function on app.js
}

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
             <input type='text' onChange ={(event) => setName(event.target.value)} value= {name}/>  {/* data being sent to hook on line 5 */}
            <label>Post</label>
            <input type='text' onChange={(event) => setPost(event.target.value)} value= {post}/>    {/* data being sent to hook on line 6 */}
            <button type='submit'> Add Post</button>
        </form>
    );
}

export default CreatePost