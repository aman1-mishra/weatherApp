let input = document.querySelector(".input");
let search = document.querySelector(".icon");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");

async function changeTemp(city) {
    let apiKey = `028ee1e5f14177ab7d177945654c4239`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    let weatherData = await fetch(url).then(res => res.json());
    temp.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;

    humidity.innerHTML = `${weatherData.main.humidity}%`;
    console.log(weatherData);
    wind.innerHTML = `${weatherData.wind.speed}km/h`;

}

search.addEventListener("click", function() {
    changeTemp(input.value);
});