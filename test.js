const { EmojiParser, SpoilerParser } = require("./index");

console.time("emoji-parser");
console.log(
  EmojiParser.countEmojis(
`<:redTick:663013890376073257> You cannot do that! ☕
<a:loading:393852367751086090> It's loading... ⏱️`
  )
);
console.timeEnd("emoji-parser");

console.time("spoiler-parser");
console.log(SpoilerParser.parseSpoilers("in the movie, that other dude ||is killed|| and she ||married tom||"));
console.timeEnd("spoiler-parser");