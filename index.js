const TelegramApi = require("node-telegram-bot-api");
const fetch = require("node-fetch");

const token = "5810005603:AAEzo3bcEPqmI1oEo1GXPOqiKq-zsTWhIII";

const bot = new TelegramApi(token, { polling: true });
bot.on("message", (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  let command = text.split(" ");
  console.log(text);
  switch (command[0]) {
    case "/start":
      bot.sendMessage(
        chatId,
        "Hi! I'm a bot that will help you gather information about a player or about a particular game, as well as give you tips for the best game. To get the list of command type /info"
      );
      break;
    case "/info":
      bot.sendMessage(
        chatId,
        "/summoner - get summoner info, /match {matchid} - get info about match."
      );
      break;
    case "/summoner":
      let playername = text.slice(9);
      console.log(playername);
      FetchSummonerName(playername);
      async function FetchSummonerName(playername) {
        fetch(
          `https://euw1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${playername}?api_key=RGAPI-62c29700-e9e5-49c5-9b9d-342814b2c5a2`
        )
          .then((response) => response.json())
          .then((data) => {
            myData = data;
            matchFinder(myData);
          })
          .catch((error) => console.error(error));
      }
      async function matchFinder(data) {
        console.log(data[`puuid`]);
        let puuid = data[`puuid`];
        let matchList = " ";
        fetch(
          `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=RGAPI-62c29700-e9e5-49c5-9b9d-342814b2c5a2`
        )
          .then((response) => response.json())
          .then((data) => {
            matchList = data;
            console.log(matchList);
            bot.sendMessage(chatId, matchList.toString());
          });
      }
      bot.sendMessage(chatId, playername);
      break;
    default:
      bot.sendMessage(chatId, "Sorry, i dont know this command");
      break;
  }
});
