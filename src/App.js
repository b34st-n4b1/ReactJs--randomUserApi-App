import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import Axios from "axios"
import MyCard from './MyCard';

const App = () => {
  const [details, setDetails] = useState({});

const fetchDetails = async () => {
  // const response = await Axios("https://randomuser.me/api/");
  const {data} = await Axios("https://randomuser.me/api/");
  console.log("RESPONSE :", data);

  const details = data.results[0];
  setDetails(details);
}

useEffect(() => {
  fetchDetails();
}, [])

return (
  <Container fluid className="p-6 bg-primary App">
    <Row>
      <Col md={6} className="offset-md-3 mt-2">
        <MyCard details={details} />
      </Col>
    </Row>
  </Container>
)
}

export default App;
