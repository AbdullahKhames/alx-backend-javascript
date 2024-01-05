export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._lastName = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor();
  }
}
