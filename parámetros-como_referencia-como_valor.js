var peopleOne = {
    name:'ana',
    lastname :'arriaga',
    year:35
}

function increaseYear(people){
     people.year+=1;
    
} // modificando objeto INICIAL

//js se comporta diferente con los objetos
// en la funcion le estamos pasando el objeto completo
// es posible pasarle people.edad la propiedad pero no afectara 
// el valor de la propiedad en el objeto original


//soluciones

// en la funcion retornar un objeto nuevo
// returnos desglozando el objeto orifinal 
// y modificamos la propiedad deseada

function incrementyears_other(people){
    return{
        ...people,
        year:people.year+1
    }

} // se obtiene otro objeto modificado 

var people_other= incrementyears_other(peopleOne);

