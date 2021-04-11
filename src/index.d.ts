import EmojiParser from "./parsers/Emoji";
import SpoilerParser from "./parsers/Spoiler";

module "message-parser" {
  export const EmojiParser;
  export const SpoilerParser;
}