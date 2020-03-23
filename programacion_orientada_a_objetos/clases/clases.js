class People {
  constructor(name, lastName, height) {
    this.name = name;
    this.lastName = lastName;
    this.height = height;
  }
  greeting(fn) {
      if(fn){
          fn(this.name, this.lastName, )
      }
  

  }
  isHigh() {
    return this.height > 30;
  }
}

class Developer extends People {
    constructor(name, lastName, height){
        super(name, lastName, height)

    }
    greeting(fn){
        console.log(`Hola, me llamo ${this.name} ${this.lastName} y soy Desarrollador`);
        if(fn){
            fn(this.name, this.lastName, true)
        }
    }
}

function responseGreeting(name, lastName, isDev){
    console.log(`Buen día ${name} ${lastName}`);
    if(isDev){
        console.log(`que bien!, eres desarrollador`);
    }
}

var per_1 = new People("mili","valde",10);
var per_2 = new People("coper","valde",50);
var per_3 = new Developer("paty","valde",80);

per_1.greeting(responseGreeting)
per_2.greeting()
per_3.greeting(responseGreeting)