var button= document.querySelector('.button');
var input = document.querySelector('.inputValue');
var city = document.querySelector('.city');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.weathercondition');

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "497df9aa02775d8c6cdec3c6d0cd159c";
const loadData=(event)=>{
  fetch(baseUrl+input.value+'&appid='+apiKey)
    .then(response => response.json())
    .then(data => {
        try {
          const tempValue = data?.main?.temp - 273.15;
          const nameValue = data?.name;
          const weathercondition = data?.weather[0]?.description;
          city.innerHTML = nameValue;
          desc.innerHTML = "weather condition - "+weathercondition;
          temp.innerHTML = "Temp - "+tempValue.toFixed(2) + "°C";
          input.value ="";
        } catch (err) {
           console.log(err);
        }
     });
}

button.addEventListener('click',loadData)
