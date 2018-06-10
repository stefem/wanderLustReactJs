import React, { Component } from 'react';
import './App.css';

// components and API callers
import SearchBar from '../SearchBar/SearchBar';
import APIWeather from '../../apicalls/APIWeather';
import ResultsWeather from '../Weather/ResultsWeather';
import APIVenues from '../../apicalls/APIVenues';
import ResultsVenues from '../Venues/ResultsVenues';

import TestVenues from '../Venues/TestVenues';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather : [

      ],
      venues : [

      ],
     
    }

    this.search = this.search.bind(this);
  }

  search(term){ // search

    APIWeather.getForecast(term).then(weatherRes => {
       this.setState({weather: weatherRes});
    });

    APIVenues.getVenues(term).then(venuesResponse => { // getVenues
      this.setState({venues: venuesResponse});
      let photos = [];

      this.state.venues.forEach((venue, index) => {

        this.setState({
          venues: {
            ...this.state.venues,
            [index]: { 
              ...this.state.venues[index],
              photos: APIVenues.getVenuePhotos(this.state.venues[index].id) // now putting value in right place
            }  
          }
        });

      })

    });   // end getVenues 
   
  } // end search

  render() {
    return (
      <div className="App">
        <div id="pageHeader">
          <h1>Where do you want to land?</h1>
          <SearchBar onSearch={this.search} />
          <TestVenues venues = {this.state.venues} />
        </div>

      </div>
    );
  }
}

export default App;
