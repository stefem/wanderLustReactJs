import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import Apixu from '../../util/api/Apixu';
import ApixuSearchResults from '../Apixu/ApixuSearchResults';

import Foursquare from '../../util/api/Foursquare';
import SearchResultsFsVen from '../Foursquare/Venues/SearchResultsFsVen';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast : [

      ],
      venues : [

      ]
    }

    this.search = this.search.bind(this);
  }

  search(term){ // search

    Apixu.getForecast(term).then(apixuResponse => {
       this.setState({forecast: apixuResponse});

    });

    Foursquare.getVenues(term).then(foursquareResponse => { // getVenues
       this.setState({venues: foursquareResponse});

       foursquareResponse.forEach((venueId, index) => { // forEach
        Foursquare.getVenuePhotos(foursquareResponse[index].id).then(foursquarePhotosRes => { // getVenuePhotos

          this.setState({photos: foursquarePhotosRes});

        }); // end getVenuePhotos
       }); // end forEach

       
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
        <SearchResultsFsVen venues = {this.state.venues} />
      </div>
    );
  }
}

export default App;
