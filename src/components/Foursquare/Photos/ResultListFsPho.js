import React from 'react';
import './FsResultList.css';
import FsResults from './FsResults';

function FsResultList (props) {
    return (
        <span>
          {
              props.venues.map( venue => {

              return <FsResults
                      venue={venue}
                      key={venue.id}
                      />
              })
          }
        </span>
    );
};

export default FsResultList;
