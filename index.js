module.exports = {
  // Parsers
  EmojiParser: require("./parsers/Emoji"),
  SpoilerParser: require("./parsers/Spoiler"),

  // Structures/Classes
  Emoji: require("./structures/Emoji"),
  Spoiler: require("./structures/Spoiler"),

  // Package.Json
  info: require("./package.json")
}