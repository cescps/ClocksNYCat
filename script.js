let cet = document.querySelector('.cet .the-time');
let edt = document.querySelector('.edt .the-time');

const apiKey = '4c5fdf5194263e3c8f02c66cd1ffe3fb';

const getWeatherData = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  const data = await response.json();
  return data;
};

const animate = async () => {
  const cetWeatherData = await getWeatherData('Barcelona');
  const edtWeatherData = await getWeatherData('Albany');

  render(cet, 'Europe/Paris', cetWeatherData);
  render(edt, 'America/New_York', edtWeatherData);
};

const render = (el, tmzn, weatherData) => {
  const time = moment.tz(tmzn).format('HH:mm:ss');
  const temperature = weatherData.main.temp;
  const icon = weatherData.weather[0].icon;

  el.innerHTML = `${time} - ${temperature}°C <img src="http://openweathermap.org/img/w/${icon}.png" alt="weather icon">`;
};

setInterval(animate, 1000);
animate();
