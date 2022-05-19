const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
}

const pepsi: [string, boolean, number] = [
  'brown', true, 40
]

type Drink = [string, boolean, number];

const cola: Drink = ['red', true, 40];
