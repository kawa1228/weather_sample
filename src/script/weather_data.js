export const weatherData = ()=> {
    return [
    {
        dateLabel: "今日",
        telop: "曇り",
        date: "2018-09-12",
        temperature: {
            min: null,
            max: {
                celsius: "29",
                fahrenheit: "84.2"
            }
        },
        image: {
            width: 50,
            url: "http://weather.livedoor.com/img/icon/8.gif",
            title: "曇り",
            height: 31
        }
    },
    {
        dateLabel: "明日",
        telop: "曇のち雨",
        date: "2018-09-13",
        temperature: {
            min: {
                celsius: "23",
                fahrenheit: "73.4"
            },
            max: {
                celsius: "30",
                fahrenheit: "86.0"
            }
        },
        image: {
            width: 50,
            url: "http://weather.livedoor.com/img/icon/13.gif",
            title: "曇のち雨",
            height: 31
        }
    },
    {
        dateLabel: "明後日",
        telop: "晴れのち雪",
        date: "2018-09-14",
        temperature: {
            min: null,
            max: null
        },
        image: {
            width: 50,
            url: "http://weather.livedoor.com/img/icon/7.gif",
            title: "曇り",
            height: 31
        }
    }
    ]
}
