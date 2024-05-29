const apiKey = "118ac911e44f47c378f0fc4df8725f26";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searcBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apiKey}`);
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';
    
        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = '/weather app/Images/clouds.png';
        }
        else if(data.weather[0].main == 'Rain'){
            weatherIcon.src = '/weather app/Images/rain.png';
        }
        else if(data.weather[0].main == 'Clear'){
            weatherIcon.src = '/weather app/Images/clear.png';
        }
        else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = '/weather app/Images/drizzle.png';
        }
        else if(data.weather[0].main == 'Mist'){
            weatherIcon.src = '/weather app/Images/mist.png';
        }
    
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
    
}
searcBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
});