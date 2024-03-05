import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardBody} from "react-bootstrap";
import { UserProfile } from "./UserProfile";
import { PostImage } from "./PostImage";
import { UserInteractions } from "./UserInteractions";
import { PostComment } from "./AddComment";
import { ShowComments } from "./ShowComments";


export function InstaPost(){
    const [isLiked, setIsLiked] = useState(false)
    const [comment, setComment] = useState("")
    const [oldComments, setOldComments] = useState([])
    const [showComments, setShowComments] = useState(false)
    const [clapsCount, setClapsCount] = useState(0)
   
    return (
        <Container className="mt-3">
            <Row className="post-style">
                <Col lg={8}>
                    <Card className="mb-3">
                        <CardBody>
                            <UserProfile/>
                            <PostImage/>
                            <UserInteractions 
                                isLiked={isLiked} 
                                setIsLiked={setIsLiked}
                                showComments={showComments}
                                setShowComments={setShowComments}
                                oldComments={oldComments}
                                clapsCount={clapsCount}
                                setClapsCount={setClapsCount}
                            /> 
                            <PostComment
                                comment={comment}
                                setComment={setComment}
                                oldComments={oldComments}
                                setOldComments={setOldComments}
                                setShowComments={setShowComments}
                            />
                            <ShowComments
                                showComments={showComments}
                                oldComments={oldComments}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
