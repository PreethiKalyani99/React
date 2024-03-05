import React from "react";
import profile from '../utils/assets/icons/profile.png';
import {  Row, Col, Button} from "react-bootstrap";

export function PostComment(props){
    function handleCommentChange(e) {
        props.setComment(e.target.value)
    }

    function handleCommentSubmit(e) {
        e.preventDefault();
        if (props.comment !== "") {
            const newComment = {
                user: "Preethi",
                text: props.comment
            }
            props.setOldComments([newComment, ...props.oldComments])
            props.setComment("")
            props.setShowComments(true)
        }
    }

    return (
        <Row className="mt-4 mb-4">
            <Col lg={1}>
                <img src={profile} style={{ height: '50px', width: '50px' }} alt="profile-icon" />
            </Col>
            <Col>
                <input 
                type="text" 
                className="mt-2 comment"
                placeholder="Add a comment..." 
                value={props.comment}
                onChange={handleCommentChange}
                ></input>
            </Col>
            <Col>
                <Button onClick={handleCommentSubmit} className="submit me-3" style={{width: '60px'}}>Post</Button>
            </Col>
        </Row>
    )
}