// Foursquare API Info
const clientId = 'xxx';
const clientSecret = 'xxx';
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
                        photos: []
                    }
     
                )); // end return
 
            } else {
                return [];
            }
  
        })
        .then(venueObjects => {
            venueObjects.forEach((venueObject) => {
                
                //  // set up different endpoint var for each iteration relating to the venue in question
                let fetchPhotosURL = `${urlPhotos}${venueObject.id}/photos?limit=1&client_id=${clientId}&client_secret=${clientSecret}&v=20180602`;
                // console.log(fetchPhotosURL);

                return fetch(fetchPhotosURL).then( response => {
                    if(response) {
                     return response.json();
                    } else {
                        console.log("There was no response from the server");
                    }
                })
                .then( jsonResponse => {

                    if (jsonResponse.response.photos.items[0]) {

                            venueObject.photos.push(jsonResponse.response.photos.items.map(item => (

                                {
                                    id : item.id,
                                    created: item.createdAt,
                                    prefix: item.prefix,
                                    suffix: item.suffix,
                                    width: item.width,
                                    height: item.height,
                                    venue: item.venue
                                }

                            )
                        )

                        )

                       // console.log("venueObject: " + venueObject);
                       return venueObject;

                    } else {
                        return [];
                    }

                }) // end then

            }); // end forEach
        }) // end then

    } // end getVenues
}; // end Foursquare


export default Foursquare;