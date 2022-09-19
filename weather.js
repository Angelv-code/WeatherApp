let cityInp = document.getElementById("inp-1");
let searchBtn = document.getElementById("btn-1");
let apiKey = "c169081b3524b9aa0a9459cfc922275e";
    
searchBtn.addEventListener("click", () => {
        let cityName = cityInp.value;
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + cityName
            + "&units=imperial&appid=" 
            + apiKey
            )
        .then((response) => response.json())
        .then((data) => {
    

    
        const {name} = data;
        const {country} =data.sys
        const {speed} = data.wind;
        const {temp, feels_like, humidity } = data.main;
        const {description} = data.weather[0]
        console.log(name, country, speed, temp, feels_like, humidity, description);
    
})
});



searchBtn.addEventListener("click", () => {
    let cityName = cityInp.value;
    let finalURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c169081b3524b9aa0a9459cfc922275e&units=imperial`;
    console.log(finalURL);
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        

        result.innerHTML= `
        <h1>${data.name}, ${data.sys.country}</h1>
        <img class = "img-api" src = "http://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h3 class = "api-text">Temperature </h3> <h3>${data.main.temp} - Fahrenheit</h3>
        <h3 class = "api-text">Feels Like </h3> <h3>${data.main.feels_like} - Fahrenheit</h3>
        <h3 class = "api-text">Sky looks </h3> <h3>${data.weather[0].description}</h3>
        <h3 class = "api-text">Humidity </h3> <h3>${data.main.humidity}%</h3>
        <h3 class = "api-text">Wind Speed </h3> <h3>${data.wind.speed} - MPH</h3>
        `;
    })
});
