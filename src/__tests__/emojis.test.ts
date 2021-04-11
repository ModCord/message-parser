import { EmojiParser, Emoji } from "../index";

test("Custom Emoji", () => {
  expect(EmojiParser._parseCustomEmojis("today I'm very sad <:pensivecowboybread:706913664443088966>")).toStrictEqual([new Emoji({
    name: "pensivecowboybread",
    id: "706913664443088966",
    raw: "<:pensivecowboybread:706913664443088966>",
    animated: false,
    unicode: false
  })])
});

test("Malformed Format Custom Emoji (1)", () => {
  expect(EmojiParser._parseCustomEmojis("today I'm very sad <pensivecowboybread:706913664443088966>")).toStrictEqual([]);
});

test("Malformed Format Custom Emoji (2)", () => {
  expect(EmojiParser._parseCustomEmojis("today I'm very sad <:d:>")).toStrictEqual([]);
});

test("Malformed Format Custom Emoji (3)", () => {
  expect(EmojiParser._parseCustomEmojis("today I'm very sad <::706913664443088966>")).toStrictEqual([]);
});


test("Multiple Custom Emojis", () => {
  expect(EmojiParser._parseCustomEmojis("<:mmbravery:531595916357140511> hello! I just accepted the invitation to the github organization <:ramenCat:586683796087242775> <:github:827900539865268285>")).toStrictEqual(
  [new Emoji({
    name: "mmbravery",
    id: "531595916357140511",
    raw: "<:mmbravery:531595916357140511>",
    animated: false,
    unicode: false
  }),
  new Emoji({
    name: "ramenCat",
    id: "586683796087242775",
    raw: "<:ramenCat:586683796087242775>",
    animated: false,
    unicode: false
  }),
  new Emoji({
    name: "github",
    id: "827900539865268285",
    raw: "<:github:827900539865268285>",
    animated: false,
    unicode: false
    })])
});

test("Animated Custom Emoji", () => {
  expect(EmojiParser._parseAnimatedCustomEmojis("im just sending an emoji<a:pepejedi:603888009850650644>at the middle of the string without spaces")).toStrictEqual(
  [new Emoji({
    name: "pepejedi",
    id: "603888009850650644",
    raw: "<a:pepejedi:603888009850650644>",
    animated: true,
    unicode: false
  })])
});

test("Malformed Format Animated Custom Emoji (1)", () => {
  expect(EmojiParser._parseCustomEmojis("today I'm very sad <a:v:>")).toStrictEqual([]);
});

test("Multiple Animated Custom Emoji", () => {
  expect(EmojiParser._parseAnimatedCustomEmojis("hey guys <a:cooldoge:489818863341535247> <a:mmweeFaster:532747425606008843>")).toStrictEqual(
  [new Emoji({
    name: "cooldoge",
    id: "489818863341535247",
    raw: "<a:cooldoge:489818863341535247>",
    animated: true,
    unicode: false
  }),
  new Emoji({
    name: "mmweeFaster",
    id: "532747425606008843",
    raw: "<a:mmweeFaster:532747425606008843>",
    animated: true,
    unicode: false
  })])
});

// Always fails the unicode emoji strict checking test?

// test("Single Unicode Emoji", () => {
//   expect(EmojiParser._parseUnicodeEmojis("welcome 👋!!")).toBe(
//   [new Emoji({
//     name: undefined,
//     id: undefined,
//     raw: "👋",
//     animated: false,
//     unicode: true
//   })])
// });

test("Counting Emojis", () => {
  expect(EmojiParser.countEmojis(`hello my favourite animated emoji are <:ramenCat:586683796087242775> and<:mmbravery:531595916357140511> because they're extremely cute - my favoruite custom non animated emoji is a bread!!! <:pensivecowboybread:706913664443088966> sad breah - then i also like 🍋 🎉`)).toStrictEqual({
    custom: 3,
    animated: 0,
    unicode: 2,
    total: 5
  });
});