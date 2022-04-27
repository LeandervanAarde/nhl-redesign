import React from 'react';
import bootstrap from 'bootstrap';
import { Col } from 'react-bootstrap';
import Topteamcards from './Subcomponents/Topteamcards';
import { useEffect } from 'react';
import axios from 'axios';
import "../css/overview.css";


const Overwiew = () => {
    
    // useEffect(() =>{
    //     axios.get("https://statsapi.web.nhl.com/api/v1/standings")
    //     .then((result) =>{
    //         let data = result.data.records;
    //         console.log(data)
    //         const teams = data.map((item) => );
    //     })
    // },[]);


    return (
      <Col md={10} className="content-container offset-2">
          <Col md={12} className="introduction">
                <h4 className='intro-text'>Welcome to,</h4>
                <h2 className='appName'>CHEL</h2>
                <p className='introP'> Here you can get an introduction to the world of the NHL/ <strong>CHEL. </strong>
                    <br/>
                    Compare all players such as Greztky, Ovechkin, Crosby, Mcdavid and more! You can view Team stats, 
                    <br/>
                    Team standings and players statistics trends over 5 years of your choice!
                </p>

                <model-viewer className ="small-model" alt="Puck model" camera-orbit="120deg 70deg 210%" auto-rotate rotation-per-second="30deg" src="../3D/LEANDERRR.gltf" seamless-poster shadow-intensity="1"></model-viewer>
          </Col>
            <Col md={12}>
            <Topteamcards/>
            </Col>
          
      </Col>
    );
};

export default Overwiew;