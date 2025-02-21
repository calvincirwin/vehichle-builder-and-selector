import inquirer from "inquirer";
import Car from "./Car.js";
import Truck from "./Truck.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";

class Cli {
  private vehicles: (Car | Truck | Motorbike)[] = [];
  private selectedVehicleVin: string | null = null;

  static generateVin(): string {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  }

  startCli(): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "CreateOrSelect",
          message: "Would you like to create a new vehicle or perform an action on an existing vehicle?",
          choices: ["Create a new vehicle", "Select an existing vehicle"],
        },
      ])
      .then((answers) => {
        if (answers.CreateOrSelect === "Create a new vehicle") {
          this.createVehicle();
        }
      });
  }

  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "vehicleType",
          message: "Select a vehicle type:",
          choices: ["Car", "Truck", "Motorbike"],
        },
      ])
      .then((answers) => {
        switch (answers.vehicleType) {
          case "Car":
            this.createCar();
            break;
          case "Truck":
            this.createTruck();
            break;
          case "Motorbike":
            this.createMotorbike();
            break;
        }
      });
  }

  createCar(): void {
    inquirer
      .prompt([
        { type: "input", name: "color", message: "Enter Color" },
        { type: "input", name: "make", message: "Enter Make" },
        { type: "input", name: "model", message: "Enter Model" },
        { type: "input", name: "year", message: "Enter Year" },
        { type: "input", name: "weight", message: "Enter Weight" },
        { type: "input", name: "topSpeed", message: "Enter Top Speed" },
      ])
      .then((answers) => {
        const car = new Car(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );

        this.vehicles.push(car);
        this.selectedVehicleVin = car.vin;
        this.performActions();
      });
  }

  createTruck(): void {
    inquirer
      .prompt([
        { type: "input", name: "color", message: "Enter Color" },
        { type: "input", name: "make", message: "Enter Make" },
        { type: "input", name: "model", message: "Enter Model" },
        { type: "input", name: "year", message: "Enter Year" },
        { type: "input", name: "weight", message: "Enter Weight" },
        { type: "input", name: "topSpeed", message: "Enter Top Speed" },
        { type: "input", name: "towingCapacity", message: "Enter Towing Capacity" },
      ])
      .then((answers) => {
        const truck = new Truck(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [],
          parseInt(answers.towingCapacity)
        );

        this.vehicles.push(truck);
        this.selectedVehicleVin = truck.vin;
        this.performActions();
      });
  }

  createMotorbike(): void {
    inquirer
      .prompt([
        { type: "input", name: "color", message: "Enter Color" },
        { type: "input", name: "make", message: "Enter Make" },
        { type: "input", name: "model", message: "Enter Model" },
        { type: "input", name: "year", message: "Enter Year" },
        { type: "input", name: "weight", message: "Enter Weight" },
        { type: "input", name: "topSpeed", message: "Enter Top Speed" },
      ])
      .then((answers) => {
        const motorbike = new Motorbike(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );

        this.vehicles.push(motorbike);
        this.selectedVehicleVin = motorbike.vin;
        this.performActions();
      });
  }

  performActions(): void {
    const selectedVehicle = this.vehicles.find(v => v.vin === this.selectedVehicleVin);

    if (!selectedVehicle) {
      console.log("No vehicle selected.");
      this.startCli();
      return;
    }

    let choices = [
      "Start Engine",
      "Accelerate 5 MPH",
      "Decelerate 5 MPH",
      "Turn Left",
      "Turn Right",
      "Reverse",
      "Stop Engine",
      "Exit"
    ];

    if (selectedVehicle instanceof Truck) {
      choices.splice(6, 0, "Tow a Vehicle");
    }

    inquirer
      .prompt([
        {
          type: "list",
          name: "action",
          message: `What would you like to do with your ${selectedVehicle.make} ${selectedVehicle.model}?`,
          choices: choices,
        },
      ])
      .then((answers) => {
        switch (answers.action) {
          case "Start Engine":
            selectedVehicle.start();
            break;
          case "Accelerate 5 MPH":
            selectedVehicle.accelerate(5);
            console.log(`Current Speed: ${selectedVehicle.currentSpeed} MPH`);
            break;
          case "Decelerate 5 MPH":
            selectedVehicle.decelerate(5);
            console.log(`Current Speed: ${selectedVehicle.currentSpeed} MPH`);
            break;
          case "Turn Left":
            console.log(`${selectedVehicle.make} ${selectedVehicle.model} turns left.`);
            break;
          case "Turn Right":
            console.log(`${selectedVehicle.make} ${selectedVehicle.model} turns right.`);
            break;
          case "Reverse":
            console.log(`${selectedVehicle.make} ${selectedVehicle.model} moves in reverse.`);
            break;
          case "Tow a Vehicle":
            if (selectedVehicle instanceof Truck) {
              console.log("Towing action will be implemented.");
            }
            break;
          case "Stop Engine":
            selectedVehicle.stop();
            break;
          case "Exit":
            console.log("Exiting Vehicle Builder. Goodbye!");
            process.exit();
        }

        this.performActions();
      });
  }
}

export default Cli;
