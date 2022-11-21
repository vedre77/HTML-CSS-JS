// CONTROLLER -> MODEL -> VIEW

class View {

    displayMessage = msg => {
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    }
    // sets ship pict:
    displayHit = location => {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    }
    // sets MISS pict:
    displayMiss = location => {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};

let view = new View();

// MODEL keeps track of the ship positions and whether they're hit or sunk 
class Model {
    constructor(boardSize, numShips, shipsSunk, shipLength) {
        this.boardSize = boardSize;
        this.numShips = numShips;
        this.shipsSunk = shipsSunk;
        this.shipLength = shipLength
    }

    ships = [ 
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] } 
    ]
    
    fire = guess => {
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!!!");
                if (this.isSunk(ship)) {
                    view.displayMessage("YOU SANK MY BATTLESHIP!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("YOU MISSED!");
        return false;
    }

    isSunk = ship => {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }

    generateShipLocations = () => {
        let locations;
        for (let i = 0; i < this.numShips; i ++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
                this.ships[i].locations = locations;
        }
    }

    generateShip = () => {
        let direction = Math.floor(Math.random() * 2);
        let row;
        let col;
        if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize-(this.shipLength + 1)));
        } else {
            row = Math.floor(Math.random() * (this.boardSize-(this.shipLength + 1)));
            col = Math.floor(Math.random() * this.boardSize);
        }
        let newShipLocations = [];
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col+i));
            } else {
                newShipLocations.push((row + i) + "" + col);
            }
        }
        return newShipLocations;
    }

    collision = locations => {
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            for (let j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }
};

let shipModel = new Model(7, 3, 0, 3);
// log ships locations and hits:
console.log(shipModel.ships);

// CONTROLLER takes player guess and executes logic
class Controller {

    guesses = 0

    processGuess = guess => {
    let location = parseGuess(guess);
    if (location) {
        this.guesses++;
        let hit = shipModel.fire(location);
            if (hit && shipModel.numShips === shipModel.shipsSunk) {
            view.displayMessage("YOU SANK MY BATTLESHIP IN: " + this.guesses + " GUESSES");
            }           
        }
    }
};

let gameController = new Controller();

const parseGuess = guess => {
    let alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    if (guess === null || guess.length !== 2) {
        alert ("OOPS, ENTER A VALID LETTER AND NUMBER!")
    } else {
        let firstChar = guess.charAt(0);
        let row = alphabet.indexOf(firstChar);
        let column = guess.charAt(1);
    if (isNaN(row) || isNaN(column)) {
        alert("OOPS, NOT ON THE BOARD!");
    } else if (row < 0 || row >= shipModel.boardSize || column < 0 || column >= shipModel.boardSize) {
        alert("OOPS, THAT'S OFF THE BOARD!");
    } else {
        return row + column;
        }
    }
    return null;
}

const startGame = () => { 
    let fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    let guessInput = document.getElementById("guessInput");
    guessInput.onkeydown = handleKeyPress;
    shipModel.generateShipLocations();
}

const handleKeyPress = e => {
    let fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}

const handleFireButton = () => {
    let guessInput = document.getElementById("guessInput");
    let guess = guessInput.value;
    gameController.processGuess(guess);
    guessInput.value = "";
}

window.onload = startGame();

