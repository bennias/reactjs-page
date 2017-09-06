var React = require('react');

var About = (props) => {
    return(
        <div>
            <h1 className="text-center page-title">About Me</h1>
            <p>Hey there, it's <strong>Benni</strong>!</p>
            <p>This Page was build with:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react" target="_blank">React </a> - Javascript framework used.
                </li>
                <li>
                    <a href="http://foundation.zurb.com/" target="_blank">Foundation </a> - CSS framework used.
                </li>
                <li>
                    <a href="http://openweathermap.org" target="_blank">Open Weather Map </a> - Weather-API used.
                </li>
            </ul>
        </div>
    )
};
module.exports = About;
