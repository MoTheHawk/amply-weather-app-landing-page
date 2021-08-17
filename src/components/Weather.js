import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function Weather(weather) {
    return (
        <>
            <Container id="weather">
                <Row>
                    <Col id="location">
                        <span id="city">{weather.today.city}</span>, <span id="state">{weather.today.state}</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={5} id="temps_col">
                        <Container fluid="true" id="temps">
                            <Row>
                                <Col xs={5}>
                                    <strong id="temp">{parseInt(weather.today.temperature)}&deg;</strong>
                                </Col>
                                <Col xs={6}>
                                    <Image id="icon" src={weather.today.iconLink} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    High: <strong id="high">{parseInt(weather.today.highTemperature)}&deg;</strong>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    Low: <strong id="low">{parseInt(weather.today.lowTemperature)}&deg;</strong>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                Humidity: <strong id="humidity">{weather.today.humidity}%</strong>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Wind: <strong id="wind">{weather.today.windSpeed} mph</strong>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Container fluid="true" id="tomorrow">
                                    <Row>
                                        <Col xs={8} id="tomorrow_desc_col">
                                            TOMORROW: <br/>
                                            <strong id="tomorrow_desc">{weather.tomorrow.skyDescription}</strong>
                                        </Col>
                                        <Col xs={3} id="tomorrow_icon_col">
                                            <Image id="tomorrow_icon" src={weather.tomorrow.iconLink} />
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Weather