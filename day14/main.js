const API_KEY = "afca921e7af21c2d06854abdfa9a2376";

const DAYS_OF_THE_WEEK = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const getCurrentWeatherData = async () => {
  const city = "pune";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  return response.json();
};

const getHourlyForecast = async ({ name: city }) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  return data.list.map((forecast) => {
    const {
      main: { temp, temp_max, temp_min },
      dt,
      dt_txt,
      weather: [{ description, icon }],
    } = forecast;
    return { temp, temp_max, temp_min, dt, dt_txt, description, icon };
  });
};

const formatTemperature = (temp) => `${temp?.toFixed(1)}°`;
const createIconUrl = (icon) =>
  ` https://openweathermap.org/img/wn/${icon}@2x.png`;

function loadCurrentForecast({ name, main, weather: [{ description }] }) {
  const currentForecastElement = document.querySelector("#current-forecast");
  currentForecastElement.querySelector(".city").textContent = name;

  if (main) {
    const { temp, temp_max, temp_min } = main; // Destructure temp_max and temp_min here
    currentForecastElement.querySelector(".temp").textContent =
      formatTemperature(temp);
    currentForecastElement.querySelector(
      ".min-max-temp"
    ).textContent = `H: ${formatTemperature(temp_max)} L: ${formatTemperature(
      temp_min
    )}`;
  }

  currentForecastElement.querySelector(".description").textContent =
    description;
}

const loadHourlyForecast = (hourlyForecast) => {
  console.log(hourlyForecast);
  let dataFor12Hours = hourlyForecast.slice(1, 13);
  const hourlyContainer = document.querySelector(".hourly-container");
  let innerHTMLString = ``;

  for (let { temp, icon, dt_txt } of dataFor12Hours) {
    innerHTMLString += `<article>
        <h3 class="time">${dt_txt.split(" ")[1]}</h3>
        <img class="icon" src="${createIconUrl(icon)}"/>
        <p class="hourly-temp">${formatTemperature(temp)}</p>
    </article>`;
  }
  hourlyContainer.innerHTML = innerHTMLString;
};

const calculateDayWiseForecast = (hourlyForecast) => {
  let dayWiseForecast = new Map();
  for (let forecast of hourlyForecast) {
    const [date] = forecast.dt_txt.split(" ");
    const dayOfTheWeek = DAYS_OF_THE_WEEK[new Date(date).getDay()];
    console.log(dayOfTheWeek);
  }
};

const loadFiveDayForecast = (hourlyForecast) => {
  console.log(hourlyForecast);
  const dayWiseForecast = calculateDayWiseForecast(hourlyForecast);

  const loadFeelsLike = ({ main: { feels_like } }) => {
    let container = document.querySelector("#feels-like");
    container.querySelector(".feels-like-temp").textContent =
      formatTemperature(feels_like);
  };

  const loadHumidity = ({ main: { humidity } }) => {
    let container = document.querySelector("#humidity");
    container.querySelector(".humidity-value").textContent = `${humidity} %`;
  };

  document.addEventListener("DOMContentLoaded", async () => {
    const currentWeather = await getCurrentWeatherData();
    loadCurrentForecast(currentWeather);

    // Correct variable name here
    const hourlyForecast = await getHourlyForecast(currentWeather);
    loadHourlyForecast(hourlyForecast);
    loadFiveDayForecast(hourlyForecast);
    loadFeelsLike(currentWeather);
    loadHumidity(currentWeather);
  });
};
