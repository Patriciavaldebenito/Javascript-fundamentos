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

getCharacters(500)  //500
.then((data) => {console.log(`El personaje es ${data.name}`)})
.catch(id => onError(id))












// promesas  valor que aún no conocemos
// edo pending
// edo = pending = si se resuelve exitosamente,  promesa se inicializa. Si se resuelve exitosamente pasa a fullfilled .then(val=>...)
// edo = pending = si ocurre un error pasa a edo reject .catch(err=>...)

