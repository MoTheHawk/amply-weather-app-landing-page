import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Weather from './Weather'

const buttonClicked = () => {
    console.log('Button Clicked!')
}

function Content({ gotWeather, weatherToday, weatherTomorrow }) {
    var headerText = gotWeather ? 'like this ' : '';

    return (
        <Container id="content">
            <Row>
                <Col>
                    <div className="header">Get daily local weather reports {headerText}sent directly to your phone with our Android app.</div>
                    <Weather today={weatherToday} tomorrow={weatherTomorrow} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="header">Download the app from the Google Play Store.</div>
                    <button id="cta-button" onClick={buttonClicked}>Download Now</button>
                </Col>
            </Row>
        </Container>
    );
}

export default Content