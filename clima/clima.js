const axios = require('axios');

const getClima = async(lat, lng) => {
    //axios
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&APPID=be76ebbaab1777e7e248d33edabe5fed`);
    if (resp.cod === 400) {
        throw new Error(`No se encontraron datos para la lat=${ lat } y lng=${ lng }`);
    }


    return resp.data.main.temp;
}


module.exports = {
    getClima
}