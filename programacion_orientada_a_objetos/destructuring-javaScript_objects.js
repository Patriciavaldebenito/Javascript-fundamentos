var peopleOne = {
    name:'ana',
    lastname :'arriaga',
    year:35
}
var peopleTwo = {
    name:'beta',
    lastname :'arriaga',
    year:55
}

function printNameAndYears(people){
    var { name ,lastname, year } = people;
    console.log( `${name} ${lastname} tiene ${year} años`);
    //console.log(name + ' ' + lastname+ ' ' + 'tiene '+year + ' años')
}

printNameAndYears(peopleOne);
printNameAndYears(peopleTwo);