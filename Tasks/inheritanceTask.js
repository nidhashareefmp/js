class Car {
    constructor(name) {
        this.name = name; // initialization
    }

    sound() {
        console.log(`${this.name} makes a generic car sound`);
    }
}

// Derived class inherits from Car
class SportsCar extends Car {
    constructor(name, brand) {
        super(name); // calls the parent constructor
        this.brand = brand;
    }

    // override sound method
    sound() {
        console.log(`${this.name} (${this.brand}) goes Vroooom!`);
    }
}

const myCar = new SportsCar("Mustang", "Ford");
myCar.sound();  // Mustang (Ford) goes Vroooom!
