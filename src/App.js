import bootstrap from "bootstrap";
import { Container } from "react-bootstrap";
import React from "react";
import Navigation from "./Components/Navigation";
import { Row } from "react-bootstrap";
import Overwiew from "./Components/Overview";
import {Routes, Route} from 'react-router-dom'
import Playercompare from "./Components/Playercompare";
import Teamcompare from "./Components/Teamcompare";
import Playertimeline from "./Components/Playertimeline";

function App() {
  return (
    <Container fluid>
      <Row>
        <Navigation/>
      <Routes>
        <Route path="/" element={<Overwiew/>}></Route>
        <Route path="/Playercompare" element={<Playercompare/>}> </Route>
        <Route path="/TeamCompare" element={<Teamcompare/>}> </Route>
        <Route path="/PlayerTimeline" element={<Playertimeline/>}> </Route>
      </Routes>
      </Row>
    </Container>
  );
}

export default App;
