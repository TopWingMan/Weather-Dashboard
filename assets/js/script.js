window.onload = function() 
{
    const buttonArray = ["atlanta", "denver", "seattle", "san francisco", "orlando", "new york", "chicago", "austin"];
    const apiKey = "820747b9100e2cc91a280dbc0b2581f6";
    var cityName = "";

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
        // fetch('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=820747b9100e2cc91a280dbc0b2581f6')
        // .then((response) => response.json())
        // .then((data) => console.log(data));

        //Find latitude
        fetch('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=820747b9100e2cc91a280dbc0b2581f6')
        .then((response) => response.json())
        .then((data) => console.log(data[0].lat));

        //Find longitude
        fetch('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=820747b9100e2cc91a280dbc0b2581f6')
        .then((response) => response.json())
        .then((data) => console.log(data[0].lon));

        //Find weather for place
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=51.5073219&lon=-0.1276474&appid=820747b9100e2cc91a280dbc0b2581f6")
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    FindACity();

    //Set Information
    function SetDates()
    {
        for (i = 1; i < 6; i++)
        {
            document.getElementById('date' + i).innerHTML = "9/14/2022 (var)";
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

    function SetForecast()
    {
        SetDates();
        SetTemps();
        SetWinds();
        SetHumids();
    }
    SetForecast();
}
