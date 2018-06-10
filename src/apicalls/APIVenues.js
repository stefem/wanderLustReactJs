// Foursquare API Info

// best way (thus far) to do nested API calls is seems to be to separate the different calls into methods within the containing object then do any nesting back in the receiving component (in this case, it's done in the search method in App.js)


const clientId = 'xxx';
const clientSecret = 'xxx';
const urlExplore = 'https://api.foursquare.com/v2/venues/explore?near=';
const urlPhotos = 'https://api.foursquare.com/v2/venues/'

const Foursquare = {
    getVenues: (searchTerm) => {
        const fetchVenuesURL = `${urlExplore}${searchTerm}&limit=4&client_id=${clientId}&client_secret=${clientSecret}&v=20180602`;
        return fetch(fetchVenuesURL).then( response => {
             return response.json();
        }).then( jsonResponse => {
            if (jsonResponse.response.groups[0].items) {

                return jsonResponse.response.groups[0].items.map(item => (
                                
                    {
                        id: item.venue.id,
                        name: item.venue.name,
                        address : item.venue.location.address,
                        city : item.venue.location.city,
                        country : item.venue.location.country,
                        icon : item.venue.categories[0].icon,
                        photos : []
                    }
             
                 ) // end map

            ); // end return

            } else {
                return [];
            }
  
        })
    }, // end getVenues
    getVenuePhotos : (venueId) => {

        let fetchPhotosURL = `${urlPhotos}${venueId}/photos?limit=1&client_id=${clientId}&client_secret=${clientSecret}&v=20180602`;

        return fetch(fetchPhotosURL).then( response => {
            if(response) {
             return response.json();
            } else {
                console.log("There was no response from the server");
            }
        }).then(jsonResponse => {
            if (jsonResponse.response.photos.items) {

                return jsonResponse.response.photos.items.map(item => (
                    {
                        id : item.id,
                        created : item.createdAt,
                        prefix: item.prefix,
                        suffix: item.suffix,
                        width: item.width,
                        height: item.height,
                        venue: item.venue
                    }
                ));

            } else {
                return [];
            }
        })
    }
    
}; // end Foursquare


export default Foursquare;