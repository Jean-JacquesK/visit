const person1 = {
  id: 1,
  name: "Bertie Yates",
  age: 29,
  image: faker.image.avatar(),
};

// Le but de l'exercice est de destructuer l'objet person 1 par décomposition
// de reassigner la valeur de age par birthday et de récuperer chacune des valeurs.

const { id, name, age, image } = person1;
const { age: birthday } = person1;

let a = 1;
let b = 3;

// le but de l'exercice est d'échanger l'attribution des variables a=3 et b=1 en utilisant un array
const array = [a, b];
a = array[1];
b = array[0];

// Penser dynamique
[a, b] = [b, a];
