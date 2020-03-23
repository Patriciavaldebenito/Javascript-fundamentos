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

var per_one = new People("coper", "valde",1.82);
console.log(per_one)
console.log(per_one.greeting()) // string
console.log(per_one.IamHigh())  // boolean



