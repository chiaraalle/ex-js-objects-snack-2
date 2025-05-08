//code question 1
const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // Double Cheese Burger
console.log(secondBurger.name ); // Double Cheese Burger

//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 
//è stato creato 1 solo oggetto in memoria ossia const hamburger, secondBurger ha solo il riferimento all'oggetto.

//code question 2
const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?