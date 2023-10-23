
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


async function callchatgpt(promt){
    const openai = new OpenAIApi(configuration);
    try{
        let messages = [{role: "user", content: promt}]
        const response = await openai.createChatCompletion({
            model:"gpt-3.5-turbo-0613",
            messages:messages,
            functions:[
                {
                    name: "websearch",
                    description: "인터넷에 검색을 시도합니다.",
                    parameters: {
                        type: "object",
                        properties: {
                           search_txt:{type:"string", description:"검색할 문장"},
                    },
                        required:["search_txt"],
                    },
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
          
           if(function_name == "websearch"){
            const function_args = JSON.parse(response_message.function_call.arguments)
            console.log(function_args.search_txt)
            const response_content = await websearch(function_args.search_txt)
            console.log(response_content)
            messages.push(response_message)
            messages.push([
                {
                    role: "function",
                    name: "websearch",
                    content: response_content,
                }
            ])
            console.log(messages)
            // var second_messages=[
            //     {
            //         role: "function",
            //         name: "websearch",
            //         content: response_content,
            //     }
            // ]

            
           const second_response = await openai.createChatCompletion({
                model:"gpt-3.5-turbo-0613",
                messages:messages
           })  
           console.log(second_response)
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

async function websearch(search_txt){
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

    await request.get(options, async function(error, response, body){
        if(!error && response.statusCode == 200){
            var finish = await JSON.parse(body);
            console.log(finish)
            return finish
        } else{
            console.log("error: "+ response.statusCode)
            return null
        }
    })
}
module.exports = (callchatgpt);
