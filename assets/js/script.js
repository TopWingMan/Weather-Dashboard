window.onload = function() 
{
    const buttonArray = ["atlanta", "denver", "seattle", "san francisco", "orlando", "new york", "chicago", "austin"];

    for (var i = 0; i < buttonArray.length; i++)
    {
        document.getElementById(buttonArray[i]).addEventListener('click', setButtonValue.bind(this, buttonArray[i]));
    }
    
    function setButtonValue(buttonName)
    {
        console.log(buttonName);
    }
}
