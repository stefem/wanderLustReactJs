// APIXU Info
const apiKey = 'xxx';
const forecastUrl = 'https://api.apixu.com/v1/forecast.json?key=';

const APIWeather = {
    getForecast: (searchTerm) => {
        const urlToFetch = `${forecastUrl}${apiKey}&q=${searchTerm}&days=4&hour=11`;

        return fetch(urlToFetch).then( response => {
                return response.json();
        }).then( jsonResponse => {
            if (jsonResponse.forecast) {
                // if the right information is returned then populate constant and return
                return jsonResponse.forecast.forecastday.map(currentDay => (
                    {
                        id: currentDay.date,
                        date: currentDay.date,
                        mintemp: currentDay.day.mintemp_f,
                        maxtemp: currentDay.day.maxtemp_f,
                        icon: currentDay.day.condition.icon
                    }
                ));
            } else {
                //if no information is returned by the promise then return an empty array
                return [];
            }
        })
    }
}

export default APIWeather;