let car = {
    make: "Toyoto",
    model: "Land Cruiser",
    year: 2009,
    start: function() {
        console.log("The car has started",  this.model)
    }
}
// console.log(car)

car.start()