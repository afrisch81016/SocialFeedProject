const DisplayPost = (props) => {
    
    return (
        <table>
            <h1>Feed</h1>
            <tbody>
                {props.parentPost.map((post, index) =>{
                    return (
                        <tr key = {index}>
                          <td>{post.name}</td>
                          <td>{post.post}</td>  
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default DisplayPost;