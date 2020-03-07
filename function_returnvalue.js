var peopleOne = {
    name: 'mili',
    lastname: 'en',
    year: 1,
    teacher: true,
}


const MAX_NUMBER_AGE = 18;

function isAdult(people) {
    return people.year >= MAX_NUMBER_AGE;
}

function PrintIsAdult(people) {
    if (isAdult(people)) {
        console.log(`${people.name} is adult`);
    } else {
        console.log(`${people.name} is not of legal age`);
    }
}

PrintIsAdult(peopleOne);