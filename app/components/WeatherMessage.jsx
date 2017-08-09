var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return(
        <h4>Es sind <strong>{temp}</strong>°C in {location}</h4>
    )
};

module.exports = WeatherMessage;
