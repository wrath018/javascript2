var map;
const userAction = async () => {
    var value=document.getElementById('t1').value;
    
 var a;
 var b;
    const response = await fetch(`https://api.traveltimeapp.com/v4/geocoding/search?query=${value}` , {
       // string or object
      headers: {
        'Accept-Language': 'en',
        'Accept': 'application/json',
      'X-Application-Id':'f08969c8',
               'X-Api-Key':'3364b515fb5c972b38bff72eb371476a'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    a=myJson.features[0].geometry.coordinates[0];
    b=myJson.features[0].geometry.coordinates[1];
    console.log(JSON.stringify(myJson.features[0].geometry.coordinates[0]));
    console.log(a);
    console.log(b);
   

// marker
var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var marker = L.marker([b, a],{icon: greenIcon}).addTo(map);

var popup = L.popup();
function onMapClick() {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
  }

 document.getElementById('btn').addEventListener('click',userAction);

 function fun(){
    map=L.map('map').setView([0,0],5);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHVuZWV0ZGQiLCJhIjoiY2wyYWY0ZjY0MDR1dTNkbzBqaGFhdnpsZCJ9.C1IKgYWSFHLLqE66WunNZg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicHVuZWV0ZGQiLCJhIjoiY2wyYWY0ZjY0MDR1dTNkbzBqaGFhdnpsZCJ9.C1IKgYWSFHLLqE66WunNZg'
}).addTo(map);
}


fun();
// userAction();

