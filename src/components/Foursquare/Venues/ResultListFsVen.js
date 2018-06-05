import React from 'react';
import './ResultListFsVen.css';
import ResultsFsVen from './ResultsFsVen';

function ResultListFsVen (props) {
    return (
        <span>
          {
              props.venues.map( venue => {

              return <ResultsFsVen
                      venue={venue}
                      key={venue.id}
                      />
              })
          }
        </span>
    );
};

export default ResultListFsVen;
