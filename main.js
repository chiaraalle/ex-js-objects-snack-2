/*code question 1
const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // Double Cheese Burger
console.log(secondBurger.name ); // Double Cheese Burger*/

//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 
//è stato creato 1 solo oggetto in memoria ossia const hamburger, secondBurger ha solo il riferimento all'oggetto.

/*code question 2
const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";

//nonostante lo spread operator che crea una copia una copia dell'oggetto
//non può copiare delle proprietà annidate (ingredients)
console.log(hamburger.ingredients[0]); // Salad
console.log(secondBurger.ingredients[0]); // Salad*/

//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
//qui abbiamo in memoria la creazione di 2 oggetti: hamburger e secondBurger.

//code question 3
const hamburger = {  //primo oggetto
	name: "Cheese Burger", 
	weight: 250,
	maker: {   //secondo oggetto (annidato)
		name: "Anonymous Chef",
		restaurant: { //terzo oggetto (annidato)
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// structuredClone() ci permette di creare una copia indipendente di ogni oggetto presente nella struttura 
// comprende anche gli oggetti annidati quindi in questo caso in memoria sono stati creati 9 oggetti.

//code question 4
const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
}

const copyChef = {...chef};

const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
};

const copyRestaurant = structuredClone(restaurant);

//Qual è il metodo migliore per clonare l’oggetto chef, e perché?
/*in questo caso essendo ch al suo interno è presente una funzione (arrow function) 
possiamo utilizzare solo due metodi: reference oppure spread operator. 
Reference in questo caso non va bene perchè non creerebbe un'altra copia ma solo un riferimento 
quindi se si modifica qualche proprietà si modificherebbe in entrambi gli oggetti. 
Sceglierei quindi lo spread operator perchè crea una copia superficiale di tutte le prioprietà. */


//Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
//In questo caso essendo presente l'oggetto newDate il metodo da utilizzare è structuredClone() in quanto gestisce oggetti complessi.
