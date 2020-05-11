// Foursquare API Info
const clientId = 'NN0M5S4L5EFHMQPVWMLTHXBAT0VMBXWT04LNM4PT02CRAWOP';
const clientSecret = 'EWV2FOELA45SKG2GXE12IUVXUCZNSS2YBUWFQVMUPHSXQDUP';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = '9d790bb69a06c85818a4443f30792bbd';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//Date func
function yyyymmdd() {
    var x = new Date();
    var y = x.getFullYear().toString();
    var m = (x.getMonth() + 1).toString();
    var d = x.getDate().toString();
    (d.length == 1) && (d = '0' + d);
    (m.length == 1) && (m = '0' + m);
    var yyyymmdd = y + m + d;
    return yyyymmdd;
}


// Add AJAX functions here:
const getVenues = async () => {
  const city = $input.val();
  const urlToFetch = url + city + "&" + "limit=5&client_id=" + clientId + "&client_secret=" + clientSecret + "&v=" + yyyymmdd() ;

  try {
          const response = await fetch(urlToFetch);      

          if(response.ok) {

              const jsonResponse = await response.json();
              console.log(jsonResponse);

              const venues = jsonResponse.response.groups[0].items.map( item => item.venue);
              console.log(venues)
              return venues;
          }

  } catch(error) {
    console.log(error); 
  }

}

const getForecast = async () => {

  const urlToFetch = weatherUrl + "?&q=" + $input.val() + "&APPID=" + openWeatherKey;

  try {

    const response = await fetch(urlToFetch);

    if(response.ok) {
      const jsonResponse = await response.json();  
      console.log(jsonResponse);
      return jsonResponse;

    }

  } catch(error) {
    console.log(error);
  }

}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon;
    const venueImgSrc = venueIcon.prefix + "bg_64" + venueIcon.suffix;
    const venuePicsSrc = venue.photos.items[1] + "36x36" + venue.photos.items[2] ;
    let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
    $venue.append(venueContent);


  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  // Add your code here: 
  let weatherContent  = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then( (venues) => {
      renderVenues(venues);
  });
  getForecast().then( (forecast) => {
    renderForecast(forecast);
  })
  return false;
}

$submit.click(executeSearch)