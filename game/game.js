const btnStart = document.getElementById('btnStart');
const btnLightBlue = document.getElementById('btnLightBlue');
const btnViolet = document.getElementById('btnViolet');
const btnOrange = document.getElementById('btnOrange');
const btnGreen = document.getElementById('btnGreen');




class Game {
    constructor(){
        this.init();
    }

    init(){
        btnStart.classList.add('hide');
    }
}


function startGame(){
    console.log(`jugando init !!`);//console.log(``);
    var game = new Game();
}

startGame()