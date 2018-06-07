import React from 'react';
import './ResultListFsPho.css';
import ResultsFsPho from './ResultsFsPho';

function ResultListFsPho (props) {
  console.log("In ResultListPho: " + props.photos);
    return (
        <span>
          {
              props.photos.map( photo => {

              return <ResultsFsPho
                      photo={photo}
                      key={photo.id}
                      />
              })
          }
        </span>
    );
};

export default ResultListFsPho;
