import React from 'react';
import './FsSearchResults.css';
import FsResultList from './FsResultList';

function FsSearchResults(props) {
	
      return (
          <div className="container">
		    <div className="sectiontitle">
		      <h2>Attractions
		      </h2>
		    </div>
		    <section id="venues">
            	<FsResultList venues={props.venues} />
            </section>
          </div>
      );
};

export default FsSearchResults;
