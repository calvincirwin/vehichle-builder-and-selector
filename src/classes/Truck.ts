import Vehicle from "./Vehicle.js";
import Wheel from "./Wheel.js";

class Truck extends Vehicle {
  vin: string;
  color: string;
  year: number;
  weight: number;
  topSpeed: number;
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
    super(make, model);
    this.vin = vin;
    this.color = color;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    this.wheels = wheels.length ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  }
}

export default Truck;
