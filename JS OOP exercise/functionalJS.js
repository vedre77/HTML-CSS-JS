const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

//   Filter the list of inventors for those who were born in the 1500’s.
const filteredYear = inventors.filter(elem => elem.year > 1500 && elem.year < 1600 );
// console.log(filteredYear);

// Give us an array of the inventor first and last names.
const mappedFullName = inventors.map(elem => `${elem.first} ${elem.last}`);
// console.log(mappedFullName);

// Sort the inventors by birthday, oldest to youngest.
const sortedBirthdays = inventors.sort((elem1, elem2) => elem1.year - elem2.year);
// console.log(sortedBirthdays);

// How many years did all the inventors live? Use the reduce method.
const totalYears = inventors.reduce((accum, next) => {
  const difference = next.passed - next.year;
  return accum + difference;
},0);
// console.log(totalYears);

// Sort the inventors by years lived.
const yearsLived = inventors.sort((a, b) => (a.lived - a.year) - (b.lived - b.year));
// console.log(yearsLived);

// Sort the inventors alphabetically by last name.
const lastNameSort = inventors.sort((a,b) => {
  if (a.last < b.last){
    return -1;
  }
  if ( a.last > b.last){
    return 1;
  }
  return 0;
});
// console.log(lastNameSort);

//2. Object.keys

const obj = {
  'keyCode': 'JS',
  2: 'Program Paradigm',
  Target: 'Browser',
};

Object.keys(obj); // ['2', 'keyCode', 'Target']

// Create a method that simulates this behavior.
// The methods signature should look like this:

function objectKeys(obj){
  let keys = [];
  for (elem in obj) {
    keys.push(elem);
  }
  return keys;
}

console.log(objectKeys(obj));

// 3. Object.values

const obj2 = {
  'keyCode': 'JS',
  2: 'Program Paradigm',
  Target: 'Browser',
};

Object.values(obj2); // ['Program Paradigm', 'JS', 'Browser']

function objectValues(obj){
  let keys = [];
  for (elem in obj) {
    keys.push(obj[elem]);
  }
  return keys;
}

console.log(objectValues(obj2));


