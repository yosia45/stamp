require("dotenv").config();
const axios = require("axios");
const API_KEY = process.env.API_KEY;
const location = "Jakarta";

const latlon = async () => {
  try {
    const { data } = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${API_KEY}`
    );
    const coordinate = { lat: data[0].lat, lon: data[0].lon };
    const result = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${coordinate.lat}&lon=${coordinate.lon}&units=metric&appid=${API_KEY}`
    );
    return result.data.list;
  } catch (err) {
    console.log(err);
    return err;
  }
};

(async () => {
  const coba = await latlon();
  console.log("Weather Forecast:");
  let output = coba.map((el) => {
    let date = new Date(el.dt_txt);
    let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
    let month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
    let weekday = new Intl.DateTimeFormat("en", { weekday: "short" }).format(
      date
    );
    let day = new Intl.DateTimeFormat("en", { day: "numeric" }).format(date);
    if (!date.getHours(2)) {
      console.log(`${weekday}, ${day} ${month} ${year}: ${el.main.temp}°C`);
    }
  });
})();
