class Emoji {
  constructor (data) {
    this.name = data.name || null;
    this.id = data.id || null;
    this.raw = data.raw || null;
    this.animated = data.animated || (this.id ? false : null);
    this.unicode = data.unicode || false;
  }
}

module.exports = Emoji;