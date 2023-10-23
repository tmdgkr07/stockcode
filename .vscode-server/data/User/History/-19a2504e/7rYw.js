"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

function createRandNum(min, max){
  var ntemp = Math.floor(Math.random() * (max - min + 1))+min;
  return ntemp
};

var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };

  function delay(ms) {
    return new Promise(resolve => setTimeout(() => {
        resolve();
    }, ms));
  }
  var util = require('util');
  Date.prototype.YMS = function () {
    var yyyy = this.getFullYear().toString();
    var MM = pad(this.getMonth() + 1,2);
    var dd = pad(this.getDate(), 2);
    var hh = pad(this.getHours(), 2);
    var mm = pad(this.getMinutes(), 2)
  
  
    return yyyy +  MM + dd+'_' + hh + mm ;
  };

  function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  }
  var fs = require("fs");
  var logdate = new Date();
  var logdate1 = logdate.YMS();
  var logname = 'logconsole'+ logdate1+'.txt'
  var logFile = fs.createWriteStream('./LOG/'+logname , { flags: 'w' })
  var logStdout = process.stdout;

  console.log = function () {
    logFile.write(util.format.apply(null, arguments) + '\n');
    logStdout.write(util.format.apply(null, arguments) + '\n');
  }
  console.error = console.log;


  function checkValidDate(value) {
    var result = true;
    try {
        var year = value.slice(0,4);
        var month = value.slice(4,6);
        var day = value.slice(6,8)
        var y = parseInt(year, 10),
            m = parseInt(month, 10),
            d = parseInt(day, 10);
        
        var dateRegex = /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/;
        result = dateRegex.test(d+'-'+m+'-'+y);
        let today = new Date();
        let test_day = new Date(y+'-'+m+'-'+d)
        let test_day2 = new Date('1940-01-01')
	var result2 = today >= test_day && test_day >= test_day2
        console.log(result)
        result = result && result2
    } catch (err) {
      result = false;
    } 	
      console.log(result)   
      return result;
  }





  Object.defineProperty(exports, "__esModule", { value: true });

var request = require('request-promise-native').defaults({jar: true});
var request2 = require('request-promise-native').defaults({jar: true});
const core_1 = require("@remote-kakao/core");
const logger_1 = __importDefault(require("./plugins/logger")); //플러그인 추가
const prefix = '>';
const server = new core_1.Server();
const nasdaq_name = __importStar(require("./INFO/nasdaq.json")).nasdaq
const nyse = JSON.parse(fs.readFileSync('./INFO/nyse.json', 'utf-8'));
const amex = JSON.parse(fs.readFileSync('./INFO/amex.json', 'utf-8'));
const stock_index = JSON.parse(fs.readFileSync('./INFO/stock_index.json', 'utf-8'));
const gptlist = JSON.parse(fs.readFileSync('./INFO/gpt.json'))
const holiday = JSON.parse(fs.readFileSync('./INFO/holiday.json'))

const gpt = require('./plugins/chatgpt.js')
const usd_fx = require('./plugins/usd_fx.js')
const lucky_today = require('./plugins/Lucky_Today.js')
// let stock_name23 = Object.keys(stock);
// let stock_value = Object.values(stock);
// let stock_name = stock_name23.concat(stock_value);

const nyse_key = Object.keys(nyse);
const nyse_value = Object.values(nyse);
const nyse_name = nyse_key.concat(nyse_value);

const amex_key = Object.keys(amex);
const amex_value = Object.values(amex);
const amex_name = amex_key.concat(amex_value);

const index_key = Object.keys(stock_index);
const index_value = Object.values(stock_index);
const index_name =  index_key.concat(index_value);
const delay_time = 500

const holiday_key = Object.keys(holiday);
const holiday_value = Object.values(holiday);
const holiday_list = holiday_key.concat(holiday_value);

const { json } = require("express");
const cron = require('node-cron');
const moment = require('moment');
const Lucky_Today = require('./plugins/Lucky_Today.js');

let messageQueue = [];
let nasdaqQueue = [];
let nyseQueue = [];
let amexQueue = [];
let indexQueue = [];

let luckQueue = [];
let fxQueue = [];
let gptQueue =[];

server.usePlugin(logger_1.default); //플러그인 추가
// server.once('message', async (msg)=> {
//   console.log('test123')
//   try{
//   cron.schedule('*/15 * * * * *', async function(){
//     var index_cron = '코스피 '
//     var index_kosdaq = '코스닥 '
//     var index_cron2 = index_cron.split(" ")
//     var index_cron3 = index_kosdaq.split(" ")
//     await msg.reply("[⚔    국  장  시  작    ⚔]",'이승학')
//     await delay(3000)
//     await msg.reply("[⚔    국  장  시  작    ⚔]",'흐엉')
//     await delay(3000)
//     await msg.reply("[⚔    국  장  시  작    ⚔]",'나얌')
//     await delay(3000)
//     indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'나얌'})
//     indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'나얌'})
//     indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'흐엉'})
//     indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'흐엉'})
//     indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'이승학'})
//     indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'이승학'})
// })
//   }
// catch(e){
//   console.log('e1')
//   console.log(e)
// }
// try{
//   cron.schedule('50 0 9 * * 1-5', async function(){
//     console.log('node-cron test');
//     var index_cron = '코스피 '
//     var index_kosdaq = '코스닥 '
//     var index_cron2 = index_cron.split(" ")
//     var index_cron3 = index_kosdaq.split(" ")
//     console.log(msg)
//     // msg.reply("[⚔   국 장 시 작   ⚔]",'계임짱')
//     await msg.reply("[⚔    국  장  시  작    ⚔]",'반토막 까지 1주일 내가 팔면 오르는 이유 분석 연구소')
//     await delay(500)
//     await msg.reply("[⚔    국  장  시  작    ⚔]",'계임짱')
//     await delay(500)
//     await msg.reply("[⚔    국  장  시  작    ⚔]",'나얌')
//     await delay(500)
//     await msg.reply("[⚔    국  장  시  작    ⚔]",'애들아')
//     await delay(500)
//     await msg.reply("[⚔    국  장  시  작    ⚔]",'나얌봇')
//     indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'반토막 까지 1주일 내가 팔면 오르는 이유 분석 연구소'})
//     indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'반토막 까지 1주일 내가 팔면 오르는 이유 분석 연구소'})
//     indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'계임짱'})
//     indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'계임짱'})
//     indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'나얌'})
//     indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'나얌'})
//     indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'애들아'})
//     indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'애들아'})
//     indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'나얌봇'})
//     indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'나얌봇'})
//   });
// }
// catch(e2){
//   console.log('e2')
//   console.log(e2)
// }
// try{
//   cron.schedule('50 30 15 * * 1-5', async function(){
//     console.log('node-cron test2');
//     var index_cron = '코스피 '
//     var index_kosdaq = '코스닥 '
//     var index_cron2 = index_cron.split(" ")
//     var index_cron3 = index_kosdaq.split(" ")
//     console.log(msg)
//     await msg.reply("[⚔    국  장  마  감    ⚔]",'반토막 까지 1주일 내가 팔면 오르는 이유 분석 연구소')
//     await delay(500)
//     await msg.reply("[⚔    국  장  마  감    ⚔]",'계임짱')
//     await delay(500)
//     await msg.reply("[⚔    국  장  마  감    ⚔]",'나얌')
//     await delay(500)
//     await msg.reply("[⚔    국  장  마  감    ⚔]",'나얌봇')
//     indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'반토막 까지 1주일 내가 팔면 오르는 이유 분석 연구소'})
//     indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'반토막 까지 1주일 내가 팔면 오르는 이유 분석 연구소'})
//     indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'계임짱'})
//     indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'계임짱'})
//     indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'나얌'})
//     indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'나얌'})
//     indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'나얌봇'})
//     indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'나얌봇'})
//   });

// }
// catch(e3){
//   console.log('e3')
//   console.log(e3)
// }
// })

server.on('message', async (msg) => {
  try{
const args = msg.content.split(' ');
const cmd = args.shift().slice(prefix.length);
if (cmd === '!test'){
  msg.reply(msg.room)

}
if (cmd === '!test2'){
  console.log(moment().format("YYYY-MM-DD"))
  console.log(holiday_key);
  console.log(holiday_list);
  console.log(holiday_value);
  console.log(holiday["2023-05-01"])
  var test3 = moment("2023-05-03").format("YYYY-MM-DD")
  console.log(test3);
  const isholiday = holiday_key.find(function(data){return data == test3});
  if(test3 != isholiday)
  {console.log("true")
   console.log(!isholiday);
}
  if(test3 == isholiday){
    console.log("false")
  }
}

const today_date = moment().format("YYYY-MM-DD")
const isholiday = holiday_key.find(function(data){return data == today_date});
if(msg.content === './goodmorning' && !isholiday && msg.sender.name ==='오픈채팅봇' && moment().day() != 0 && moment().day() != 6 )
{
  var index_cron = '코스피 '
  var index_kosdaq = '코스닥 '
  var index_cron2 = index_cron.split(" ")
  var index_cron3 = index_kosdaq.split(" ")
  console.log(msg)
 
  // await msg.reply("[⚔    국  장  시  작    ⚔]",'강성주주방')
  // await delay(200)
  // indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'강성주주방'})
  // indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'강성주주방'})
  // await delay(500)
  await msg.reply("[⚔    국  장  시  작    ⚔]",'주식 분석할수록 반토막')
  await delay(200)
  indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'주식 분석할수록 반토막'})
  indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'주식 분석할수록 반토막'})
  await delay(500)
  await msg.reply("[⚔    국  장  시  작    ⚔]",'계임짱')
  await delay(200)
  indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'계임짱'})
  indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'계임짱'})
  await delay(500)
  await msg.reply("[⚔    국  장  시  작    ⚔]",'나얌봇')
  await delay(200)
  indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'나얌봇'})
  indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'나얌봇'})
  await delay(500)
  await msg.reply("[⚔    국  장  시  작    ⚔]",'나얌')
  await delay(200)
  indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'나얌'})
  indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'나얌'})
  await delay(500)
  await msg.reply("[⚔    국  장  시  작    ⚔]",'나는야퉁퉁이')
  await delay(500)
  indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'나는야퉁퉁이'})
  indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'나는야퉁퉁이'})

}
else if(msg.content === './goodmorning' && msg.sender.name ==='오픈채팅봇')
{ 
  if(isholiday){
  await msg.reply("오늘은 "+ holiday[today_date] + " 좋은하루 보내세요",'강성주주방')
  await delay(500)
  await msg.reply("오늘은 "+ holiday[today_date] + " 좋은하루 보내세요",'주식 분석할수록 반토막')
  await delay(500)
  await msg.reply("오늘은 "+ holiday[today_date] + " 좋은하루 보내세요",'나얌')
  await delay(500)
  await msg.reply("오늘은 "+ holiday[today_date] + " 좋은하루 보내세요",'나얌봇')
  await delay(500)
  await msg.reply("오늘은 "+ holiday[today_date] + " 좋은하루 보내세요",'계임짱')
  await delay(500)
  await msg.reply("오늘은 "+ holiday[today_date] + " 좋은하루 보내세요",'나는야퉁퉁이')
  }
}
if(msg.content === './finish' && !isholiday && msg.sender.name ==='오픈채팅봇' && moment().day() != 0 && moment().day() != 6)
{
  console.log(moment().day())
  console.log('node-cron test2');
    var index_cron = '코스피 '
    var index_kosdaq = '코스닥 '
    var index_cron2 = index_cron.split(" ")
    var index_cron3 = index_kosdaq.split(" ")
    console.log(msg)
    await msg.reply("[⚔    국  장  마  감    ⚔]",'주식 분석할수록 반토막')
    await delay(500)
    indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'주식 분석할수록 반토막'})
    indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'주식 분석할수록 반토막'})
    await delay(500)
    await msg.reply("[⚔    국  장  마  감    ⚔]",'계임짱')
    await delay(500)
    indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'계임짱'})
    indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'계임짱'})
    await delay(500)
    await msg.reply("[⚔    국  장  마  감    ⚔]",'나얌봇')
    await delay(500)
    indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'나얌봇'})
    indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'나얌봇'})
    await delay(500)
    await msg.reply("[⚔    국  장  마  감    ⚔]",'나얌')
    await delay(500)
    indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'나얌'})
    indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'나얌'})
    await delay(500)
    await msg.reply("[⚔    국  장  마  감    ⚔]",'나는야퉁퉁이')
    await delay(500)
    indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'나는야퉁퉁이'})
    indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'나는야퉁퉁이'})

    // await msg.reply("[⚔    국  장  마  감    ⚔]",'강성주주방')
    // await delay(500)
    // indexQueue.push({index_channel:msg, index_chat:index_cron2, index_room:'강성주주방'})
    // indexQueue.push({index_channel:msg, index_chat:index_cron3, index_room:'강성주주방'})

}



if (cmd === 'ping') {
    /*
      메신저봇과 카카오톡 서버간의 핑이 아닌,
      Node.js와 메신저봇간의 핑입니다.
    */
    const timestamp = Date.now();
    await msg.reply('Pong!');
    msg.reply(`${Date.now() - timestamp}ms`);
    msg.reply(`${Date.now() - timestamp}ms`,'LSH');
}
if(msg.content.startsWith("!!"))
  {
    var callgpt = msg.content.split("!!")
    gptQueue.push({gpt_channel : msg, gpt_chat : callgpt[1]})
  }

try{
if(msg.content == '환율')
{
  fxQueue.push({fx_channel: msg})
 // msg.reply(await usd_fx());
}

const msg_split = msg.content.split(" ")
if(msg_split[0] == "운세" )
{
  if(msg_split[1].length != 9 || !checkValidDate(msg_split[1].slice(0,-1)) || msg_split[1][8] != "남" && msg_split[1][8] != "여")
  {msg.reply("'운세 생년월일성별' \n형식으로 작성해주세요. \n운세, 연애운, 재물운, 직장운, 시험운\nex) 운세 19980730남 \nex) 재물운 19980730남\n\n1940년 이전은 지원하지 않습니다 ")
  return 
}

  luckQueue.push({luck_channel:msg, luck_chat:msg_split[1], luck_type:1})
}
if(msg_split[0] == "연애운" )
{
  if(msg_split[1].length != 9 || !checkValidDate(msg_split[1].slice(0,-1)) || msg_split[1][8] != "남" && msg_split[1][8] !="여"){
  msg.reply("연애운 19980730남 or 19980730여 형식으로 입력해주세요. ")
  return 
  }
  luckQueue.push({luck_channel:msg, luck_chat:msg_split[1], luck_type:2})
}
if(msg_split[0] == "재물운" )
{
  if(msg_split[1].length != 9 || !checkValidDate(msg_split[1].slice(0,-1)) || msg_split[1][8] != "남" && msg_split[1][8]!="여"){
  msg.reply("재물운 19980730남 or 19980730여 형식으로 입력해주세요. ")
  return 
}
  luckQueue.push({luck_channel:msg, luck_chat:msg_split[1], luck_type:3})
}
if(msg_split[0] == "직장운" )
{
  if(msg_split[1].length != 9 || !checkValidDate(msg_split[1].slice(0,-1)) || msg_split[1][8] != "남" && msg_split[1][8] !="여"){
  msg.reply("직장운 19980730남 or 19980730여 형식으로 입력해주세요. ")
  return 
}
  luckQueue.push({luck_channel:msg, luck_chat:msg_split[1], luck_type:4})
}
if(msg_split[0] == "시험운" )
{
  if(msg_split[1].length != 9 || !checkValidDate(msg_split[1].slice(0,-1)) || msg_split[1][8] != "남" && msg_split[1][8] != "여"){
  msg.reply("시험운 19980730남 or 19980730여 형식으로 입력해주세요. ")
  return d
}
  luckQueue.push({luck_channel:msg, luck_chat:msg_split[1], luck_type:5})
}
}
catch(e)
{console.log("윤세부분: ",e)
}





let stock_name = JSON.parse(fs.readFileSync('./INFO/stock.json', 'utf-8'));
// let stock_name23 = Object.keys(stock);
// let stock_value = Object.values(stock);
// let stock_name = stock_name23.concat(stock_value);

  const stock_split = msg.content.toUpperCase().split(" ");
  const stock_word = stock_name.find(function(data){return data === stock_split[0]});
  const stock_split3 = msg.content.toUpperCase().split(" ");

  if(stock_word){
      messageQueue.push({stock_channel:msg, stock_chat:stock_split})
      console.log(messageQueue)
  }
  if(stock_split3[0]=='q' || stock_split3[0]=='Q' || stock_split3[0]=='ㅂ')
  {
  const nasdaq_word = nasdaq_name.find(function(data){return data === stock_split3[1]});
  if(nasdaq_word) {
    nasdaqQueue.push({nasdaq_channel:msg, nasdaq_chat:stock_split3})
    console.log(nasdaqQueue)
  }

  const nyse_word = nyse_name.find(function(data){return data === stock_split3[1]});
  if(nyse_word){
    nyseQueue.push({nyse_channel:msg, nyse_chat:nyse_word})
  }

  const amex_word = amex_name.find(function(data){return data === stock_split3[1]});
  if(amex_word){
    amexQueue.push({amex_channel:msg, amex_chat:amex_word});
    console.log(amex_word);
  }
}
  const index_word = index_name.find(function(data){return data === stock_split3[0]});
  if(index_word)
  {
    indexQueue.push({index_channel:msg, index_chat:stock_split3});
    console.log(index_word)
    console.log(msg)
  }
}
catch(e){
  console.error(e)
  console.log("아마 중복떄문에 ? ")
  console.log(e)
}
});



async function stock_send(){


  try{
  while(true){

    if(indexQueue.length>0){
      const index_data = indexQueue.shift();
      console.log(index_data.index_chat[0])
      console.log(index_data.index_chat)

      var stock_type = index_data.index_chat[1]



      var index_name3 =  index_data.index_chat[0]
      var index_find =  fs.readFileSync('./INFO/stock_index.json', 'utf-8');
      var indexdata = JSON.parse(index_find);
      var index_code = indexdata[index_name3];
      var index_url = 'http://m.stock.naver.com/api/index/' + index_code + '/basic'

      request.get({
        url: index_url,
        json: true,
        headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
        'Referer': 'http://m.stock.naver.com'}
      }, async (err, res, data) => {
        if(err) {
          console.log('error: ', err)
          index_data.index_channel.reply("에러 발생 지속시 개발자에게 문의하세요")
          await delay(500)
          return 0
        }
        else if (res.statusCode !== 200) {
          console.log('Status:', res.statusCode)
          index_data.index_channel.reply("에러 발생 지속시 개발자에게 문의하세요")
          await delay(500)
          return 0
        }
        else{
          // console.log(data)
          // console.log(data.stockItemTotalInfos)
          var price = data.closePrice
          var price_change = data.compareToPreviousClosePrice
          var price_status = data.compareToPreviousPrice.name
          var changerate = data.fluctuationsRatio
          var stock_link = "https://m.stock.naver.com/domestic/index/" + index_code + "/total"
        }
      
        var sidcode = createRandNum(10000, 99999) ;   
      if(stock_type == 'ㅇㅂ' || stock_type == '일봉'){
        var tier4 = "https://ssl.pstatic.net/imgfinance/chart/mobile/candle/day/"+ index_code + "_end.png?"+sidcode;
    }
      else if(stock_type == '주봉'){
        var tier4 = "https://ssl.pstatic.net/imgfinance/chart/mobile/candle/week/"+ index_code + "_end.png?"+sidcode;
      }
      else if(stock_type == '월봉')
      {
        var tier4 = "https://ssl.pstatic.net/imgfinance/chart/mobile/candle/month/"+ index_code + "_end.png"+sidcode;
      }
      else 
      {
        var tier4 = "https://ssl.pstatic.net/imgfinance/chart/mobile/day/"+ index_code + "_end.png?"+sidcode;
    }

     if(price_status == "RISING")
     { price_status = "🔼";
       var price_plus = "+";} 
     else
     { price_status = "🔽";
       var price_plus = " ";}
       var price_descript = price_status +" " +price_change +"p "+ price_plus + changerate + "%"
       var options=  {
        uri: 'http://lsh.keiminem.com:3000/p',
        method:'POST',
        body:{
           "image":tier4, 
           "title":index_name3,
           "descript":price_descript, 
           "stock_url":stock_link
        },
        json:true
      }
      try{
      await request.post(options, function (err,res,body){
        if(err) {console.log('error:', err)}
        else if(res.statusCode !==200 ){
          console.log('Status:', res.statusCode)
        }
        else{
          console.log(body)
          var stock_image = body[0];
          var stock_image2 = body[1];
          var stock_image3 = body[2];
          var stock_image4 = body[3];
          index_data.index_channel.reply("[⚔ " + index_name3 +"("+ index_code +")"+ " ⚔]\n⭐"+ price + "p " + price_status + price_change +"("+ price_plus + changerate + "%) ⭐\n"+ "lsh.keiminem.com/"+stock_image+stock_image2+stock_image3+stock_image4, index_data.index_room)
        }
      })
    }
    catch(error23)
    {
      index_data.index_channel.reply("[⚔ " + index_name3 +"("+ index_code +")"+ " ⚔]\n⭐"+ price + "p " + price_status + price_change +"("+ price_plus + changerate + "%) ⭐\n"+ "lsh.keiminem.com/", index_data.index_room)
    }
   console.log("index")
      
   });




   await delay(delay_time)
    }
    if(amexQueue.length > 0){
      const amex_data = amexQueue.shift();
      var amex_url = 'http://api.stock.naver.com/stock/' + amex_data.amex_chat.toUpperCase() + '/basic'
      var amex_urlk = 'http://api.stock.naver.com/stock/' + amex_data.amex_chat.toUpperCase() + '.K/basic'
      try{
      await request.get({
        url: amex_url,
        json: true,
        headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
        'Referer': 'http://m.stock.naver.com'}
      }, async (err, res, data) => { 
          if (err){
          console.log('err: ',err);
          amex_data.amex_channel.reply("에러 발생 지속시 개발자에게 문의하세요")
          await delay(500)
          return 0   
         }

         else if(res.statusCode !== 200){
          console.log('res :', res.statusCode);
          amex_data.amex_channel.reply("에러 발생 지속시 개발자에게 문의하세요")
          await delay(500)
          return 0
          
        }
      
        else {
          var stock_code = amex_data.amex_chat.toUpperCase()
          var price = data.closePrice
          var price_change = data.compareToPreviousClosePrice
          var price_status = data.compareToPreviousPrice.name
          var changerate = data.fluctuationsRatio
          var nasdaq_find = fs.readFileSync('./INFO/amex.json', 'utf-8');
          var stock_name2 = JSON.parse(nasdaq_find)
          var stock_name4 = amex_data.amex_chat.toUpperCase()
          console.log(stock_name4)
          var stock_name3 = stock_name2[stock_name4]
          var stock_link = "https://m.stock.naver.com/worldstock/stock/" + stock_code + "/total"
        

        var sidcode = createRandNum(10000, 99999) ;   

        let tier4 = "https://ssl.pstatic.net/imgfinance/chart/mobile/world/item/day/"+ stock_code + "_end.png?"+ sidcode;
        if(price_status == "RISING")
        { price_status = "🔼";
          var price_plus = "+";} 
        else
        { price_status = "🔽";
          var price_plus = " ";}
          var price_descript = "1$ = " +await usd_fx.fx_usdkrw() +"₩ "
          var options=  {
           uri: 'http://lsh.keiminem.com:3000/p',
           method:'POST',
           timeout:600,
           body:{
              "image":tier4, 
              "title":stock_name3,
              "descript":price_descript, 
              "stock_url":stock_link
           },
           json:true
         }
         try{
         await request.post(options, function (err11,res11,body11){
           if(err11) {console.log('error:', err11)}
           else if(res11.statusCode !==200 ){
             console.log('Status:', res11.statusCode)
           }
           else{
             console.log(body11)
             var stock_image = body11[0];
             var stock_image2 = body11[1];
             var stock_image3 = body11[2];
             var stock_image4 = body11[3];
             amex_data.amex_channel.reply("[⚔ " + stock_name3 +"("+ stock_code +")"+ " ⚔]\n⭐ "+ price + "$ " + price_status + price_change +" ( "+ price_plus + changerate + "%) ⭐\n"+ "lsh.keiminem.com/"+stock_image+stock_image2+stock_image3+stock_image4)
           }
         })
        }
        catch(error9){
          console.log(error9)
          amex_data.amex_channel.reply("[⚔ " + stock_name3 +"("+ stock_code +")"+ " ⚔]\n⭐ "+ price + "$ " + price_status + price_change +" ( "+ price_plus + changerate + "%) ⭐\n"+ "lsh.keiminem.com/"+stock_image+stock_image2+stock_image3+stock_image4)
          }
        
      console.log("amex")
        }

        })
      }
      catch(error2){
        console.log("error2: ")
        console.log(error2.body);
      
        request.get({
          url: amex_urlk,
          json: true,
          headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
          'Referer': 'http://m.stock.naver.com'}
        },  async (err2, res2, data2) =>{
          if (err2){
            console.log('err: ',err2);  
            amex_data.amex_channel.reply("에러 발생 지속시 개발자에게 문의하세요")
            await delay(500)
            return 0 
           }
  
           else if(res2.statusCode !== 200){
            console.log('res :', res2.statusCode);
            amex_data.amex_channel.reply("에러 발생 지속시 개발자에게 문의하세요")
            await delay(500)
            return 0
          }
  
           else if(res2.statusCode  == 200){
            var stock_code = amex_data.amex_chat.toUpperCase()+ '.K'
            var price = data2.closePrice
            var price_change = data2.compareToPreviousClosePrice
            var price_status = data2.compareToPreviousPrice.name
            var changerate = data2.fluctuationsRatio
            var nasdaq_find = fs.readFileSync('./INFO/amex.json', 'utf-8');
            var stock_name2 = JSON.parse(nasdaq_find)
            var stock_name4 = amex_data.amex_chat.toUpperCase()
            console.log(stock_name4)
            var stock_name3 = stock_name2[stock_name4]
            var stock_link = "https://m.stock.naver.com/worldstock/stock/" + stock_code + "/total"
          
  
          var sidcode = createRandNum(10000, 99999) ;   
  
          let tier4 = "https://ssl.pstatic.net/imgfinance/chart/mobile/world/item/day/"+ stock_code + "_end.png?"+ sidcode;
          if(price_status == "RISING")
          { price_status = "🔼";
            var price_plus = "+";} 
          else
          { price_status = "🔽";
            var price_plus = " ";}
            var price_descript = "1$ = " + await usd_fx.fx_usdkrw() +"₩ "
            var options=  {
             uri: 'http://lsh.keiminem.com:3000/p',
             method:'POST',
             timeout: 600,
             body:{
                "image":tier4, 
                "title":stock_name3,
                "descript":price_descript, 
                "stock_url":stock_link
             },
             json:true
           }
           try{
          await request.post(options, function (err,res,body){
             if(err) {console.log('error:', err)}
             else if(res.statusCode !==200 ){
               console.log('Status:', res.statusCode)
             }
             else{
               console.log(body)
               var stock_image = body[0];
               var stock_image2 = body[1];
               var stock_image3 = body[2];
               var stock_image4 = body[3];
               amex_data.amex_channel.reply("[⚔ " + stock_name3 +"("+ stock_code +")"+ " ⚔]\n⭐ "+ price + "$ " + price_status + price_change +" ( "+ price_plus + changerate + "%) ⭐\n"+ "lsh.keiminem.com/"+stock_image+stock_image2+stock_image3+stock_image4)
             }
             
           })
           }
           catch(e){
            console.log(e)
            amex_data.amex_channel.reply("[⚔ " + stock_name3 +"("+ stock_code +")"+ " ⚔]\n⭐ "+ price + "$ " + price_status + price_change +" ( "+ price_plus + changerate + "%) ⭐\n")


           }
        console.log("amex.K")
                
        }

        })
      }
      await delay(delay_time)
    }
  
  
    try{
      if(nyseQueue.length > 0){
        const nyse_data = nyseQueue.shift();
        var nyse_url = 'http://api.stock.naver.com/stock/' + nyse_data.nyse_chat.toUpperCase() + '/basic'
        
        request.get({
          url: nyse_url,
          json: true,
          headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
          'Referer': 'http://m.stock.naver.com'}
        }, async (err, res, data) => {
          try{
          if(err) {
            console.log('error: ', err)
            nyse_data.nyse_channel.reply("nyse 에러 발생 지속시 개발자에게 문의하세요")
            await delay(500)

          }
          else if (res.statusCode !== 200) {
            console.log('Status:', res.statusCode)
            console.log("finish")
            data = null
            nyse_data.nyse_channel.reply("nyse에러 발생 지속시 개발자에게 문의하세요")
            await delay(500)

          }
          else{
            // console.log(data)
            // console.log(data.stockItemTotalInfos)
            var price = data.closePrice
            var price_change = data.compareToPreviousClosePrice
            var price_status = data.compareToPreviousPrice.name
            var changerate = data.fluctuationsRatio
            var nasdaq_find = fs.readFileSync('./INFO/nyse.json', 'utf-8');
            var stock_name2 = JSON.parse(nasdaq_find)
            var stock_name4 = nyse_data.nyse_chat.toUpperCase()
            console.log(stock_name4)
            var stock_name3 = stock_name2[stock_name4]
            var stock_code = nyse_data.nyse_chat.toUpperCase()
            var stock_link = "https://m.stock.naver.com/worldstock/stock/" + stock_code + "/total"
          
        
          var sidcode = createRandNum(10000, 99999) ;   
          
       let tier4 = "https://ssl.pstatic.net/imgfinance/chart/mobile/world/item/day/"+ stock_code + "_end.png?"+ sidcode;
       if(price_status == "RISING")
       { price_status = "🔼";
         var price_plus = "+";} 
       else
       { price_status = "🔽";
         var price_plus = " ";}
         var price_descript = "1$ = " + await usd_fx.fx_usdkrw() +"₩ "
         var options=  {
          uri: 'http://lsh.keiminem.com:3000/p',
          method:'POST',
          timeout: 600,
          body:{
             "image":tier4, 
             "title":stock_name3,
             "descript":price_descript, 
             "stock_url":stock_link
          },
          json:true
        }
        try{
          await request.post(options, function (err,res,body){
          if(err) {console.log('error:', err)}
          else if(res.statusCode !==200 ){
            console.log('Status:', res.statusCode)
          }
          else{
            console.log(body)
            var stock_image = body[0];
            var stock_image2 = body[1];
            var stock_image3 = body[2];
            var stock_image4 = body[3];
            nyse_data.nyse_channel.reply("[⚔ " + stock_name3 +"("+ stock_code +")"+ " ⚔]\n⭐ "+ price + "$ " + price_status + price_change +" ( "+ price_plus + changerate + "%) ⭐\n"+ "lsh.keiminem.com/"+stock_image+stock_image2+stock_image3+stock_image4)
          }
        })
      }
      catch(e){
        console.log(e)
        nyse_data.nyse_channel.reply("[⚔ " + stock_name3 +"("+ stock_code +")"+ " ⚔]\n⭐ "+ price + "$ " + price_status + price_change +" ( "+ price_plus + changerate + "%) ⭐\n")
      }
     console.log("nyse")
     
        
      }}
      catch(err){
        console.log(err)
        console.log("test2")
      }
    
    }); 

     await delay(delay_time)
      }
    }
    catch(err){
      console.log(err)
      console.log("test2")
    }
    



    if (nasdaqQueue.length > 0){
      const nasdaq_data = nasdaqQueue.shift();
      var stock_type = nasdaq_data.nasdaq_chat[2]


      var nasdaq_url = 'https://api.stock.naver.com/stock/' + nasdaq_data.nasdaq_chat[1].toUpperCase() + '.O/basic'
      
      request.get({
        url: nasdaq_url,
        json: true,
        headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
        'Referer': 'http://m.stock.naver.com'}
      }, async (err, res, data) => {
        if(err) {
          console.log('error: ', err)
          nasdaq_data.nasdaq_channel.reply("nasdaq 에러 발생 지속시 개발자에게 문의하세요")
          await delay(500)
 
        }
        else if (res.statusCode !== 200) {
          console.log('Status:', res.statusCode)
          nasdaq_data.nasdaq_channel.reply("nasdaq 에러 발생 지속시 개발자에게 문의하세요")
          await delay(500)

        }
        else{
          // console.log(data)
          // console.log(data.stockItemTotalInfos)
          var price = data.closePrice
          var price_change = data.compareToPreviousClosePrice
          var price_status = data.compareToPreviousPrice.name
          var changerate = data.fluctuationsRatio
          var nasdaq_find = fs.readFileSync('./INFO/nasdaq_name.json', 'utf-8');
          var stock_name2 = JSON.parse(nasdaq_find)
          var stock_name4 = nasdaq_data.nasdaq_chat[1].toUpperCase()
          console.log(stock_name4)
          var stock_name3 = stock_name2[stock_name4]
          var stock_code = nasdaq_data.nasdaq_chat[1].toUpperCase()
          var stock_link = "https://m.stock.naver.com/worldstock/stock/" + stock_code + ".O/total"
        
      
        var sidcode = createRandNum(10000, 99999) ;   
        if(stock_type == 'ㅇㅂ' || stock_type == '일봉'){
          var tier4 = "https://ssl.pstatic.net/imgfinance/chart/mobile/world/item/candle/day/"+ stock_code + ".O_end.png?"+ sidcode;
      }
        else if(stock_type == '주봉'){
          var tier4 = "https://ssl.pstatic.net/imgfinance/chart/mobile/world/item/candle/week/"+ stock_code + ".O_end.png?"+ sidcode;
        }
        else if(stock_type == '월봉')
        {
          var tier4 = "https://ssl.pstatic.net/imgfinance/chart/mobile/world/item/candle/month/"+ stock_code + ".O_end.png?"+ sidcode;
        }
        else 
        {
          var tier4 = "https://ssl.pstatic.net/imgfinance/chart/mobile/world/item/day/"+ stock_code + ".O_end.png?"+ sidcode;
      }
        
     if(price_status == "RISING")
     { price_status = "🔼";
       var price_plus = "+";} 
     else
     { price_status = "🔽";
       var price_plus = " ";}

       var price_descript = "1$ = " + await usd_fx.fx_usdkrw() +"₩ "
       var options=  {
        uri: 'http://lsh.keiminem.com:3000/p',
        method:'POST',
        timeout: 600,
        body:{
           "image":tier4, 
           "title":stock_name3,
           "descript":price_descript, 
           "stock_url":stock_link
        },
        json:true
      }
      try{
     await request.post(options, function (err,res,body){
        if(err) {console.log('error:', err)}
        else if(res.statusCode !==200 ){
          console.log('Status:', res.statusCode)
        }
        else{
          console.log(body)
          var stock_image = body[0];
          var stock_image2 = body[1];
          var stock_image3 = body[2];
          var stock_image4 = body[3];
          nasdaq_data.nasdaq_channel.reply("[⚔ " + stock_name3 +"("+ stock_code +")"+ " ⚔]\n⭐ "+ price + "$ " + price_status + price_change +" ( "+ price_plus + changerate + "%) ⭐\n"+ "lsh.keiminem.com/"+stock_image+stock_image2+stock_image3+stock_image4)
        }
      })
    }
    catch(e){
      nasdaq_data.nasdaq_channel.reply("[⚔ " + stock_name3 +"("+ stock_code +")"+ " ⚔]\n⭐ "+ price + "$ " + price_status + price_change +" ( "+ price_plus + changerate + "%) ⭐\n"+ "lsh.keiminem.com/");
    }
   console.log("nasdaq")
      
    }}); 

   await delay(delay_time)
    }
    if (messageQueue.length > 0){
        const stock_data = messageQueue.shift();
        var stock_type = stock_data.stock_chat[1]
  
        if(isNaN(stock_data.stock_chat[0])){

          console.log(stock_data.stock_chat)
          var stock_name3 =  stock_data.stock_chat[0]
          var stock_find =  fs.readFileSync('./INFO/stock.json', 'utf-8');
          var stockdata = JSON.parse(stock_find);
          var stock_code = stockdata[stock_name3];

        }
        else{
          stock_code = stock_data.stock_chat[0]
          var stock_find =  fs.readFileSync('./INFO/stock.json', 'utf-8');
          var stockdata = JSON.parse(stock_find);
          let stock_name23 = Object.keys(stock_find);
          stock_name3 = stock_name23.find(stock_name3 => stockdata[stock_name3] === stock_code);
        }

        if(stock_type == 'ㅅㅇ' || stock_type =='시외'){

          var stock_url2 = "https://finance.daum.net/api/quote/A"+stock_code+"/after_hours_spac" ; 
          
          request.get({
            url: stock_url2,
            json: true,
            headers: {'User-Agent': 'request', 'Referer': 'http://finance.daum.net'}
          }, (err, res, data) => {
            if(err) {
              console.log('Error:', err);
            }
            else if (res.statusCode !== 200) {
              console.log('Status:', res.statusCode);
            }
            else {
              var after_price = data.tradePrice
              var after_status = data.change
              var after_change = data.changePrice
              var after_changerate = (data.changeRate * 100).toFixed(2) 
              var stock_link = "https://finance.naver.com/item/main.nhn?code=" + stock_code
            //  console.log(data);
              }



              var sidcode = createRandNum(10000, 99999) ;
            
              if(after_status == "RISE")
              { after_status = "🔼";
                var after_plus = '+';  }
                else if(after_status == "UPPER_LIMIT")
                {
                 after_status = "🔼"
                 var after_plus = "⭐"  
                }
              else
              { after_status = "🔽";
                var after_plus = '-';}
            console.log("krx")
            stock_data.stock_channel.reply("[⚔  " + stock_name3 +" ("+ stock_code +")"+ " 시외 ⚔]\n⭐ "+ after_price + "원 " + after_status + after_change +" ( "+after_plus+ after_changerate + "%) ⭐")
            
            }); 
              
          }
      else{
        var stock_url = "https://finance.daum.net/api/quotes/A"+stock_code ; 
    request.get({
      url: stock_url,
      json: true,
      headers: {'User-Agent': 'request', 'Referer': 'http://finance.daum.net'}
    }, async (err, res, data) => {
      if(err) {
        console.log('Error:', err)
        stock_data.stock_channel.reply("에러 발생 지속시 개발자에게 문의하세요")
        await delay(500)
        return 0
      }
      else if (res.statusCode !== 200) {
        console.log('Status:', res.statusCode)
        stock_data.stock_channel.reply("에러 발생 지속시 개발자에게 문의하세요")
        await delay(500)
        return 0
      }
      else { 
        var price = data.tradePrice
        var price_change = data.changePrice
        var price_status = data.change
        var trade_total2 = data.accTradePrice//(data.accTradePrice % 1000000).toFixed().toLocaleString('ko-kr');
        var trade_total = trade_total2.toLocaleString('ko-kr').slice(0, -8)
        var trade_stock = data.accTradeVolume.toLocaleString('ko-kr');
        var changerate = (data.changeRate * 100).toFixed(2)
        var stock_link = 'https://finance.naver.com/item/main.nhn?code=' + stock_code
     }

     var sidcode = createRandNum(10000, 99999) ;
     if(price_status == "RISE")
     { price_status = "🔼";
       var price_plus = "+";}
     else if(price_status == "UPPER_LIMIT")
     {
      price_status = "🔼"
      var price_plus = "⭐"
     } 
     else
     { price_status = "🔽";
       var price_plus = "-";}
      
   console.log("1")
    if(stock_type == 'ㅇㅂ' || stock_type == '일봉'){
      var tier4 = "https://ssl.pstatic.net/imgfinance/chart/mobile/candle/day/"+ stock_code + "_end.png?sidcode="+sidcode;
  }
    else if(stock_type == '주봉'){
      var tier4 = "https://ssl.pstatic.net/imgfinance/chart/mobile/candle/week/"+ stock_code + "_end.png?sidcode="+sidcode;
    }
    else if(stock_type == '월봉')
    {
      var tier4 = "https://ssl.pstatic.net/imgfinance/chart/mobile/candle/month/"+ stock_code + "_end.png?sidcode="+sidcode;
    }
    else if(stock_type == null)
    {
      var tier4 = "https://ssl.pstatic.net/imgfinance/chart/mobile/day/"+ stock_code + "_end.png?sidcode="+sidcode;
  }
    else{
      return 0
  }
  var price_descript = price_status +" " +price_change +" ￦  "+ price_plus + changerate + "%"
  var options=  {
    uri: 'http://lsh.keiminem.com:3000/p',
    method:'POST',
    timeout: 600,
    body:{
       "image":tier4, 
       "title":stock_name3,
       "descript":price_descript, 
       "stock_url":stock_link
    },
    json:true
  }
  try{
  await request.post(options, async function (err,res,body){
    
    if(err) {
      console.log('error:123', err)
      stock_data.stock_channel.reply("2에러 발생 지속시 개발자에게 문의하세요")
      await delay(500)
        }
    else if(res.statusCode !==200 ){
      console.log('Status:', res.statusCode)
      stock_data.stock_channel.reply("1에러 발생 지속시 개발자에게 문의하세요")
      await delay(500)
    }
    else{
      console.log(body)
      var stock_image = body[0];
      var stock_image2 = body[1];
      var stock_image3 = body[2];
      var stock_image4 = body[3];
      stock_data.stock_channel.reply("[⚔ " + stock_name3 +"("+ stock_code +")"+ " ⚔]\n⭐ "+ price + "원 " + price_status + price_change +" ("+ price_plus + changerate + "%) ⭐\n"+ "⭐ "+ trade_stock +"주 / "+ trade_total + " 백만⭐ \n lsh.keiminem.com/"+stock_image+stock_image2+stock_image3+stock_image4)
    }
  
  }) 
}
catch(e)
{
  stock_data.stock_channel.reply("[⚔ " + stock_name3 +"("+ stock_code +")"+ " ⚔]\n⭐ "+ price + "원 " + price_status + price_change +" ( "+ price_plus + changerate + "%) ⭐\n")

} 
   }); 

    
  }
  await delay(delay_time)
    }
  await delay(100)
  }
}
catch(error)
{
  console.log("모지")
  console.log(error)
}
}

async function fxsearch(){
  try{
  while(1){
  if(fxQueue.length>0){
    const fx_data = fxQueue.shift();
    const fx_text = await usd_fx.fx_allkrw()
    console.log(fx_text)
    await fx_data.fx_channel.reply(fx_text)
    console.log("hello world")
  }
  await delay(delay_time)
}
} catch(e){
  console.log(e);
  console.log("fx 부분")
}
}
async function func_luck(){
  try{
    while(1){
      if(luckQueue.length>0){
        const luck_data = luckQueue.shift();
        var birth = luck_data.luck_chat.slice(0, -1)
        var gender = luck_data.luck_chat.slice(-1)
        var type = luck_data.luck_type
        const luck_text = await lucky_today(type, birth, gender)
        console.log(luck_text)
        await luck_data.luck_channel.reply(luck_text)
      }
      await delay(delay_time)
    }
  } catch(e){
    console.log(e);
    console.log("운세 부분")
  }
}
// async function gptsearch(){
//   try{
//   while(1){
//   if(gptQueue.length>0){
//     const gpt_data = gptQueue.shift();
//     const gpt_text = await gpt(gpt_data.gpt_chat)
//     await gpt_data.gpt_channel.reply(gpt_text)
//     console.log("hello world")
//   }
//   await delay(delay_time)
// }
// } catch(e){
//   console.log(e);
//   console.log("gpt 부분")
// }
// }
server.start(3000);
stock_send().then();
fxsearch().then();
func_luck().then();
//gptsearch().then();


