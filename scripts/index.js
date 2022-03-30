console.log("Hello World");
const imgCollection = document.getElementsByClassName("game-img");
const startBtn = document.getElementById("start-btn");

const game = new Game(5);

startBtn.addEventListener("click", () => {
  game.startGame(imgCollection);
});
