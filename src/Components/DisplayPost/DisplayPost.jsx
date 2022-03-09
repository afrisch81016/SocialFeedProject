import './DisplayPost.css'
import LikeButton from '../LikeButton/LikeButton';


const DisplayPost = (props) => {
    
    return (
    <form className='postwindow'>
        <table>
            <tbody>
                {props.parentPost.map((post, index) =>{
                    return (
                        <tr key = {index}>
                          <td>{post.name}</td>
                          <td>{post.post}</td>  
                          <LikeButton />
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </form>
    );
}

export default DisplayPost;