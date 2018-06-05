// Foursquare API Info
const clientId = 'xxx';
const clientSecret = 'xxx';
const urlExplore = 'https://api.foursquare.com/v2/venues/explore?near=';
const urlPhotos = 'https://api.foursquare.com/v2/venues/'

//https://api.foursquare.com/v2/venues/VENUE_ID/photos
const Foursquare = {
    getVenues: (searchTerm) => {

        const urlToFetch = `${urlExplore}${searchTerm}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20180602`;
        console.log("fetchVenuesURL: " + urlToFetch);

        return fetch(urlToFetch).then( response => {
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
                        icon : item.venue.categories[0].icon
                    }
                ));                

            } else {
                return [];
            }
  
        })

    },
    getVenuePhotos: (venueId) => {
        const fetchPhotosURL = `${urlPhotos}${venueId}/photos?limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20180602`;
        return fetch(fetchPhotosURL).then( response => {
             return response.json();
        }).then( jsonResponse => {

            if (jsonResponse.response.photos.items) {
                console.log(jsonResponse.response.photos.items[0].prefix)
                return jsonResponse.response.photos.items.map(item => (
                {
                    id : item.id,
                    created: item.createdAt,
                    prefix: item.prefix,
                    suffix: item.suffix,
                    width: item.width,
                    height: item.height
                }
                ));
            } else {
                return [];
            }
        })
    }
}

export default Foursquare;