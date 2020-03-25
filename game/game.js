const btnStart = document.getElementById("btnStart");
const btnLightBlue = document.getElementById("btnLightBlue");
const btnViolet = document.getElementById("btnViolet");
const btnOrange = document.getElementById("btnOrange");
const btnGreen = document.getElementById("btnGreen");

class Game {
  constructor() {
    this.init();
    this.generateSequence();
    this.nextNivel();
  }

  init() {
    btnStart.classList.add("hide");
    this.nivel = 1;
    this.colors = {
      btnLightBlue,
      btnViolet,
      btnOrange,
      btnGreen
    };
  }

  generateSequence() {
    this.sequence = new Array(10)
      .fill(0)
      .map(n => Math.floor(Math.random() * 4));
  }

  nextNivel() {
    this.iluminateSequence();
  }

  transformNumberToColor(number) {
    switch (number) {
      case 0:
        return "btnLightBlue";
      case 1:
        return "btnViolet";
      case 2:
        return "btnOrange";
      case 3:
        return "btnGreen";
    }
  }

  iluminateColor(color) {
    this.colors[color].classList.add("light");
    setTimeout(() => this.offColor(color), 350);
  }
  offColor(color) {
    this.colors[color].classList.remove("light");
  }

  iluminateSequence() {
    for (let i = 0; i < this.nivel; i++) {
      const color = this.transformNumberToColor(this.sequence[i]);
      setTimeout(() => this.iluminateColor(color), 1000 * i);
    }
  }
  
}

function startGame() {
  console.log(`jugando init !!`); //console.log(``);
  window.game = new Game(); // or console.log(game)
}

startGame();
