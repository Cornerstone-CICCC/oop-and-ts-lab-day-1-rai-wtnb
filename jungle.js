class Animal {
  #name;
  #species;
  #energy;
  static remainingAnimals = 0;

  constructor(name, species, energy) {
    this.#name = name;
    this.#species = species;
    this.#energy = energy;
    Animal.remainingAnimals++;
  }

  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }

  get species() {
    return this.#species;
  }
  set species(species) {
    this.#species = species;
  }

  get energy() {
    return this.#energy;
  }
  set energy(energy) {
    this.#energy = energy;
  }

  processAttack(target, energyToSubtract, attackVerb = "attacks") {
    if (this.#energy <= 0) {
      console.log(`${this.#name} cannot attack because it has 0 energy.`);
      return;
    }
    if (target.energy <= 0) {
      console.log(`${target.name} cannot attack because it has 0 energy.`);
      return;
    }

    this.#energy -= energyToSubtract;
    target.energy -= energyToSubtract;

    if (this.#energy <= 0) {
      this.#energy = 0;
      console.log(`${this.#name} has lost the battle.`);
      Animal.remainingAnimals--;
    }
    if (target.energy <= 0) {
      target.energy = 0;
      console.log(`${target.name} has lost the battle.`);
      Animal.remainingAnimals--;
    }

    console.log(`${this.#name} ${attackVerb} ${target.name}!`);
    console.log(`${this.#name}'s energy: ${this.#energy}`);
    console.log(`${target.name}'s energy: ${target.energy}`);
  }

  attack(target) {
    this.processAttack(target, 10);
  }

  eat(energyToGain = 10) {
    this.#energy += energyToGain;
    console.log(`${this.#name} eats and gains energy!`);
    console.log(`${this.#name}'s energy: ${this.#energy}`);
  }
}

class Bird extends Animal {
  #canFly;

  constructor(name, species, canFly) {
    super(name, species, 100);
    this.#canFly = canFly;
  }

  get canFly() {
    return this.#canFly;
  }
  set canFly(canFly) {
    this.#canFly = canFly;
  }

  attack(target) {
    // Bird attacks deal 20 damage
    super.processAttack(target, 20, "swoops in to attack");
  }

  eat() {
    super.eat(10);
  }
}

class Mammal extends Animal {
  #furColor;

  constructor(name, species, furColor) {
    super(name, species, 200);
    this.#furColor = furColor;
  }

  get furColor() {
    return this.#furColor;
  }
  set furColor(furColor) {
    this.#furColor = furColor;
  }

  attack(target) {
    super.processAttack(target, 50, "lunges to attack");
  }

  eat() {
    super.eat(20);
  }
}

class Reptile extends Animal {
  #coldBlooded;

  constructor(name, species, coldBlooded) {
    super(name, species, 100);
    this.#coldBlooded = coldBlooded;
  }

  get coldBlooded() {
    return this.#coldBlooded;
  }
  set coldBlooded(coldBlooded) {
    this.#coldBlooded = coldBlooded;
  }

  attack(target) {
    super.processAttack(target, 30);
  }

  eat() {
    super.eat(15);
  }
}

// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(
  `Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`
);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(
  `Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`
);

const snake = new Reptile("Snake", "Serpent", true);
console.log(
  `Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`
);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();
