console.log("Hello World");
const imgCollection = document.getElementsByClassName("game-img");
const controlBtn = document.getElementById("control-btn");

const game = new Game(5);

controlBtn.addEventListener("click", () => {
  if (controlBtn.innerText === "Start") {
    game.startGame(imgCollection);
    controlBtn.innerText = "Reset";
  } else if (controlBtn.innerText === "Reset") {
    game.resetGame(imgCollection);
    controlBtn.innerText = "Start";
  }
});

// COMO COLOCAR UM EVENTLISTENER EM CADA ELEMENTO DE UMA HTML COLLECTION???? > FOR

for (let i = 0; i < imgCollection.length; i++) {
  imgCollection[i].addEventListener("click", () => {
    game.flipImg(imgCollection[i], i);
  });
}
