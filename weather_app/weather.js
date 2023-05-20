const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a6e964cab6mshbadec90cebe86bap133b02jsn5ef7130d2251',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            temp.innerHTML = response.temp
            cloud_pct.innerHTML = response.cloud_pct
            humidity.innerHTML = response.humidity
            wind_speed.innerHTML = response.wind_speed
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Bengaluru")
