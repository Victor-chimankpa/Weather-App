const apikey = "9c749d053a45b7a6612e92b8fbd3f3f7";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?unit=metric&q=";
const searchBar = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");
const weatherImg = document.querySelector(".weather-img");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humi").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".des").innerHTML = data.weather[0].description;

    if (data.weather[0].main == "Clouds") {
      weatherImg.src = "img/cloudy.png";
    } else if (data.weather[0].main == "Rain") {
      weatherImg.src = "img/heavy-rain.png";
    } else if (data.weather[0].main == "Clear") {
      weatherImg.src = "img/clear-sky.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherImg.src = "img/j.png";
    } else if (data.weather[0].main == "Mist") {
      weatherImg.src = "img/fog.png";
    } else if (data.weather[0].main == "Haze") {
      weatherImg.src = "img/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBar.value);
});
