const myFirstorder = {
    name: 'Toyota camry',
    price: 22000,
    color: 'blue',
    year: 2020,
    mileage: 100000,
    features: ['Auto start', 'bluetooth', 'LED Headlights'],
    isElectric: false,
    isAvailable: true,
    engine: {
        type: 'v6',
        capacity: 2.5,
        horsepower: 300
    },
    drive: function(){
        console.log('vroooooooooooooom...')
    }
}

console.log(myFirstorder.engine.type);
console.log(myFirstorder.engine.capacity);
console.log(myFirstorder['color'])
console.log(myFirstorder['engine']['horsepower'])

myFirstorder.drive();
console
