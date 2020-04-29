class Emoji {
  constructor (data) {
    this.name = data.name || null;
    this.id = data.id || null;
    this.raw = data.raw || null;
    this.animated = data.animated || false;
  }
}

module.exports = Emoji;