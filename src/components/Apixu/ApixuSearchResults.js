import React from 'react';
import './ApixuSearchResults.css';
import ApixuResultList from './ApixuResultList';

function ApixuSearchResults(props) {
      return (
        <div className="container">
		    <div className="sectiontitle">
		      <h2>Weather</h2>
		    </div>
		    <section id="weather">
            	<ApixuResultList forecasts={props.forecasts} />
            </section>
          </div>
      );
};

export default ApixuSearchResults;
