window.onload = function() 
{
    const buttonArray = ["atlanta", "denver", "seattle", "san francisco", "orlando", "new york", "chicago", "austin"];
    const apiKey = "820747b9100e2cc91a280dbc0b2581f6";
    var cityName = "";
    var cityLat;
    var cityLon;

    for (var i = 0; i < buttonArray.length; i++)
    {
        document.getElementById(buttonArray[i]).addEventListener('click', searchButtonValue.bind(this, buttonArray[i]));
    }
    
    function searchButtonValue(buttonName)
    {
        console.log(buttonName);
        //document.getElementById(searchInput).innerHTML = "CHeese";
    }

    function FindACity(cityName)
    {
        fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=5&appid=820747b9100e2cc91a280dbc0b2581f6')
        .then((response) => response.json())
        .then((output) => 
        {
            //Find Latitude of city
            cityLat = output[0].lat;

            //Find Longitude of city
            cityLon = output[0].lon;

            //Find weather for coordinates
            fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + cityLat + "&lon=" + cityLon + "&appid=820747b9100e2cc91a280dbc0b2581f6")
            .then((response) => response.json())
            .then((output) =>
            {
                //Get date
                var currentDay = (output.list[0].dt_txt.substring(8, 10)); //Get Day
                var currentMonth = (output.list[0].dt_txt.substring(5, 7)); //Get Month
                var currentYear = (output.list[0].dt_txt.substring(0, 4)); //Get Year
                console.log("(" + currentMonth + "/" + currentDay + "/" + currentYear + ")");

                //Get icon
                console.log("Icon: " + output.list[0].weather[0].icon);

                //Get tempature
                console.log("Temp: " + (((output.list[0].main.temp_max - 273.15) * 1.8) + 32) + "F");

                //Get wind
                console.log("Wind: " + output.list[0].wind.speed + " MPH");

                //Get humidity
                console.log("Humidity: " + output.list[0].main.humidity + "%");
            })
        })
    }
    FindACity("troutdale");

    //Set Forecast Information
    function SetDates()
    {
        for (i = 1; i < 6; i++)
        {
            document.getElementById('date' + i).innerHTML = "9/14/2022 (var)"; //actually set using i
        }
    }

    function SetTemps()
    {
        for (i = 1; i < 6; i++)
        {
            document.getElementById('temp' + i).innerHTML = "Temp: 63.55 F (var)";
        }
    }

    function SetWinds()
    {
        for (i = 1; i < 6; i++)
        {
            document.getElementById('wind' + i).innerHTML = "Wind: 3.94 MPH (var)";
        }
    }

    function SetHumids()
    {
        for (i = 1; i < 6; i++)
        {
            document.getElementById('humid' + i).innerHTML = "Humidity: 63% (var)";
        }
    }

    function SetForecasts()
    {
        SetDates();
        SetTemps();
        SetWinds();
        SetHumids();
    }
    SetForecasts();

    //Set Today Box Information
    function SetTodayBox()
    {
        document.getElementById("today-city-date").innerHTML = "Atlanta (9/13/2022) (var)";
        document.getElementById("today-temp").innerHTML = "Temp: 76.62F (var)";
        document.getElementById("today-wind").innerHTML = "Wind: 8.43 MPH (var)";
        document.getElementById("today-humidity").innerHTML = "Humidity: 44% (var)";
    }
    SetTodayBox();


    function getWeather()
    {
        
    }
}
