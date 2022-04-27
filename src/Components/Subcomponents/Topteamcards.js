import React from 'react';
import bootstrap from 'bootstrap';
import { Col } from 'react-bootstrap';


const Topteamcards = (props) => {
    return (
      <Col md={3} className="card-container">
        <Col md={4} className="photo">

        </Col>
        <h4 className='teamName'>Team Name</h4>
      </Col>
    );
};

export default Topteamcards;