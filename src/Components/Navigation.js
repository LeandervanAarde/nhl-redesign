import React from 'react';
import bootstrap from 'bootstrap';
import { Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Navigation.css";
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaSkating } from "react-icons/fa";
import { FaHockeyPuck } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";

const Navigation = () => {
    return (
        <Col md={2} className="navCon">
            <Col md={12} className="logoCon"> </Col>

            <Link to="/"><Col md={12} className="nav-Item " id='top-item'>
            <FaEye size={40}/>
            <h4 className='nav-text'>Overview</h4>
            </Col></Link>

            <Link to="/Playercompare"> <Col md={12} className="nav-Item "> 
            <FaSkating size={40}/>
            <h4 className='nav-text'>Player Compare</h4>
            </Col></Link>
           
            <Link to="/TeamCompare"> <Col md={12} className="nav-Item "> 
            <FaHockeyPuck size={40}/>
            <h4 className='nav-text'>Team Compare</h4>
            </Col></Link>

            <Link to="/PlayerTimeline"> <Col md={12} className="nav-Item "> 
            <FaChartLine size={40}/>
            <h4 className='nav-text text-center'>Player Timeline</h4>
            </Col></Link>
        </Col>
    );
};

export default Navigation;