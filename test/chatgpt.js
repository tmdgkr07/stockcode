
const { url } = require("inspector");
const { Configuration, OpenAIApi }= require("openai");
const configuration = new Configuration({
    organization: "org-5e0D8OxML0lQ1EQIJYbdVcxi",
    apiKey:"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"
});
const request = require("request");
const api_url = "https://openapi.naver.com/v1/search/webkr.json?query=" 
const client_id = 'AwBtsJMBzO_eFeCbH4Gx'
const client_secret = 'VDD46hCTI3'


function websearch(search_txt){
    console.log(search_txt)
    const api_url2 = api_url + encodeURI(search_txt)
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
            console.log(finish.items)
            resolve(finish)
        } else if(error){
            console.log("error: "+ response.statusCode)
            reject(error)
        }
    })
})
}

    function news(search_txt){
        console.log(search_txt)
        const api_url2 = 'https://openapi.naver.com/v1/search/news.json?query=' + encodeURI(search_txt) +'&sort=sim'
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

async function get_current_weather(location, unit="fahrenheit"){
      let weather_info = {
            location: location,
            temperature: "72",
            unit: unit,
            forecast: ["sunny", "windy"]
        }
        console.log(JSON.stringify(weather_info))

return JSON.stringify(weather_info)
}

async function callchatgpt(promt){
    const openai = new OpenAIApi(configuration);
  try{
        let messages = [{role: "user", content: promt}]
        const response = await openai.createChatCompletion({
            model:"gpt-3.5-turbo-0613",
            messages:messages,
            functions:[
                {
                    name: "get_current_weather",
                    description: "Get the current weather in a given location",
                    parameters: {
                        type: "object",
                        properties: {
                            location: {
                                type: "string",
                                description: "The city and state, e.g. San Francisco, CA",
                            },
                            unit: {type: "string", enum: ["celsius", "fahrenheit"]}
                        },
                        required: ["location"]
                    }
                },
                {
                    name: "websearch",
                    description: "인터넷에 검색을 시도합니다.",
                    parameters: {
                        type: "object",
                        properties: {
                           search_txt:{type:"string", description:"검색할 문장"}
                    },
                        required:["search_txt"]
                    }
                },
                {
                    name: "news",
                    description: "뉴스를 검색합니다.",
                    parameters: {
                        type: "object",
                        properties: {
                           search_txt:{type:"string", description:"검색할 문장"}
                    },
                        required:["search_txt"]
                    }
                }
            ],
            function_call:"auto"
        });
        console.log("test")
        console.log(response)
        console.log("test")
        console.log(response.data.choices[0].message)
        const response_message = response.data.choices[0].message

        if(response_message.function_call){
           const function_name = response_message.function_call.name

           if(function_name == "get_current_weather"){

            const function_args = JSON.parse(response_message.function_call.arguments)
            const response_content = await get_current_weather(function_args.location)
            messages.push(response_message)
            let second_messages = 
            {
                role: "function",
                name: function_name,
                content: response_content
            }
            messages.push(second_messages)
            console.log(messages)
            const second_response = await openai.createChatCompletion({
                model:"gpt-3.5-turbo-0613",
                messages:messages
           })  
           console.log(second_response)
           console.log(second_response.data.choices[0].message.content)
            return second_response.data.choices[0].message.content



           }
           if(function_name == "websearch"){
            const function_args = JSON.parse(response_message.function_call.arguments)
            const response_content = await websearch(function_args.search_txt)
            messages.push(response_message)
            let second_messages = 
                {
                    role: "function",
                    name: function_name,
                    content: response_content
                }
            
            messages.push(second_messages)
           const second_response = await openai.createChatCompletion({
                model:"gpt-3.5-turbo-0613",
                messages:messages
           })  
            return second_response.data.choices[0].message.content
    
           }
           if(function_name == "news"){
            const function_args = JSON.parse(response_message.function_call.arguments)
            const response_content = await news(function_args.search_txt)
            messages.push(response_message)
            let second_messages = 
                {
                    role: "function",
                    name: function_name,
                    content: response_content
                }
            
            messages.push(second_messages)
           const second_response = await openai.createChatCompletion({
                model:"gpt-3.5-turbo-0613",
                messages:messages
           })  
            return second_response.data.choices[0].message.content
    
           }
        }
        else{
        return response.data.choices[0].message.content
        }
   }
    catch(error){
        console.log('Error chatgpt api:', error);
        return null;
    }

}


module.exports = (callchatgpt);
