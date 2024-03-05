import React from "react";
import { Row, Col } from "react-bootstrap";
import profile from '../utils/assets/icons/profile.png';
import heart from '../utils/assets/icons/heart.png';

export function ShowComments(props){
    return (
        <Row>
            {props.showComments &&
                props.oldComments.map((comment, index) => (
                    <Row key={index} className="mb-3">
                        <Col lg={1}>
                            <img src={profile} className="ms-3 me-2" style={{ height: '30px', width: '30px' }} alt="Profile" />
                        </Col>
                        <Col>
                            <span className="commentSection"><b>{comment.user}</b>: {comment.text}</span>
                        </Col>
                        <Col lg={1}>
                            <img src={heart} style={{ height: '15px', width: '15px' }} />
                        </Col>
                    </Row>
                ))
            }
        </Row>
    )
}