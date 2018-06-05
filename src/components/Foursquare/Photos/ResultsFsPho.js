import React from 'react';
import './FsResults.css';

function FsResults(props){
	let imageSource = props.venue.icon.prefix + "bg_64" + props.venue.icon.suffix;
        return (
            <div className="venue">
              <h3>{props.venue.name}</h3>
              <img src={imageSource} />
              <h4>{props.venue.address},<br />{props.venue.city},<br />{props.venue.country}</h4>
            </div>
        );
};

export default FsResults;