let day_time = document.querySelector('.day_time')
let temperature = document.querySelector('.temperature')

fetch('https://api.openweathermap.org/data/2.5/weather?lat={38.895}&lon={-77.0366}&appid={0a920b406c300c9dc00c3f6004ca768b}')
    .then(response => response.json())
    .then(data => console.log(data))

.catch(err => console.log("wrong request 404"))




3
4
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
document.getElementById("day_time").innerHTML = dateTime ;