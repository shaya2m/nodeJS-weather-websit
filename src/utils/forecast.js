const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/13e1b201c1efe847b6f63e8fa011b257/' + latitude +',' +longitude

    request({ url, json: true}, (error, {body}) =>{
        if(error) {
            callback('unable to connect to weather service!', undefined)
        }else if (body.error){
            callback('Unable to find location', undefined)

        }else{
            callback(undefined,body.daily.data[0].summary + ' It is currently'+ body.currently.temperature + ' degrees. There is a'+ body.currently.precipProbability + ' chance of rain.')
        }
    })
}

module.exports = forecast 