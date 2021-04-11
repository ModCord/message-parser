import { EmojiParser as EmojiParserClass } from "./parsers/Emoji";
import { SpoilerParser as SpoilerParserClass } from "./parsers/Spoiler";
import { Emoji as EmojiStructure } from "./structures/Emoji";
import { Spoiler as SpoilerStructure } from "./structures/Spoiler";

declare module "discord-message-parser" {
  export const EmojiParser = EmojiParserClass;
  export const SpoilerParser = SpoilerParserClass;
  export const Emoji = EmojiStructure;
  export const Spoiler = SpoilerStructure;
}