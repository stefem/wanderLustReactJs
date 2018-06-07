import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import Apixu from '../../util/api/Apixu';
import ApixuSearchResults from '../Apixu/ApixuSearchResults';

import Foursquare from '../../util/api/Foursquare';
import SearchResultsFsVen from '../Foursquare/Venues/SearchResultsFsVen';
// import SearchResultsFsPho from '../Foursquare/Photos/SearchResultsFsPho';


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

    console.log(Foursquare.getVenues(term));

    Foursquare.getVenues(term).then(foursquareResponse => { // getVenues
      console.log("FSResp: " + foursquareResponse.venues);
      // this.setState({venues: foursquareResponse});

       //foursquareResponse.forEach((venueId, index) => { // forEach
        //Foursquare.getVenuePhotos(foursquareResponse[index].id).then(foursquarePhotosRes => { // getVenuePhotos

          // need to find the state with the correct id
          // this.setState({venues.photos: foursquarePhotosRes});

        //}); // end getVenuePhotos
       //}); // end forEach

       
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
        <SearchResultsFsVen venues = {this.state.venues} photos = {this.state.photos} />
      </div>
    );
  }
}

export default App;
