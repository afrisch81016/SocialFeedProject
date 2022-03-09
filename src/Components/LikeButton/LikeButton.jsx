import { useState } from "react";
import './LikeButton.css'

const LikeButton = (props) =>{

    const [likeButtonClass, setLikeButtonClass] =useState("grey");  // using hooks to sotre state of the button colors
    const [dislikeButtonClass, setDislikeButtonClass] = useState('grey'); 

    function handleClickLike(event){
        event.preventDefault(); //prevents refreshing of the page. data stays on until webpage is refreshed
        if(likeButtonClass === "grey"){
            setLikeButtonClass("green");  //when clicking on "like" button, this sets the color to green
            setDislikeButtonClass("grey");  //this allows the "dislike" button to remain "defaulted" gray
        
        }
        else {
            setLikeButtonClass("grey");//if button is already green, switches it back to gray
        }
    }

    function handleClickDislike(event){
        event.preventDefault();
        if(dislikeButtonClass === "grey"){
            setLikeButtonClass('grey');
            setDislikeButtonClass('red');
        }
        else{
            setDislikeButtonClass('grey');
        }
    }
    return(
        <div className="buttonspan">
            <button className={likeButtonClass} onClick={handleClickLike}>like</button>
            <button className={dislikeButtonClass} onClick={handleClickDislike}>dislike</button>
        </div>
    )
}
export default LikeButton

