console.log("Hello World");
const imgCollection = document.getElementsByClassName("game-img");
const controlBtn = document.getElementById("control-btn");

const game = new Game(5, imgCollection);

controlBtn.addEventListener("click", () => {
  if (controlBtn.innerText === "Start") {
    game.startGame();
    controlBtn.innerText = "Reset";
    // Fazer um toggle e ajustar a classe do botão, pegando aquela classe do bootstrap
    controlBtn.classList.toggle("btn-danger");
    controlBtn.classList.toggle("btn-success");

    for (let i = 0; i < imgCollection.length; i++) {
      imgCollection[i].addEventListener("click", () => {
        game.flipImg(imgCollection[i], i);
      });
    }
  } else if (controlBtn.innerText === "Reset") {
    game.resetGame();
    controlBtn.innerText = "Start";
    controlBtn.classList.toggle("btn-danger");
    controlBtn.classList.toggle("btn-success");

    for (let i = 0; i < imgCollection.length; i++) {
      const imgWithoutEventListner = document.createElement("img");
      imgWithoutEventListner.setAttribute(
        "src",
        "./assets/images/coverImg.jpg"
      );
      imgWithoutEventListner.classList.add("game-img");

      imgCollection[i].replaceWith(imgWithoutEventListner);
    }
  }
});
