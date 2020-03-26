const btnStart = document.getElementById("btnStart");
const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const FINISH_NIVEL = 10;
swal('holii');
class Game {
  constructor() {
    console.log(this);
    this.init = this.init.bind(this);
    this.init();
    this.createSequence();
    setTimeout(this.nextLevel,500)
  }

  init() {
    this.nextLevel=this.nextLevel.bind(this);
    this.chooseToColor=this.chooseToColor.bind(this);
    this.toggleBtnStart()

    this.nivel = 1;
    console.log(`nivel = ${this.nivel}`);
    this.colors = { celeste, violeta, naranja, verde };
    
  }

  toggleBtnStart(){
    if(btnStart.classList.add("hide")){
      btnEmpezar.classList.remove('hide')
    }else{
      btnStart.classList.add("hide")
    }
  }

  createSequence() {
    this.sequence = new Array(FINISH_NIVEL)
      .fill(0)
      .map(n => Math.floor(Math.random() * 4));
    console.log(`paso 1 :sequence ::: ${this.sequence}`);
  
  }

  nextLevel() {
    this.subnivel = 0;
    this.iluminateSequence();
    this.addEventClick();
  }

  transformNumToColor(number) {
    switch (number) {
      case 0:
        return "celeste";
      case 1:
        return "violeta";
      case 2:
        return "naranja";
      case 3:
        return "verde";
    }
  }

  transformColorToNum(color) {
    switch (color) {
      case "celeste":
        return 0;
      case "violeta":
        return 1;
      case "naranja":
        return 2;
      case "verde":
        return 3;
    }
  }

  iluminateSequence() {
    //recorre el array de la secuencia hasta el nivel que se encuentra el usuario
    for (let i = 0; i < this.nivel; i++) {
     
      const color = this.transformNumToColor(this.sequence[i]);
     
      setTimeout(() => this.iluminateColor(color), 1000 * i);
 
    }
  }

  iluminateColor(color) {
    this.colors[color].classList.add("light");
    setTimeout(() => this.offColor(color), 400);
  }

  offColor(color) {
    this.colors[color].classList.remove("light");
  }

  addEventClick() {
    this.colors.celeste.addEventListener("click", this.chooseToColor);
    this.colors.violeta.addEventListener("click", this.chooseToColor);
    this.colors.naranja.addEventListener("click", this.chooseToColor);
    this.colors.verde.addEventListener("click", this.chooseToColor);
  }

  remoteEventClick() {
    this.colors.celeste.removeEventListener("click", this.chooseToColor);
    this.colors.violeta.removeEventListener("click", this.chooseToColor);
    this.colors.naranja.removeEventListener("click", this.chooseToColor);
    this.colors.verde.removeEventListener("click", this.chooseToColor);
  }

  chooseToColor(ev) {
    console.log("***********  DETECTANDO EL ****** evento click   ******");
    console.log(ev);
    const nameColor = ev.target.dataset.color; // tansform de color a number
    console.log(nameColor);
    const numColor = this.transformColorToNum(nameColor);
    console.log("numero color :::  " + numColor);
    this.iluminateColor(nameColor);

    if (numColor === this.sequence[this.subnivel]) {
      this.subnivel++;
      if (this.subnivel === this.nivel) {
        this.nivel++;

        this.remoteEventClick();
        if (this.nivel === FINISH_NIVEL + 1) {
          //console.log(`GANASTE`)
        } else {
          setTimeout(this.nextLevel, 2000);
        }
      } else {
      }
    } else {
      //console.log(`PERDISTE`)
    }
  }
}

function startGame() {
  console.log("init");
  window.game = new Game();
  console.log(this);
  console.log(window.game);
}
