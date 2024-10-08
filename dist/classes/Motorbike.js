// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// Motorbike class that extends Vehicle
class Motorbike extends Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, wheels) {
        // Call the constructor of the parent class, Vehicle
        super(); // Since Vehicle doesn’t take any parameters in its constructor
        // Initialize Motorbike-specific properties
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        // Check if the wheels array has 2 elements, if not create 2 new Wheel objects
        if (wheels.length !== 2) {
            this.wheels = [new Wheel(), new Wheel()];
        }
        else {
            this.wheels = wheels;
        }
    }
    // Implement the wheelie method
    wheelie() {
        console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }
    // Override the printDetails method from the Vehicle class
    printDetails() {
        super.printDetails(); // Call the parent class's method
        // Log motorbike-specific details
        console.log(`VIN: ${this.vin}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight}kg`);
        console.log(`Top Speed: ${this.topSpeed}km/h`);
        console.log(`Color: ${this.color}`);
        console.log(`Wheels: ${this.wheels.length}`);
    }
}
// Export the Motorbike class as the default export
export default Motorbike;
