import { useState } from "react";
import './LikeButton.css'

const LikeButton = (props) =>{

    const [likeButtonClass, setLikeButtonClass] =useState("inactive");

    function handleClick(){
        if(likeButtonClass === "inactive"){
            setLikeButtonClass("active");
        }
        else {
            setLikeButtonClass("inactive");
        }
    }
    return(
        <div>
            <button className={likeButtonClass} onClick={handleClick}>{props}</button>
        </div>
    )
}
export default LikeButton

