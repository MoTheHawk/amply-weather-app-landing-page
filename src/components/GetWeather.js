import React, { Component } from 'react'
import Content from './Content'
import Loading from './Loading'
import './weather.scss'

class GetWeather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            weatherData: [],
        }
    }

    componentDidMount() {
        fetch("https://j9l4zglte4.execute-api.us-east-1.amazonaws.com/api/ctl/weather")
        .then( response => response.json() )
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    weatherData: result
                })
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

    render() {
        const {error, isLoaded, weatherData} = this.state;

        if(error) { //display everything except the weather widget and modify the header text
            return (
                <Content gotWeather={false} weatherToday={null} weatherTomorrow={null} />
            );
        } else if (!isLoaded) {
            return (
                <Loading />
            )
        } else {
            return (
                <Content gotWeather={true} weatherToday={weatherData.today} weatherTomorrow={weatherData.daily[1]} />
            );
        }
    }
}

export default GetWeather;