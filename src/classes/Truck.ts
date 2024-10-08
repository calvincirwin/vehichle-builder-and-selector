import Vehicle from './Vehicle';  // Add this line
import Wheel from './Wheel';      // Add this line

class Truck extends Vehicle {
  vin!: string;
  color!: string;
  make!: string;
  model!: string;
  year!: number;
  weight!: number;
  topSpeed!: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    // Pass these values to the Vehicle constructor
    super(vin, color, make, model, year, weight, topSpeed, wheels);
    this.towingCapacity = towingCapacity;

    // Ensure 4 wheels are present, if not, add default wheels
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }
}

export default Truck;
