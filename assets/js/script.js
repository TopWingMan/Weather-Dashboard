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
        
    }

    //api.openweathermap.org/data/2.5/weather?q={cityName}&appid={apiKey};
}
