console.log("ok leyendo")

// para hacer la herencia se hace una funciont propia
function HeredaDe(prototypeChildren, prototypeParents){
   // decirle al prototype hijo quien es su prototipo padre
   var fn = function () {} // funcion anonima = noop
   fn.prototype = prototypeParents.prototype;// se le asigna su prototipo = que seria el prototipo padre
  
   prototypeChildren.prototype = new fn;

   //funcion constructora
  prototypeChildren.prototype.constructor = prototypeChildren
}

function People(name, lastName,height){
    this.name = name
    this.lastName = lastName
    this.height=height;
    // return this // no es necesario escribirlo es implicito en js
}


People.prototype.greeting = function () {
    console.log("hi, my name is :"+ this.name + ' '+ this.lastName)
}

People.prototype.IamHigh= function (){
return this.height >1.75
}

function Developer(name, lastName){
  this.name=name
  this.lastName=lastName
}

HeredaDe(Developer. People)

Developer.prototype.greeting= function(){
    console.log(`Hola, me llamo ${this.name} ${this.lastName} y soy desarrollador`);
}


