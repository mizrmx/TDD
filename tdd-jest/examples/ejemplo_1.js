
function gatherNamesOf (arrayOfPeople) {
    return arrayOfPeople.map(function (person) {
        person.name;
    });

}

var people = [{name: 'Henry'}, {name: 'Marcela'}, {name: 'Alex'}];

var names = gatherNamesOf(people);

console.log(people);
