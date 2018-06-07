import React from 'react';
import './SearchResultsFsPho.css';
import ResultListFsPho from './ResultListFsPho';

function SearchResultsFsPho(props) {
	console.log("In SearchResultsFsPho: " + props.photos);
      return (
          <div className="container">
		    <div className="sectiontitle">
		      <h2>Photos
		      </h2>
		    </div>
		    <section id="photos">
            	<ResultListFsPho photos={props.photos} />
            </section>
          </div>
      );
};

export default SearchResultsFsPho;
