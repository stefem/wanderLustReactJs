import React from 'react';
import './Weather.css';

function DisplayWeather(props){
	const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
    	<div className="weather">
    		<h2>{weekDays[(new Date(props.w.date)).getDay()]}</h2>
    	  	<img src={props.w.icon} alt="forecast icon" />
            <h4>Max (f): {props.w.maxtemp}</h4>
            <h4>Min (f): {props.w.mintemp}</h4>
        </div>
    );
};

export default DisplayWeather;