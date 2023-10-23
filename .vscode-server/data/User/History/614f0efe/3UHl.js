var request = require('request-promise-native').defaults({jar: true});

const usd_url = 'https://m.stock.naver.com/front-api/v1/marketIndex/productDetail?category=exchange&reutersCode=FX_USDKRW'
const fx_url ='https://m.stock.naver.com/front-api/v1/marketIndex/exchange/new'


async function fx_allkrw(){
    try{
     request.get({
        url: fx_url,
        json: true,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
            'Referer': 'http://m.stock.naver.com'
        }
     }, async (err, res, data) =>{
        if(err){
            console.log('usd_error: ',err)
        }
        else if (res.statusCode !== 200) {
            console.log('Status:', res.statusCode)
        }
        else {
            var usd = data.result[14]
            var jpy = data.result[38]
            var chn = data.result[39]

            var usd_name = usd.name + " 환율: " + usd.closePrice + "$"
            var jpy_name = jpy.name + " 환율: " + jpy.closePrice + "￥"
            var chn_name = chn.name + " 환율: " + chn.closePrice + "￥"

            var all_fx = usd_name+ '\n' + jpy_name + '\n' + chn_name


            console.log(all_fx)
            return all_fx
        }
     })
    }
    catch(e){
        console.log('usd/kr has error: ', e)
    }
    }

async function fx_usdkrw(){
try{
 request.get({
    url: usd_url,
    json: true,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
        'Referer': 'http://m.stock.naver.com'
    }
 }, async (err, res, data) =>{
    if(err){
        console.log('usd_error: ',err)
    }
    else if (res.statusCode !== 200) {
        console.log('Status:', res.statusCode)
    }
    else {
        var usd_kr = data.result.closePrice.slice(0,-1)
        console.log(usd_kr)
        return usd_kr
    }
 })
}
catch(e){
    console.log('usd/kr has error: ', e)
}
}
module.exports = {fx_allkrw, fx_usdkrw}
