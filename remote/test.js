const client_id = 'AwBtsJMBzO_eFeCbH4Gx'
const client_secret = 'VDD46hCTI3'
const request = require("request");


function news(search_txt){
    console.log(search_txt)
    const api_url2 = 'https://openapi.naver.com/v1/search/news.json?query=' + encodeURI(search_txt)
    const options = {
        url: api_url2,
        headers:{
            'X-Naver-Client-Id': client_id,
            'X-Naver-Client-Secret': client_secret,
        }
    }
    console.log(api_url2)
return new Promise( function(resolve, reject){
request.get(options, async function(error, response, body){
        if(!error && response.statusCode == 200){
            const finish = body;
            console.log(finish)
            resolve(finish)
        } else if(error){
            console.log("error: "+ response.statusCode)
            reject(error)
        }
    })
})
}
news("hmm")