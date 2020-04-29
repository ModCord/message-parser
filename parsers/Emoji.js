const Emoji = require("../structures/Emoji");

class EmojiParser {
  static _parseCustomEmojis (str) {
    const regex = /<:([^<]*):([^<]*)>/g;
    const matches = str.match(regex);
    if (!matches) return [];
    const emojis = [];
    for (const match of matches) {
      const rawData = this._parseEmoji(match);
      emojis.push(new Emoji({
        name: rawData[0],
        id: rawData[1],
        raw: match
      }));
    }
    return emojis;
  }

  static _parseAnimatedCustomEmojis (str) {
    const regex = /<a:([^<]*):([^<]*)>/g;
    const matches = str.match(regex);
    if (!matches) return [];
    const emojis = [];
    for (const match of matches) {
      const rawData = this._parseEmoji(match);
      emojis.push(new Emoji({
        name: rawData[1],
        id: rawData[2],
        raw: match,
        animated: true
      }));
    }
    return emojis;
  }

  static _parseEmoji (str) {
    str = str.replace(/>/g, "");
    str = str.replace(/</g, "");
    str = str.replace(/:/g, " ");
    str = str.trim();
    return str.split(" ");
  }

  static parseEmojis (str) {
    const normalEmojis = this._parseCustomEmojis(str);
    const animatedEmojis = this._parseAnimatedCustomEmojis(str);
    return [...normalEmojis, ...animatedEmojis];
  }
}

module.exports = EmojiParser;