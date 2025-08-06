'use strict'

const TOKEN = '2a06539b837057bb0d7fd0dd058b8e57';

const button = document.getElementById('button');
button.addEventListener('click', () => {
    return getWeatherWidget()
})

void getWeatherWidget();

async function getWeatherWidget() {
    try {
        const response =  await fetch('https://api.openweathermap.org/data/2.5/weather?q=Odessa&mode=html&appid=' + TOKEN);
        const widget = await response.text()
        document.getElementById('widget').innerHTML = widget;
        console.log("Обновил виджет");
    } catch(error) {
        console.error(error);
    }
}

