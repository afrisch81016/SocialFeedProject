import './DisplayPost.css'
import LikeButton from '../LikeButton/LikeButton';


const DisplayPost = (props) => {
    
    return (
    <form className='postwindow'>
        <table>
            <tbody>
                {props.parentPost.map((post, index) =>{
                    return (
                        <reactFragment>
                        <tr className='tablerow' key = {index}>
                          <td>{post.name}</td>
                        </tr>
                        <tr>
                        <td>{post.post}</td>  
                          <LikeButton />
                        </tr>
                        </reactFragment>
                    )
                })}
            </tbody>
        </table>
    </form>
    );
}

export default DisplayPost;