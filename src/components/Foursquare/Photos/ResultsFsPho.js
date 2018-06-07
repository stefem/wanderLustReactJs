import React from 'react';
import './ResultsFsPho.css';

function ResultsFsPho(props){
	let imageSource = props.photo.prefix + props.photo.width + "x" + props.photo.height + props.photo.suffix;
	console.log("In ResultsFsPho: " + imageSource);
        return (
            <div className="photo">
            <h4>{props.photo.venue}</h4>
              <img src={imageSource} alt="" className="venuePhoto" />
            </div>
        );
};

export default ResultsFsPho;