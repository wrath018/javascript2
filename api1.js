
var result;
function callapi(){

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
            'X-RapidAPI-Key': '68d72e033bmsh4a9c144169b6dc0p112cb6jsn3895dcbb89f5'
        }
    };
    
    fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=20&lon=77', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
callapi(); 