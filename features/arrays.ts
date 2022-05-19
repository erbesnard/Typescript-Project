const carMakers = ['ford', 'toyota', 'chevy'];

const carsByMake = [
  ['f150'],
  ['corrolla'],
  ['camaro'],
];

//Help with inference when extracting values
const car = carMakers[0];

const myCar = carMakers.pop()

//Prevent incompatible values

carMakers.push(200)

// Help with map or reduce

carMakers.map((car: string): string => {
  return car.toUpperCase();
})

// Flexible arrays can contain different types

const importantDates: (string | Date)[] = [new Date(), '2030-10-10']
