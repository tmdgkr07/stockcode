

// 1. 총운 , 2. 애정운, 3. 재물운, 4.회사,직업운, 5.시험운 


var request = require('request-promise-native').defaults({jar: true});


async function lucky_today(kind, birth, gender){
    return new Promise((resolve, reject) => {
    if(gender == "남")
    gender = 'm'
    else if(gender =="여")
    gender = 'w'
    var lucky_url = 'https://m.search.naver.com/p/csearch/dcontent/external_api/json_todayunse_v2.naver?_callback=window.__jindo2_callback._fortune_my_0&gender=' + gender + '&birth=' + birth +'&solarCal=solar&time='
    try{
     request.get({
        url: lucky_url,
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
            
            var data = data.split("0(")
           // console.log(data[1])
            var data2= data[1].slice(0,-2)
            data2 = data2.replace('result', '"result"')
            data2 = data2.replace('day', '"day"')
            data2 = data2.replace('title', '"title"')
            data2 = data2.replace('date', '"date"')
            data2 = data2.replace('content', '"content"')
            var data3 = data2.split("]")
            var data4 = data3[0] +']}}}'
            console.log(data4)
            const obj_data = JSON.parse(data4)
            console.log(obj_data.result)
            var total = obj_data.result.day.content[0]
            var love = obj_data.result.day.content[1]
            var worth = obj_data.result.day.content[2]
            var work = obj_data.result.day.content[3]
            var test = obj_data.result.day.content[4]

            var total_luck = total.keyword.replace('</b>','<b>','') + '\n' + total.desc
            var love_luck = love.desc
            var worth_luck = worth.desc
            var work_luck = work.desc
            var test_luck = test.desc
            if(kind == 1){
                resolve(total_luck)
            }
            else if(kind == 2){
                resolve(love_luck)
            }
            else if(kind == 3){
                resolve(worth_luck)
            }
            else if(kind == 4){
                resolve(work_luck)
            }
            else if(kind == 5){
                resolve(test_luck)
            }
        }
     })
    }
    catch(e){
        console.log('usd/kr has error: ', e)
        reject(e)
    }
})
    }

    
module.exports = (lucky_today)
