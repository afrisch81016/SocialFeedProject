import './DisplayPost.css'

const DisplayPost = (props) => {
    
    return (
    <form>
        <table>
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
    </form>
    );
}

export default DisplayPost;