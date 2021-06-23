let access_key = process.env.access_key || 'error';
let urlWeather = `http://api.weatherstack.com/current?access_key=${access_key}&query=`;
module.exports.urlWeather = urlWeather;