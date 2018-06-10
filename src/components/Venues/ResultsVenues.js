import React from 'react';
import './Venues.css';
import RenderVenues from './RenderVenues';

function ResultsVenues(props) {
	
      return (
          <div className="container">
		    <div className="sectiontitle">
		      <h2>Attractions</h2>
		    </div>
		    <section id="venues">
            	{
					props.venues.map( venue => {
						console.log("props: " + venue.photos)
					return <RenderVenues
					    venue={venue}
					    key={venue.id}
					  />
					})
		        }
            </section>
          </div>
      );
};

export default ResultsVenues;
