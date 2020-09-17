class Forecast{
    constructor(){
        this.key = 'zxaAIGcaGp6QPJT5SWveV9OdIALwmRyu';
        this.weatherURI = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDetails = await this.getCity(city);
        const cityWeather = await this.getWeather(cityDetails.Key);
    
        return {cityDetails, cityWeather};
    }
    // Get city key
    async getCity(city){

        const query = `?apikey=${this.key}&q=${city}`;

        const response = await fetch(this.cityURI+query);
        const data = await response.json();

        return data[0]; // return the best match i.e. the first object in the array.
    }
    // get current weather data
    async getWeather(id){

        const query = `${id}?apikey=${this.key}`;
    
        const response = await fetch(this.weatherURI+query);
        const data = await response.json();
    
        return data[0]; // return the single object in the array.
    }
}



