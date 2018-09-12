import * as forecasts from './script/weather_data'
const weatherData = forecasts.weatherData()

const result = document.getElementById('result')

const img = document.createElement('img')
const p = document.createElement('p')
p.setAttribute('id', 'title')

const today = ()=> {
    const todayImg = weatherData[0].image.url

    img.src = todayImg
    img.setAttribute('alt', '今日の天気画像')

    p.textContent = '今日の天気'
    p.className = 'today'

    result.appendChild(img)
    result.appendChild(p)
}

const tomorrow = ()=> {
    const　tomorrowImg = weatherData[1].image.url

    img.src = tomorrowImg
    img.setAttribute('alt', '明日の天気画像')

    p.textContent = '明日の天気'
    p.className = 'tomorrow'

    result.appendChild(img)
    result.appendChild(p)
}

const checkWeather = ()=> {
    if(document.getElementById('title').className === 'today') {
        tomorrow()
    } else {
        today()
    }
}

let change
const changeDay = ()=> {
    change = setInterval(checkWeather, 2000)
}

today()
changeDay()

document.getElementById('stop-btn').addEventListener('click',()=> {
    clearInterval(change)
})
