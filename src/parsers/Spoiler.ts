import { Spoiler } from "../structures/Spoiler";

export class SpoilerParser {
  static parseSpoilers(str: string): Spoiler[] {
    const regex: RegExp = /\|\|([^<|]*)\|\|/g;
    const matches: RegExpMatchArray | null = str.match(regex);
    if (!matches) return [];
    const spoilers: Spoiler[] = [];
    for (const match of matches) {
      const content: string = this._parseSpoilerContent(match);
      spoilers.push(
        new Spoiler({
          raw: match,
          content,
        }),
      );
    }

    return spoilers;
  }

  static _parseSpoilerContent(str: string): string {
    return str.replace(/\|/g, "");
  }
}
