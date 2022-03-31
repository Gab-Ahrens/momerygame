class Game {
  constructor(pairs, htmlCollection) {
    this.pairs = pairs;
    this.arrayPositions = [];
    this.turnPlaysCounter = 0;
    this.clickedImage1 = "";
    this.clickedImage2 = "";
    this.htmlImgCollection = htmlCollection;
  }

  startGame() {
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
    console.log(this.turnPlaysCounter);

    if (this.turnPlaysCounter === 1) {
      this.clickedImage1 = htmlElement;
      console.log(this.clickedImage1);
    } else if (this.turnPlaysCounter === 2) {
      this.clickedImage2 = htmlElement;
      console.log(this.clickedImage2);
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
      setTimeout(() => {
        this.clickedImage1.setAttribute("src", "./assets/images/coverImg.jpg");
        this.clickedImage2.setAttribute("src", "./assets/images/coverImg.jpg");
        this.turnPlaysCounter = 0;
      }, 1000);
    } else {
      const imgWithoutEventListner1 = document.createElement("img");
      imgWithoutEventListner1.setAttribute(
        "src",
        this.clickedImage1.getAttribute("src")
      );
      imgWithoutEventListner1.classList.add("game-img");

      const imgWithoutEventListner2 = document.createElement("img");
      imgWithoutEventListner2.setAttribute(
        "src",
        this.clickedImage2.getAttribute("src")
      );

      imgWithoutEventListner2.classList.add("game-img");

      this.clickedImage1.replaceWith(imgWithoutEventListner1);
      this.clickedImage2.replaceWith(imgWithoutEventListner2);
      this.itsOver();
      this.turnPlaysCounter = 0;
    }
  }

  resetGame() {
    for (let i = 0; i < this.htmlImgCollection.length; i++) {
      this.htmlImgCollection[i].setAttribute(
        "src",
        "./assets/images/coverImg.jpg"
      );
    }
  }

  itsOver() {
    for (let i = 0; i < this.htmlImgCollection.length; i++) {
      if (
        this.htmlImgCollection[i].getAttribute("src") ===
        "./assets/images/coverImg.jpg"
      ) {
        return;
      }
    }

    alert("Você ganhou!");
  }
}
