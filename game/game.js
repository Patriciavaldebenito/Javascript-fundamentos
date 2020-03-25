const btnStart = document.getElementById('btnStart');
const btnLightBlue = document.getElementById('btnLightBlue');
const btnViolet = document.getElementById('btnViolet');
const btnOrange = document.getElementById('btnOrange');
const btnGreen = document.getElementById('btnGreen');




class Game {
    constructor(){
        this.init();
        this.generateSequence();
    }

    init(){
        btnStart.classList.add('hide');
        this.nivel =1;
        this.colors= {
            btnLightBlue,
            btnViolet,
            btnOrange,
            btnGreen
        }
    }

    generateSequence(){
        this.sequence = new Array(10).fill(0).map(n => Math.floor(Math.random()*4))
    }
}


function startGame(){
    console.log(`jugando init !!`);//console.log(``);
    window.game = new Game(); // or console.log(game)
   
 
}

startGame()