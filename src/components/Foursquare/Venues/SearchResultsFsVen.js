import React from 'react';
import './SearchResultsFsVen.css';
import ResultListFsVen from './ResultListFsVen';

function SearchResultsFsVen(props) {
	
      return (
          <div className="container">
		    <div className="sectiontitle">
		      <h2>Attractions
		      </h2>
		    </div>
		    <section id="venues">
            	<ResultListFsVen venues={props.venues} />
            </section>
          </div>
      );
};

export default SearchResultsFsVen;
