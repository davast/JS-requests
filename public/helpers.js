const createVenueHTML = (name, location, iconSource) => {
    return `<h2>${name}</h2>
    <img class="venueimage" src="${iconSource}"/>
    <h3>Address:</h3>
    <p>${location.address}</p>
    <p>${location.city}</p>
    <p>${location.country}</p>`;
  }
  
  const createWeatherHTML = (currentDay) => {
    return `<h2>${weekDays[(new Date()).getDay()]}</h2>
          <h2>Temperature: ${kelvinToCelsius(currentDay.main.temp)}&deg;C</h2>
          <h2>Condition: ${currentDay.weather[0].description}</h2>
        <img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">
        <h2>Wind: ${currentDay.wind.speed}</h2>`;
  }
  
  const kelvinToCelsius = k => (k - 273.15).toFixed(0);

  const nonRepeatNumber = () => {
    let nums = [1,2,3,4,5],
    ranNums = [],
    i = nums.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    
    ranNums.push(nums[j]);
    nums.splice(j,1);
    }
    return ranNums
  }