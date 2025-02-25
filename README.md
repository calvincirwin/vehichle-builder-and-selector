# 08 TypeScript and OOP: Vehicle Builder

## Description
This is a command-line application that allows users to create, select, and interact with vehicles such as cars, trucks, and motorbikes. Users can enter vehicle details and perform actions like starting, stopping, accelerating, and (for trucks) towing another vehicle.

This project was built using **TypeScript** and the **Inquirer package** to collect user input in the terminal.

## Walkthrough Video
[Vehicle build](https://youtu.be/Tju7mgDLMNU?si=mO5A3iQTE1SSJ2YA)

## Project Structure
```
vehicle-builder-and-selector/
 ├── src/
 │   ├── classes/
 │   │   ├── Car.ts
 │   │   ├── Truck.ts
 │   │   ├── Motorbike.ts
 │   │   ├── Wheel.ts
 │   │   ├── Vehicle.ts
 │   │   ├── Cli.ts
 │   ├── index.ts
 ├── dist/ (generated after build)
 ├── package.json
 ├── tsconfig.json
 ├── README.md
```

## Installation & Setup
### 1. Install Dependencies
```bash
npm install
```

### 2. Build TypeScript to JavaScript
```bash
npm run build
```

### 3. Start the Application
```bash
npm start
```

## Features
- **Create a new vehicle** (Car, Truck, or Motorbike)
- **Enter vehicle details** (Color, Make, Model, Year, Weight, Top Speed, etc.)
- **Perform actions on vehicles**:
  - Start
  - Accelerate
  - Decelerate
  - Stop
- **Truck-Specific Feature**:
  - **Tow another vehicle** if its weight is under the truck's towing capacity.

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input  
WHEN I am prompted to create a new vehicle or existing vehicle  
THEN I can choose between the two options  

WHEN I am prompted to choose the vehicle type during creation  
THEN I can choose between car, truck, and motorbike  

WHEN I am prompted for details about the vehicle  
THEN I can enter the vehicle information  

WHEN I have entered all the vehicle information  
THEN I can use the created vehicle  

WHEN I select an existing vehicle  
THEN I can use the selected existing vehicle  

WHEN I have created a new vehicle or selected an existing vehicle  
THEN I can perform actions with that vehicle  

WHEN I perform an action with a vehicle  
THEN I see the result of the action in the command-line  

WHEN I complete the process of performing an action  
THEN I can perform additional actions until I choose to exit  
```

## License
This project is licensed under the MIT License.

## Author
- Calvin Irwin  
- GitHub: [calvincirwin](https://github.com/calvincirwin)

- Email: [calvincirwin@gmail.com](mailto:calvincirwin@gmail.com)
