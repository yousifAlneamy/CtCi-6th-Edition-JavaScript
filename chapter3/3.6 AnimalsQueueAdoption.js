/**
 * 3.6
 * Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a strictly"first in, first
 * out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,
 * or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of
 * that type). They cannot select which specific animal they would like. Create the data structures to
 * maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog,
 * and dequeueCat. You may use the built-in Linked List data structure.
 */
class AnimalsQueueAdoption {
	constructor() {
		this.dog = []; // dealt with as queue
		this.cat = []; // dealt with as queue
		this.order = 0;
	}

	enqueue(animal) {
		const order = ++this.order;
		if (animal instanceof Dog) {
			this.dog.unshift({ animal, order });
		} else {
			this.cat.unshift({ animal, order });
		}
	}
	dequeue(type) {
		const dog = this.dog;
		const cat = this.cat;

		if (!type) {
			if (!dog.length && !dog.length) {
				throw { Error: "Both queues are empty!" };
			}

			if (dog.length && !cat.length) {
				return dog.pop();
			}
			if (!dog.length && cat.length) {
				return cat.pop();
			}
			if (dog[dog.length - 1].order < cat[cat.length - 1].order) {
				return dog.pop();
			} else {
				return cat.pop();
			}
		}

		type = type.toLowerCase();
		if (type === Dog.type) {
			if (!dog.length) {
				throw { Error: "Dogs queue is empty!" };
			} else {
				return dog.pop();
			}
		}

		if (type === Cat.type) {
			if (!cat.length) {
				throw { Error: "Cats queue is empty!" };
			} else {
				return cat.pop();
			}
		}

		throw { Error: "This type of " + type + " is unsupported" };
	}
}

class Dog {
	constructor(name) {
		this.name = name;
	}
}
Dog.type = "dog";

class Cat {
	constructor(name) {
		this.name = name;
	}
}
Cat.type = "cat";

const animals = new AnimalsQueueAdoption();

animals.enqueue(new Cat("cat1"));
animals.enqueue(new Dog("dog1"));
animals.enqueue(new Cat("cat2"));
animals.enqueue(new Cat("cat3"));
animals.enqueue(new Dog("dog2"));
console.log(animals);

console.log("General request", animals.dequeue(), animals);
console.log("General request", animals.dequeue(), animals);
console.log("Dog request", animals.dequeue(Dog.type), animals);
console.log("Cat request", animals.dequeue(Cat.type), animals);

try {
	console.log("Dog request", animals.dequeue(Dog.type), animals);
} catch (e) {
	console.log(e);
}

try {
	console.log("Lion request", animals.dequeue("lion"), animals);
} catch (e) {
	console.log(e);
}
