// Foursquare API Info
const clientId = '32YE3QQ3KQGZLR2MDMJLOEVAZCQHP4MHEPAKMKJTPXZUH5PJ ';
const clientSecret = 'I23Q2HZNXYKI3FLRFIRJLEDM4LG4EUEI3F31X1UNUYXF3LRX';
const urlExplore = 'https://api.foursquare.com/v2/venues/explore?near=';
const urlPhotos = 'https://api.foursquare.com/v2/venues/'


const Foursquare = {
    getVenues: (searchTerm) => {
        const fetchVenuesURL = `${urlExplore}${searchTerm}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20180602`;
        return fetch(fetchVenuesURL).then( response => {
             return response.json();
        }).then( jsonResponse => {
            if (jsonResponse.response.groups[0].items) {

                return jsonResponse.response.groups[0].items.map(item => (
                                
                            // maybe it all needs to get nested in here? 
                            // nest anpother map here - build once all mapped?
                            {
                                id: item.venue.id,
                                name: item.venue.name,
                                address : item.venue.location.address,
                                city : item.venue.location.city,
                                country : item.venue.location.country,
                                icon : item.venue.categories[0].icon,
                                photos: ["photos holder"]
                            }
             
                        ) // end map

            ); // end return

            } else {
                return [];
            }
  
        })
    }, // end getVenues
    getVenuePhotos : (venueId) => {
        console.log("Call to getVenuePhotos - venueId: " + venueId);

        let fetchPhotosURL = `${urlPhotos}${venueId}/photos?limit=1&client_id=${clientId}&client_secret=${clientSecret}&v=20180602`;
        console.log("fetchPhotosURL: " + fetchPhotosURL);

        return fetch(fetchPhotosURL).then( response => {
            if(response) {
             return response.json();
            } else {
                console.log("There was no response from the server");
            }
        }).then(jsonResponse => {
            console.log("jsonResponse.response.photos.items[1]" + Object.keys(jsonResponse.response));
        })
    }
    
    // getVenuesHTTP: (searchTerm) => {}
}; // end Foursquare


export default Foursquare;