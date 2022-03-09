import { useState } from "react";
import './LikeButton.css'

const LikeButton = (props) =>{

    const [likeButtonClass, setLikeButtonClass] =useState("inactive");
    const [dislikeButtonClass, setDislikeButtonClass] = useState('active'); //rename 'active' to colors used for like and dislike


    function handleClick(event){
        event.preventDefault();
        if(likeButtonClass === "inactive"){
            setLikeButtonClass("active");
        }
        else {
            setLikeButtonClass("inactive");
        }
    }
    return(
        <div>
            <button className={likeButtonClass} onClick={handleClick}>like</button>
            <button>dislike</button>
        </div>
    )
}
export default LikeButton

