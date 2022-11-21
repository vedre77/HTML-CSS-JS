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
    // using objects instead of arrays would make accessing values easier! 
    orders = [];
    costs = [];
    profitSum = [];
    orderDish = (dish, client) => {
        this.orders.push(dish.name);
        this.costs.push(dish.price);
        this.profitSum.push(dish.profit());
        client.orders.push(dish.name);
        client.total.push(dish.price);
        client.profit.push(dish.profit());
    }
    printOrders = () => {
        this.orders.forEach(dish => {
            console.log(`Order #${this.orders.indexOf(dish)}: ${dish}`);
        })
    }
    printCheck = client => {
        console.log(client.name);
        client.total.forEach((cost, index) => {
            console.log(`Order #${client.total.indexOf(cost)}: ${client.orders[index]} - ${client.total[index]}`);
        })
        const total = client.total.reduce((acc, next) => acc + next, 0);
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
    total = [];
    orders = [];
    profit = [];
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

restaurant.orderDish(pizza, goofy);
restaurant.orderDish(pizza, pluto);
restaurant.orderDish(salad, pluto);

//restaurant.orderDish(salad, goofy);
// check restaurant methods
//restaurant.printOrders();
restaurant.printCheck(pluto);
restaurant.printCheck(goofy);
//restaurant.totalProfit();

// implement customer profit method in the Restaurant
restaurant.customerProfit(pluto);



