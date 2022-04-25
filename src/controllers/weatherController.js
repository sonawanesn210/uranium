let axios = require("axios")

let getWeather = async function (req, res) {
        try {
            let names = req.query.q
            let appid = req.query.appid
            console.log(`query params are: ${names} ${appid}`) 
            var options = {
                method: "get",
                url: ` http://api.openweathermap.org/data/2.5/weather?q=${names}&appid=${appid}`
            }
            let result = await axios(options)
            console.log(result.data)
            res.status(200).send({ msg: result.data })
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ msg: err.message })
        }
    }



    let getByTemp = async function (req, res) {
        try {
            let cityName = req.query.q;
            let appid = req.query.appid;
            var option = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appid}`
            }
            let result = await axios(option)
            res.status(200).send({ temperature: result.data.main.temp }) //get only temp of city
        }
        catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    let getSortBy = async function (req, res) {
        try {
            let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
            let ArrOfCity = [];
            for (let i = 0; i < cities.length; i++) {
                var option = {
                    method: "get",
                    url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=c054de6b9059a1cb2a6ccd33ea5edd07`
                }
                result = await axios(option)
                ArrOfCity[i] = { city: result.data.name, temp: result.data.main.temp }
            }
            let sortData = ArrOfCity.sort((a, b) => (a.temp - b.temp))
            res.status(200).send({ msg: sortData })
        }
        catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }






    module.exports.getWeather=getWeather
    module.exports.getSortBy=getSortBy
    module.exports.getByTemp=getByTemp