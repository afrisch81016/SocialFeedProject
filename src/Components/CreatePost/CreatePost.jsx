const CreatePost = (props) => {
    
function handleSubmit(formEvent){
    formEvent.preventDefault();
    alert(post.name, post.post)
}

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input> type='text' onChange ={(event) => post.name(event.target.value)} value=Name</input>
            <label>Post</label>
            <input> type='text' onChange={(event) => post.post(event.target.value)} vaule=Post</input>
            <button type='submit'> Add Post</button>
        </form>
    );
}

export default CreatePost