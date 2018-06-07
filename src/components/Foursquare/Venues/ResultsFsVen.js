import React from 'react';
import './ResultsFsVen.css';

function ResultsFsVen(props){
	let imageSource = props.venue.icon.prefix + "bg_64" + props.venue.icon.suffix;
        return (
            <div className="venue">
              <h3>{props.venue.name}</h3>
              <img src={imageSource} alt="venue icon" />
              <h4>{props.venue.address},<br />{props.venue.city},<br />{props.venue.country}</h4>
            </div>
        );
};

export default ResultsFsVen;