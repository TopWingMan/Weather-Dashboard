window.onload = function() 
{
    const buttonArray = ["Atlanta", "Denver", "Seattle", "San Francisco", "Orlando", "New York", "Chicago", "Austin"];
    //const apiKey = "820747b9100e2cc91a280dbc0b2581f6"; // Other Key
    const apiKey = "3c01aab4380b77b777b136f67b72d7f9";

    //Sets up pre city Search Buttons
    for (var i = 0; i < buttonArray.length; i++)
    {
        document.getElementById(buttonArray[i]).addEventListener('click', searchButtonValue.bind(this, buttonArray[i]));
    }
    
    function searchButtonValue(buttonName)
    {
        SetWeatherToCity(buttonName);
    }

    document.getElementById("searchButton").addEventListener('click', SearchCityName.bind(this));

    function SearchCityName()
    {
        SetWeatherToCity(document.getElementById("searchInput").value);
    }

    function SetWeatherToCity(cityName)
    {
        fetch('https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=5&appid=820747b9100e2cc91a280dbc0b2581f6')
        .then((response) => response.json())
        .then((output) => 
        {
            //Find Latitude of city
            var cityLat = output[0].lat;

            //Find Longitude of city
            var cityLon = output[0].lon;

            //Find and set todays weather to citynames weather
            FindWeather(cityName, cityLat, cityLon, 0);

            //Find and set forecasts weather to citynames forecasts weather
            FindWeather(cityName, cityLat, cityLon, 1);
            FindWeather(cityName, cityLat, cityLon, 9);
            FindWeather(cityName, cityLat, cityLon, 17);
            FindWeather(cityName, cityLat, cityLon, 25);
            FindWeather(cityName, cityLat, cityLon, 33);
        })
    }

    function FindWeather(cityName ,cityLat, cityLon, value)
    {
        //Find weather for coordinates
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + cityLat + "&lon=" + cityLon + "&appid=820747b9100e2cc91a280dbc0b2581f6")
        .then((response) => response.json())
        .then((output) =>
        {
            //Get date
            var day = (output.list[value].dt_txt.substring(8, 10)); //Get Day
            var month = (output.list[value].dt_txt.substring(5, 7)); //Get Month
            var year = (output.list[value].dt_txt.substring(0, 4)); //Get Year
            var date = ("(" + month + "/" + day + "/" + year + ")");

            //Get icon
            var icon = ("Icon: " + output.list[value].weather[0].icon);

            //Get tempature
            var temp = ("Temp: " + (((output.list[value].main.temp_max - 273.15) * 1.8) + 32).toString().substring(0, 4) + "F");

            //Get wind
            var wind = ("Wind: " + output.list[value].wind.speed + " MPH");

            //Get humidity
            var humidity = ("Humidity: " + output.list[value].main.humidity + "%");

            SetForecast(cityName, date, icon, temp, wind, humidity, value);
        })
    }

    function SetForecast(cityName, date, icon, temp, wind, humidity, value)
    {
        if (value === 0) //Set Today Box Information
        {
            document.getElementById("today-city-date").innerHTML = cityName + " " + date;
            document.getElementById("today-temp").innerHTML = temp;
            document.getElementById("today-wind").innerHTML = wind;
            document.getElementById("today-humidity").innerHTML = humidity;
        }
        else if (value > 0) //Set Forcast Boxes Information
        {
            document.getElementById('date' + value).innerHTML = date;
            document.getElementById('temp' + value).innerHTML = temp;
            document.getElementById('wind' + value).innerHTML = wind;
            document.getElementById('humid' + value).innerHTML = humidity;
        }
    }

    SetWeatherToCity("Atlanta");
}
