import React from 'react';

class Weather extends React.Component {
  render() {
    return (
      <article>
<h3>Weather in {this.props.locationData.search_query}</h3>
        <ul>
          {this.props.weatherData && this.props.weatherData.data.map((day, idx) => (
            <li key={idx}>
              <p>{day.datetime}:</p>
              <p> Low: {(day.low_temp * 9 / 5 + 32).toFixed(0)}F High: {(day.high_temp * 9 / 5 + 32).toFixed(0)}F </p>
            </li>
          ))}
        </ul>
      </article>
    );
  }
}

export default Weather;
