import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GetWeather from './components/GetWeather'
import './style.scss'

class AmplyWeatherAppLandingPage extends Component {
  render() {
    return (
      <>
        <Container id="main">
          <Row>
            <Col lg={6} />
            <Col md={12} lg={6}>
              <GetWeather />
            </Col>
          </Row>
        </Container>
        <div id="footer">&copy;2021 Amply Media, All Rights Reserved</div>
      </>
    );
  }
}

export default AmplyWeatherAppLandingPage;
