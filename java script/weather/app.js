const apikey="fa40c5d093c097436d4ca8485842e28d"
const form=document.querySelector("form");

form.addEventListener('submit',function(e){
     e.preventDefault();
     const cityName=document.getElementById('city-name').value;
     getWeatherData(cityName);

})
async function getWeatherData(cityName) {
let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apikey}`;
const response=await fetch(url);
const data=await response.json();
showWeatherInfo(data);
}
function showWeatherInfo(data){
     console.log(data);
     let imgIcon="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
     const weatherInfo=document.getElementById('Weather-info');
     weatherInfo.innerHTML=`<center><table border=1 style="text-align:center;">

     <tr style="background-color:pink;"><th>CountryCode<th> <th>CityName</th><th>Temperature</th><th>Humidity</th>
     <th>Air Pressure</th><th>Weather</th><th>Wind speed</th>
     <th>Latt. & Long.</th>
     </tr>

     <tr style="background-color:yellow;">
     <td>${data.sys.country}<td><td>${data.name}</td><td>${data.main.temp}F|${Math.round(data.main.temp-273.15)}&deg;C</td>
     <td>${data.main.humidity}%</td>
     <td>${data.main.pressure} hPa</td>
     <td>${data.weather[0].description}<img src=${imgIcon} height=25 width=30 </td>
     <td>${data.wind.speed}m/s</td>
     <td>${data.coord.lat}& ${data.coord.lon}</td>
     </tr></table></center>
     `
}
