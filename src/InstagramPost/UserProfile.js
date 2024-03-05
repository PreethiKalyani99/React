import React from "react";
import { Row, Col} from "react-bootstrap";
import profile from '../utils/assets/icons/profile.png';


export function UserProfile(){
    return  (
    <Row className="align-items-center">
        <Col lg={1}>
            <img src={profile} style={{ height: '50px', width: '50px' }} alt="Profile" />
        </Col>
        <Col>
            <b>Preethi</b>
        </Col>
    </Row>
)
}