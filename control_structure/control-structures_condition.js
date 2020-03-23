var peopleOne = {
    name:'mili',
    lastname :'en',
    year:1,
    teacher:true,
    programmer :true,
    dj:false,
    dancer:false,
    chef:true
}

function printProfession(people){
    console.log(`${people.name} is:`);
    if(people.chef){
        console.log('- chef');
    }
    if(people.teacher){
        console.log('- teacher');
    }
    if(people.programmer){
        console.log('- programmer');
    }
    if(people.dj){
        console.log('- dj');
    }
    if(people.dancer){
        console.log('- dancer');
    }
}

function isAdult(people){

   if(people.year >=18){
       console.log(`${people.name} is adult`);
   } else{
    console.log(`${people.name} is not of legal age`);
   }

}


printProfession(peopleOne);
isAdult(peopleOne);