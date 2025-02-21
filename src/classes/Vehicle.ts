class Vehicle {
  started: boolean;
  currentSpeed: number;
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.started = false;
    this.currentSpeed = 0;
    this.make = make;
    this.model = model;
  }

  start(): void {
    this.started = true;
    console.log(`${this.make} ${this.model} is now running.`);
  }

  stop(): void {
    this.currentSpeed = 0;
    this.started = false;
    console.log(`${this.make} ${this.model} has stopped.`);
  }

  accelerate(change: number): void {
    if (this.started) {
      this.currentSpeed += change;
      console.log(`${this.make} ${this.model} accelerates to ${this.currentSpeed} MPH.`);
    } else {
      console.log(`Start the ${this.make} ${this.model} first.`);
    }
  }

  decelerate(change: number): void {
    if (this.started && this.currentSpeed - change >= 0) {
      this.currentSpeed -= change;
      console.log(`${this.make} ${this.model} slows down to ${this.currentSpeed} MPH.`);
    } else {
      console.log(`${this.make} ${this.model} is already at 0 MPH or not started.`);
    }
  }
}

export default Vehicle;
