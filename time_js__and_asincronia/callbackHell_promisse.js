const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain:true}

function getCharacters(id){
    return new Promise((resolve, reject) =>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
        $.get(url, opts, function(data){
         resolve(data)
        })
        .fail(()=> reject(id))
    })
}

function onError(n){
    console.log(`No se obtiene dato para el id: ${n}`)
}

// var ids =[1,2,30000,10,15,20,21]; // evaluar con error
var ids =[1,2,3,10,15,20,21];

var promisses= ids.map((id)=>{
return getCharacters(id)
})

Promise.all(promisses)
.then(character => console.log(character))
.catch(onError)

// getCharacters(1)  //500
// .then((data) => {
//     console.log(`El personaje es ${data.name}`)
//     return getCharacters(2)
// })
// .catch(id => onError(id))


