// People!
// We know that every person is different. We are going to implement 
// a silly approximation of that.
// Create the Person class. The person class has: 
// - firstName, lastName and isAlive attributes 
// - greet method that will print Hello this is Forrest Gump.
// Then we will create different types of that person.

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    isAlive = this.isAlive;
    greet = () => {
        console.log(`Hello, this is ${firstName} ${lastName}.`);
    }
}

// Writer
// Apart from the Person attributes 
// - It will also have a pseudonym. Which will be the 
// first and last name written backwards. 
// - signBook should print a message with the pseudonym

class Writer extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }
    pseudonym = () => {
        const fullName = this.firstName.toLowerCase() + this.lastName.toLowerCase();
        const reversed = fullName.split('').reverse().join('');
        const firstLetter = reversed.charAt(0).toUpperCase();
        return firstLetter + reversed.slice(1);
         
    }
    signBook = () => {
        console.log(`I sign my books as ${this.pseudonym()}`);
    }
}

const tolstoj = new Writer('Lav', 'Tolstoj');
tolstoj.isAlive = false;
tolstoj.signBook();

// Developer
// Apart from the Person attributes - codename. Which will be passed in 
// the initialization.
// const forrest = new Developer('Forrest', 'Gump', 'Ping Pong King');
// impress, will be a method that will print 5 lines of 0s and 1s and sign 
// it with the codename.

class Developer extends Person {
    constructor(firstName, lastName, codeName) {
        super(firstName, lastName);
        this.codeName = codeName;
    }
    impress = () => {
        for (let i = 0; i < 5; i ++) {
            let random = Math.random() * 20;
            let line = '';
            for (let i = 0; i < random; i ++) {
                line += [0,1][Math.floor(Math.random() * 2)];
            }
            console.log(line);
        }
        console.log(`You have been hacked by ${this.codeName}`)
    }
}

const forrest = new Developer('Forrest', 'Gump', 'Ping Pong King');
forrest.impress();

//Singer
// Apart from the Person attributes - artisticName. Which will be the name with Fancy 
// in front of the first and last name. - melody, will be a string passed in the 
// initialization. - sing should print the melody 3 times.

class Singer extends Person {
    constructor(firstName, lastName, melody) {
        super(firstName, lastName);
        this.melody = melody;
    }
    artisticName = 'Fancy' + ' ' + this.firstName + ' ' + this.lastName;
    sing = () => {
        let i = 1;
        while (i <= 3) {
            console.log(this.melody);
            i ++;
        }
    }
}

const celine = new Singer('Celine', 'Dion', 'My heart did go on, sucker!');
celine.sing();

// Junior Developer
// Apart from the Developer attributes - isStruggling should be true; 
// - complain should print the codeName with capital letters. 
// - workHard should print 10 times: <codeName> + is working hard

class JuniorDeveloper extends Developer {
    constructor(firstName, lastName, codeName) {
        super(firstName, lastName, codeName);
    }
    isStruggling = true;
    complain = () => {
        console.log(`${this.codeName.toUpperCase()}!!!`);
    }
    workHard = () => {
        for (let i = 0; i < 10; i ++) {
            console.log(`${this.codeName} is working hard(ly) - no pun intended :D`);
        }
    }
}

const nick = new JuniorDeveloper('Nick', 'Cage', 'cheakyMonkey' );
nick.complain();
nick.workHard();

// What’s the __proto__ of Person?
// What’s the prototype of Writer?
// Does forrest have a __proto__ or a prototype? Why?
// What is the difference between __proto__ and prototype?

// My original answers :)
// 1. Object (in case of a browser, the Window object).
// 2. Parent prototype of Writer is Person.
// 3. It has a prototype, since it is not the master Object.
// 4. ___proto___ is called on the master Object to access the props,
//   and prototype will (access) add to the prototype of any object.

console.log(Person.prototype.___proto___); // undefined
console.log(Writer.prototype); // Person