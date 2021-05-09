class Pet {
    constructor(name, age){
        this.name = name;
        this.age = age; 
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

// extends calls the constructor from the base class of pet
class Cat extends Pet{
    constructor(name, age, livesLeft = 9){
        // super calls the constructor from pet class
        super(name, age)
        this.livesLeft = livesLeft;
    }
    meow() {
        return `MEOWWW!!`;
    }
}

class Dog extends Pet{
    bark() {
        return 'WOOF!!';
    }
    // this eat() method will be returned, not the pet eat() method
    eat() {
        return `EATING!`;
    }
}