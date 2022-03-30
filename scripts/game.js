class Game {
  constructor(pairs) {
    this.pairs = pairs;
  }

  startGame(htmlCollection) {
    const arrayPositions = this.pairPositions();

    for (let i = 0; i < htmlCollection.length; i++) {
      htmlCollection[i].setAttribute(
        "src",
        `./assets/images/${arrayPositions[i]}.jpg`
      );
    }
  }

  pairPositions() {
    const positions = [];
    for (let i = 0; i < this.pairs; i++) {
      positions.push(`meme${i}`);
      positions.push(`meme${i}`);
    }

    // FALTA EMBARALHAR
    return positions;
  }

  pairCheck() {}
}
