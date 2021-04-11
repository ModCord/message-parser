import { SpoilerParser, Spoiler } from "../index";

test("A Single Spoiler", () => {
  expect(SpoilerParser.parseSpoilers("the guy ||has died|| in the last season")).toStrictEqual([
    new Spoiler({
      raw: "||has died||",
      content: "has died"
    })
  ])
});

test("Several Spoilers", () => {
  expect(SpoilerParser.parseSpoilers("the guy ||has died|| in ||the last season|| because ||he was idiot||")).toStrictEqual([
    new Spoiler({
      raw: "||has died||",
      content: "has died"
    }),
    new Spoiler({
      raw: "||the last season||",
      content: "the last season"
    }),
    new Spoiler({
      raw: "||he was idiot||",
      content: "he was idiot"
    })
  ])
});

test("Maformed Spoilers", () => {
  expect(SpoilerParser.parseSpoilers("|invalid||sort of spoilers|")).toStrictEqual([]);
}); 

test("Non Closed Spoilers", () => {
  expect(SpoilerParser.parseSpoilers("||invalidsort of spoilers")).toStrictEqual([]);
}); 