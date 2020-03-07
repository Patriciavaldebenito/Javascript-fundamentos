var people_one = {
    name: 'a',
    lastname: 'b',
    year: 20,
    kg: 60
}

console.log(`Al inicio del año ${people_one.name} pesa ${people_one.kg}`);
const VARIANTE_KG =0.2;
const DAYS= 365;
const increaseKg = (people) => people.kg +=VARIANTE_KG;
const decreaseKg = (people) => people.kg-=VARIANTE_KG;
 

function kg(people) {
    for (let i = 1; i <= DAYS; i++) {
        var random = Math.random()
        // 25% baja , 25% sube, 50% mantiene

        if (random < 0.25) { 
            increaseKg(people);
        }
        else if (random < 0.5) {
            decreaseKg(people);
        } 
        
    }
    
   console.log(`Al final del año ${people.name} pesa ${people.kg.toFixed(2)}`);

}

kg(people_one);



