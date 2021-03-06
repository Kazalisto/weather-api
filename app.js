//Init storage
const storage = new Storage();
//Get Storage location data
const weatherLocation = storage.getLocationData()
//Init weather
const weather = new Weather(weatherLocation.city, weatherLocation.country);
//Init UI
const ui = new UI();
//Get Weather on DOM load 
document.addEventListener('DOMContentLoaded', getWeather);
//Change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
  const city = document.getElementById('city').value
  const country = document.getElementById('country').value


    //set location in local storage
  storage.setLocationData(city, country)
  //change location
  weather.changeLocation(city, country)


  //get and display weather
  getWeather()

  //close modal
  $('#locModal').modal('hide')

})
console.log('first')

function getWeather(){
    console.log('second')
weather.getWeather()
    .then(result =>{
        console.log(result)
        ui.paint(result)
    })
    .catch(err => err)
}
