# Discord Message Parser
- Has zero dependencies.
- A message parser for discord using regular expressions and string manipulation.
- If you need help feel free to join our <a href="https://discord.gg/rk7cVyk">discord server</a> to talk and help you with your code.
- If you encounter any of those fell free to open an issue in our <a href="https://github.com/ModCord/message-parser/issues">github repository</a>.

# Download & Update
You can download it from npm:
```cli
npm i discord-message-parser
```
You can update to a newer version to receive updates using npm.
```cli
npm update discord-message-parser
```

# Changelog
**3rd of April** (v1.0.0) - Original publication to node package manager.

# Setting Up
First things first, we include the module into the project.
```js
const MessageParser = require("discord-message-parser");
const { SpoilerParser, EmojiParser } = MessageParser;
```

# Examples
*Examples assume that you have setted up the module as presented in 'Setting Up' section.*
*Following examples assume that your `Discord.Client` is called `client`.*

*Following examples assume that your `client.on("message", message` is called `message`.*

*Following example contains isolated code which you need to integrate in your own command handler.*
- **Counting emojis in a message:**
```js
client.on("mesage", (mesage) => {
  const emojiCount = EmojiParser.countEmojis(message.content);
  /*  Sample response: 
     {
       custom: 1,
       animated: 0,
       unicode: 2,
       total: 3
     }
  */
});
```

- **Parsing emojis in a message:**
```js
client.on("message", (message) => {
  const messageEmojis = EmojiParser.parseEmojis(message.content);
  
  /* Sample response:
  {
      custom: [{ name: "doggo", id: "393852367751086090", raw: "<:doggo:393852367751086090>", animated: false, unicode: false }],
      customAnimated: [{ name: "dogdance", id: "663013890376073257", raw: "<:dogdance:663013890376073257>", animated: true, unicode: false }],
      customEmojis: [{ name: "doggo", id: "393852367751086090", raw: "<:doggo:393852367751086090>", animated: false, unicode: false }, { name: "dogdance", id: "663013890376073257", raw: "<:dogdance:663013890376073257>", animated: true, unicode: false }],
      unicode: [{ name: null, id: null, raw: "⏱️", animated: null, unicode: true }, { name: null, id: null, raw: "☕", animated: null, unicode: true }],
      allEmojis: [{ name: "doggo", id: "393852367751086090", raw: "<:doggo:393852367751086090>", animated: false, unicode: false }, { name: "dogdance", id: "663013890376073257", raw: "<:dogdance:663013890376073257>", animated: true, unicode: false }, { name: null, id: null, raw: "⏱️", animated: null, unicode: true }, { name: null, id: null, raw: "☕", animated: null, unicode: true }]
  }
  */
});
