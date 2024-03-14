import React from "react";
import heart from '../utils/assets/icons/heart.png';
import redHeart from '../utils/assets/icons/redheart.png'
import clap from '../utils/assets/icons/clapping.png'
import commentIcon from '../utils/assets/icons/comment.png'

export function UserInteractions(props){

    function handleLike(){
        props.setIsLiked(!props.isLiked)
    }

    function toggleComments() {
        props.setShowComments(!props.showComments)
    }

    return (
        <div className="ms-4 mt-2">
            <img src={props.isLiked ? redHeart : heart} onClick={handleLike} width="30" height="30" alt="heart-icon" className="me-3 mt-2" />
            <img src={commentIcon} width="30" height="30" className="ms-2 me-3 mt-2" onClick={toggleComments}/>
            <span className="me-3"><b>{props.oldComments.length}</b></span>
            <img src={clap} onClick={() => {
                props.setClapsCount(props.clapsCount + 1)
            }} 
            width="35" height="35"/>
            <span className="ms-3"><b>{props.clapsCount}</b></span>
        </div> 
    )
}