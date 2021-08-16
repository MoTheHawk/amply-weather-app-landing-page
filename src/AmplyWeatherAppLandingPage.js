import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './style.scss'

function AmplyWeatherAppLandingPage() {
  return (
    <>
      <Container id="main">
        <Row>
          <Col md={0} lg={6} />
          <Col md={12} lg={6}>
            <Container id="content">
              <Row>
                <Col>
                  <div className="header">Get daily local weather reports like this sent directly to your phone with our Android app.</div>
                  <div id="weather"></div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="header">Download the app from the Google Play Store.</div>
                  <button id="cta-button">Download Now</button>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <div id="footer">&copy;2021 Amply Media, All Rights Reserved</div>
    </>
  );
}

export default AmplyWeatherAppLandingPage;
