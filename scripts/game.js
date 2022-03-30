class Game {
  constructor(pairs) {
    this.pairs = pairs;
    this.arrayPositions = [];
    this.turnPlaysCounter = 0;
    this.clickedImage1 = "";
    this.clickedImage2 = "";
  }

  startGame(htmlCollection) {
    const arrayPositions = this.pairPositions();
    this.arrayPositions = arrayPositions;

    // for (let i = 0; i < htmlCollection.length; i++) {
    //   htmlCollection[i].setAttribute(
    //     "src",
    //     `./assets/images/${arrayPositions[i]}.jpg`
    //   );
    // }
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

  flipImg(htmlElement, index) {
    htmlElement.setAttribute(
      "src",
      `./assets/images/${this.arrayPositions[index]}.jpg`
    );
    this.turnPlaysCounter++;

    if (this.turnPlaysCounter === 1) {
      this.clickedImage1 = htmlElement;
    } else if (this.turnPlaysCounter === 2) {
      this.clickedImage2 = htmlElement;
    }
    this.pairCheck();
  }

  pairCheck() {
    if (this.turnPlaysCounter !== 2) {
      return;
    }

    if (
      this.clickedImage1.getAttribute("src") !==
      this.clickedImage2.getAttribute("src")
    ) {
      this.clickedImage1.setAttribute("src", "./assets/images/coverImg.jpg");
      this.clickedImage2.setAttribute("src", "./assets/images/coverImg.jpg");
    } else {
      this.clickedImage1.removeEventListener();
      this.clickedImage2.removeEventListener();
    }
  }
  resetGame(htmlCollection) {
    for (let i = 0; i < htmlCollection.length; i++) {
      htmlCollection[i].setAttribute("src", "./assets/images/coverImg.jpg");
    }
  }
}
