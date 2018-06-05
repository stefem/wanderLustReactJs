import React from 'react';
import ReactDOM from 'react-dom';
import './ApixuResultList.css';
import ApixuResults from './ApixuResults';

function ApixuResultList (props) {

    return (
        <span>
          {
              props.forecasts.map( forecast => {
              return <ApixuResults
                      forecast={forecast}
                      key={forecast.id}
                      />
              })
          }
        </span>
    );
};

export default ApixuResultList;

