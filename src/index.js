import * as forecasts from './script/weather_data'
const weatherData = forecasts.weatherData()

const result = document.getElementById('result')

class MakeData {
    execute() {
        result.appendChild(this.today())
        result.appendChild(this.tomorrow())
    }
    today() {
        const todayImg = weatherData[0].image.url

        const img = document.createElement('img')
        const p = document.createElement('p')
        p.setAttribute('id', 'title')
    
        img.src = todayImg
        img.setAttribute('alt', '今日の天気画像')
    
        p.textContent = '今日の天気'
        p.className = 'today'

        const div = document.createElement('div')
        div.className = 'today-wrapper'

        div.appendChild(img)
        div.appendChild(p)

        return div
    }
    tomorrow() {
        const　tomorrowImg = weatherData[1].image.url

        const img = document.createElement('img')
        const p = document.createElement('p')
        p.setAttribute('id', 'title')
    
        img.src = tomorrowImg
        img.setAttribute('alt', '明日の天気画像')
    
        p.textContent = '明日の天気'
        p.className = 'tomorrow'
    
        const div = document.createElement('div')
        div.className = 'tomorrow-wrapper'

        div.appendChild(img)
        div.appendChild(p)
        
        return div
    }
}

const makeData = new MakeData()
makeData.execute()
