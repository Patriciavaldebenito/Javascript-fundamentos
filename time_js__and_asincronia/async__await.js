const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function getCharacter(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, opts, function(data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(n) {
  console.log(`No se obtiene dato para el id: ${n}`);
}

async function getCharacters() {
  var ids = [1, 2, 3, 10, 15, 20, 21];
  var promises = ids.map(id => getCharacter(id));

  
  try{
    let characters = await Promise.all(promises);
    console.log(characters);

}
   catch(id){
     onError(id)
   }
}

getCharacters();

// var ids =[1,2,30000,10,15,20,21]; // evaluar con error
