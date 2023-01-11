import React from "react";
import '../Page/css/Blog.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  { ReactComponent as Css3 } from '../assets/icons/css3.svg'
import  { ReactComponent as Html } from '../assets/icons/html.svg'
import  { ReactComponent as JsIcon } from '../assets/icons/javascript.svg'
import  { ReactComponent as NodeIcon } from '../assets/icons/Nodejs.svg'
import  { ReactComponent as ReactIcon } from '../assets/icons/reactjs.svg'
import  { ReactComponent as ExpIcon } from '../assets/icons/expressjs.svg'
import  { ReactComponent as SqlIcon } from '../assets/icons/mysql.svg'
import  { ReactComponent as MongoIcon } from '../assets/icons/mongodb.svg'


function Skills() {
    return(
        <div id="skills" className="BlogTop">        
            <div className="blog-area">
                    <Row className="skills-tag">
                        <Col className="nameTag">기술스택</Col>
                        <Col xs={8}>
                        <Row className="icon-row" >
                            <Row className="vanilla-row">
                                <Col className="text">VANILLA WEB: </Col>
                                <Col><Html className="icon"/></Col>
                                <Col><Css3 className="icon"/></Col>
                                <Col><JsIcon className="icon"/></Col>
                            </Row>
                            <Row className="ex-row" >
                                <Col className="text">Framwork : </Col>
                                <Col className="icon"><ReactIcon/></Col>
                                <Col className="icon"><NodeIcon/></Col>
                                <Col className="icon" ><ExpIcon/></Col>
                            </Row>
                            <Row className="db-row">
                                <Col className="text">DB : </Col>
                                <Col className="icon"><MongoIcon/></Col>
                                <Col className="icon"><SqlIcon/></Col>
                            </Row>
                    </Row>
                        </Col>
                    </Row>
                   
          </div>       

        </div>
    )
}

export default Skills;