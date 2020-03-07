var peopleOne = {
    name: 'mili',
    lastname: 'en',
    year: 1,
    teacher: true,
}

var people_o = {
    name: 'tor',
    lastname: 'en',
    year: 66,
    teacher: true,
}


const MAX_NUMBER_AGE = 18;

// var  isAdult = (people) =>  {
//     return people.year >= MAX_NUMBER_AGE;
// }

// const isAdult = people => people.year >=MAX_NUMBER_AGE;

const isAdult = ({ year }) => year >= MAX_NUMBER_AGE
const isYounger = ({ year }) => year < MAX_NUMBER_AGE;




function PrintIsAdult(people) {
    if (isAdult(people)) {
        console.log(`${people.name} is adult`);
    } else {
        console.log(`${people.name} is not of legal age`);
    }
  
    if(isYounger(people)){
        console.log(`${people.name} is younger`);
    }else{
        console.log(`${people.name} is not younger`);
    }
}

PrintIsAdult(peopleOne);
PrintIsAdult(people_o);



function accessPermission(people){
    if(isAdult(people)){
        console.log(`Acceso Concedido ${people.name}`);
    }else if(isYounger(people))
    {
        console.log(`Sin Acesso ${people.name}`);
    }
}
accessPermission(peopleOne);
accessPermission(people_o);

