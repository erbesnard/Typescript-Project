class Vehicle {
  constructor(public color: string) {}

  protected drive(): void {
    console.log("chugga chugga");
  }

  public honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  protected drive(): void {
    console.log("vroom");
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "Orange");

car.startDrivingProcess();
