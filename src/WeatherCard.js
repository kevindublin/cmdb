import Temperature from './Temperature.js';

const WeatherCard = (props) => {
    return <div>
        <p>Current Temp: {props.currentTemp ?? 'N/A'}&deg;F</p>
        <p>High:  <Temperature temp={props.highTemp} /></p>
        <p>Low:  <Temperature temp={props.lowTemp} /></p>
    </div>
}

export default WeatherCard;