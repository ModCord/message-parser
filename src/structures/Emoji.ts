export interface EmojiInterface {
  name?: string;
  id?: string;
  raw: string;
  animated?: boolean | null;
  unicode: boolean;
}

export class Emoji implements EmojiInterface {
  name?: string;
  id?: string;
  raw: string;
  animated?: boolean | null;
  unicode: boolean;

  constructor (data: EmojiInterface) {
    this.name = data.name;
    this.id = data.id;
    this.raw = data.raw;
    this.animated = data.animated || (this.id ? false : null);
    this.unicode = data.unicode || false;
  }
}