export interface SpoilerInterface {
  raw: string;
  content: string;
}

export class Spoiler implements SpoilerInterface {
  raw: string;
  content: string;

  constructor (data: SpoilerInterface) {
    this.raw = data.raw;
    this.content = data.content;
  }
}