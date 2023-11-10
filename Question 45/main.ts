function createCar2(manufacturer, modelName, ...options) {
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    for (var i = 0; i < options.length; i += 2) {
        var key = options[i];
        var value = options[i + 1];
        car[key] = value;
    }

    return car;
}

var carInfo = createCar2("Toyota", "Camry", "color", "blue", "year", 2022);

console.log(carInfo);
