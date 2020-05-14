//JS Programming challenges

//Awesome animal -- append "awesome" to indiviual item in the animals array
var animals = ['cats', 'Fish', 'Lemur', 'Komodo Dragon'];
let newAnimals = [];

for (let i = 0; i < animals.length; i++) {
  animals[i] = animals[i] + ' Awesome';
}
console.log(animals);

