/* descomenta las llamadas de comparation y observa los resultados  */
var x =4, y= '4'

// en el inspector/console
//acceso a x e y 

function comparation(i,j){
    if(i==j){   // == los compara con el mismo tipo de dato
        console.log(true);
    }else{
        console.log(false);
    }


    if(i===j){   // === los compara preguntado si tiene mismo valor y mismo tipo de dato
        console.log(true);
    }else{
        console.log(false);
    }
}

//evaluación 1
//comparation(x,y);



// comparación de objetos
// evalución 2
var coper ={
    name:'coper'
}

var otherCoper = {
    name:'coper'
}

//comparation(coper,otherCoper); //false == , ===

var coper_two = coper; // mismo lugar de memoria, lugar de referencia
//comparation(coper, coper_two); // == true, === false



// desglozando
// creando un objeto nuevo
var coper_three = {
    ...coper
}

comparation(coper, coper_three); // false == false === , ya que, se crea un nuevo objeto


