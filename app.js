function Car(brand, year, style, engine) {
  this.brand = brand
  this.year = year
  this.style = style
  this.engine = engine
}

const electricCar = new Car("Tesla", 2017, "Sedan", 6)
const regCar = new Car("Turd", 2018, "Ford", 2)
console.log(electricCar)
console.log(regCar)
