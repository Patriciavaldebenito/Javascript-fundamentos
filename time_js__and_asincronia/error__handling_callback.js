const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain:true}

// MÚLTIPLES PERSONAJES
// uso de callback

function getCharacters(id,callback){
  const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
  $.get(url, opts,callback).fail(function(){
      console.log(`Error: No se obtuvo la data ${id}`);
  })
}
// request en serie, no en paralelo
getCharacters(10, function (data){
    console.log(data)
    getCharacters(20, function (){
        console.log(data)
        getCharacters(22,function(){
            console.log(data)
        });
    });

}); 