const apiKEY = "0fd9e33a1ca9b5b30250fd637c6ab61b";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&apiid=${apiKEY}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{

        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".temp").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle"
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }

    
}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})
