const Spoiler = require("../structures/Spoiler");

class SpoilerParser {
  static parseSpoilers (str) {
    const regex = /\|\|([^<|]*)\|\|/g
    const matches = str.match(regex);
    if (!matches) return [];
    const spoilers = [];
    for (const match of matches) {
      const content = this._parseSpoilerContent(match);
      spoilers.push(new Spoiler({
        raw: match,
        content: content
      }));
    }

    return spoilers;
  }

  static _parseSpoilerContent (str) {
    return str.replace(/\|/g, "");
  }
}

module.exports = SpoilerParser;