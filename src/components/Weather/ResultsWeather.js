import React from 'react';
import './Weather.css';
import DisplayWeather from './DisplayWeather';

function ResultsWeather(props) {

      return (
        <div className="container">
		    <div className="sectiontitle">
		      <h2>Weather</h2>
		    </div>
		    <section id="weather">

	          {
	              props.weather.map( w => {
	              return <DisplayWeather
	                      w={w}
	                      key={w.id}
	                      />
	              })
	          }

            </section>
          </div>
      );

};

export default ResultsWeather;
