// one class that inheritance properties and methods from another class 
// by using 'extents' keyword


// base class 
class Animal{
    constructor(name){
        this.name = name; //initialization 
    }

    speak(){
        console.log(`${this.name} makes a sound`);
        
    }
}
//Derived class inherits from animal;
class Dog extends Animal{
    constructor(name,breed){
        super(name); //calls the parent constructor
        this.breed = breed;
    }
    // override speak method 
speak() {
    console.log(`${this.name}-${this.breed} barks`);
    
}
}

const dog = new Dog("Rex","German shepered");
dog.speak()