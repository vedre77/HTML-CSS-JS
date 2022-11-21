class Dish {
    constructor(name, price, ingredients) {
        this.name = name;
        this.price = price;
        this.ingredients = ingredients
    }
    // cost method returns the total cost of ingredients + fixed price (10)
    cost = () => {
        const fixedPrice = 10;
        return fixedPrice + this.ingredients.reduce((accum, next) => accum + next.cost, 0);
    }
    profit = () => {
        return this.price - this.cost();
    }
}

class Restaurant {
    // using objects instead of arrays makes keeping of values in a single place
    // easier.
    constructor() {
        this.orders = {};
    }
    orderDish = (dish, client) => {
        if (!this.orders.hasOwnProperty(client.name)) {
            this.orders[client.name] = [dish];
        }
        else this.orders[client.name].push(dish);
    }
    printOrders = () => {
        const allOrders = Object.values(this.orders);
        // this now gives an array of arrays of objects! Not my cup of tea, but
        // we can unpack with a nested loop :)
        allOrders.forEach(elem => {
            elem.forEach((elem2, index) => console.log(`Order #${index}: ${elem2.name} - ${elem2.price}`))
        })
    }
    printCheck = client => {
        // restaurant.printCheck(pluto);
        console.log(client.name);
        this.printOrders(client);
        const clientOrders = this.orders[client.name]; //now an array of objects
        const total = clientOrders.reduce((acc, next) => acc + next.price, 0);
        console.log(`Total: ${total}`);
    }
    totalProfit = () => {
        const total = this.profitSum.reduce((acc, next) => acc + next, 0);
        console.log(`Total profit is: ${total} pesos.`)
    }
    customerProfit = client => {
        const clientProfitTotal = client.profit.reduce((acc, nex) => acc + nex, 0);
        console.log(`Total profit from customer ${client.name} is ${clientProfitTotal} pesos.`);
    }
}

class Ingredients {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Client {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

//instantiate new clients
const pluto = new Client ('Pluto', 1);
const goofy = new Client ('Goofy', 2);

//check clients
//console.log(pluto);
//console.log(goofy);

//create a new instance of a Restaurant
const restaurant = new Restaurant;

//instantiate new ingredients
const cheese = new Ingredients('Cheese', 5);
const pepperoni = new Ingredients('Pepperoni', 3);
const dough = new Ingredients('Dough', 2);
const lettuce = new Ingredients('Lettuce', 1.5);
const tomato = new Ingredients('Tomato', 2.5);

// create instances of dishes
const pizza = new Dish('Pizza', 35, [cheese, pepperoni, dough]);
const salad = new Dish('Salad', 30, [lettuce, cheese, tomato]);
// check pizza cost
//console.log(pizza.cost()); // => 20
// check pizza profit
//console.log(pizza.profit()) // => 15
// check sallad cost
//console.log(salad.cost());
// check dish ingredients
//console.log(pizza.ingredients);

//restaurant.orderDish(pizza, goofy);
restaurant.orderDish(pizza, pluto);
restaurant.orderDish(salad, pluto);
//restaurant.orderDish(pizza, goofy);
//console.log(pluto);


// restaurant.orderDish(pizza, goofy);
// check restaurant methods
restaurant.printOrders();
restaurant.printCheck(pluto);
//restaurant.printCheck(goofy);

// BONUS!

// implement restaurant total profit;
// restaurant.totalProfit();
// implement customer profit method in the Restaurant
// restaurant.customerProfit(pluto);




