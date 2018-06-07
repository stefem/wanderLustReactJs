import React from 'react';
import './ApixuResults.css';

function ApixuResults(props){
	const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        return (
        	<div className="weather">
        		<h2>{weekDays[(new Date(props.forecast.date)).getDay()]}</h2>
        	  	<img src={props.forecast.icon} alt="forecast icon" />
                <h4>Max (f): {props.forecast.maxtemp}</h4>
                <h4>Min (f): {props.forecast.mintemp}</h4>
            </div>
        );
};

export default ApixuResults;