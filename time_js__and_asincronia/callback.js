const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const lukeUrl =`${API_URL}${PEOPLE_URL.replace(':id',1)}`;
const opts = { crossDomain:true}

$.get(lukeUrl, opts, function (data_) {
console.log(data_);
})


// MÚLTIPLES PERSONAJES

// uso de callback

function getCharacters(id,callback){
  const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
  $.get(url, opts, function (data_) {
    console.log(data_);
    if(callback){callback()}
    })
}
// request en serie, no en paralelo
getCharacters(10, function (){
    getCharacters(20, function (){
        getCharacters(22);
    });
}); 

// hellCallback



// sin control de orden de respuesta
/*function getCharacters(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    $.get(url, opts, function (data_) {
      console.log(data_);
      })
  }
*/
// getCharacters(10);
// getCharacters(20);
// getCharacters(30);

