const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forcast = new Forecast();

const updateUI = (data) => {
    // grab the data
    const {cityDetails, cityWeather} = data
    // const cityDetails = data.cityDetails;
    // const cityWeather = data.cityWeather;

    // update details template
    details.innerHTML = 
        `<h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${cityWeather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${cityWeather.Temperature.Metric.Value}</span>
            <span>&deg;C</span> 
        </div>`

    // update icon image
    const iconSrc = `resources/icons/${cityWeather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // update night/day image
    let timeSrc = null;
    
    // ternary operator
    timeSrc = cityWeather.IsDayTime ? 'resources/day.svg' : 'resources/night.svg';
    time.setAttribute('src', timeSrc);

    // remove the hidden class on card if present 
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update ui with new city
    forcast.updateCity(city)
        .then(data => updateUI(data))
        .catch(error => console.log(error));

    // set local storage
    localStorage.setItem('city', city);
});

if(localStorage.getItem('city')){
    forcast.updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(error => console.log(error));
}

