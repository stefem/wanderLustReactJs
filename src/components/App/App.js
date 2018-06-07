import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import Apixu from '../../util/api/Apixu';
import ApixuSearchResults from '../Apixu/ApixuSearchResults';

// import Foursquare from '../../util/api/Foursquare';
import FoursquareHTTP from '../../util/api/FoursquareHTTP';
import SearchResultsFsVen from '../Foursquare/Venues/SearchResultsFsVen';
// import SearchResultsFsPho from '../Foursquare/Photos/SearchResultsFsPho';

const venuesArray = [];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast : [

      ],
      venues : [

      ],
     
    }

    this.search = this.search.bind(this);
  }

  search(term){ // search

    Apixu.getForecast(term).then(apixuResponse => {
       this.setState({forecast: apixuResponse});

    });

    // console.log(FoursquareHTTP.getVenues(term));

    Foursquare.getVenues(term).then(foursquareResponse => { // getVenues
      console.log("FSResp: " + foursquareResponse[0].id);

      foursquareResponse.forEach((venue) => {
        console.log("FSResp venue: " + venue.id);
        let venueId = venue.id;
        Foursquare.getVenuePhotos(venueId);
      })

      
    });   // end getVenues 
   
  } // end search

  render() {
    return (
      <div className="App">
        <div id="pageHeader">
          <h1>Where do you want to land?</h1>
          <SearchBar onSearch={this.search} />
        </div>
        <ApixuSearchResults forecasts = {this.state.forecast} />
        <SearchResultsFsVen venues = {this.state.venues} photos = {this.state.venues.photos} />
      </div>
    );
  }
}

export default App;
