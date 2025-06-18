const user = {
  name: 'Oleh',
  age: 30,
  hobby: 'reading',
  premium: true
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;


for (let key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

const countProps = obj => Object.keys(obj).length;

const userB = {
  name: 'Oleh',
  age: 30,
  hobby: 'skydiving',
  premium: false,
};

console.log(countProps(userB)); 

function findBestEmployee(employees) {
  let bestEmployee = '';
  let maxTasks = 0;

  for (const name in employees) {
    if (employees[name] > maxTasks) {
      maxTasks = employees[name];
      bestEmployee = name;
    }
  }

  return bestEmployee;
}

const team = {
  Anna: 29,
  Petro: 35,
  Ivan: 12,
  Olena: 41
};

console.log(`${findBestEmployee(team)} виконала: ${team[findBestEmployee(team)]} задач`);

function countTotalSalary(employees) {
  let total = 0;

  for (const name in employees) {
    total += employees[name];
  }

  return total;
}

const salaries = {
  Anna: 2500,
  Petro: 3200,
  Ivan: 1800
};

console.log(countTotalSalary(salaries)); 

function getAllPropValues(arr, prop) {
  const values = [];

  for (const obj of arr) {
    if (obj.hasOwnProperty(prop)) {
      values.push(obj[prop]);
    }
  }

  return values;
}

const products = [
  { name: 'Apple', price: 30 },
  { name: 'Banana', price: 20 },
  { name: 'Orange', quantity: 10 }
];

console.log(getAllPropValues(products, 'name'));


console.log(getAllPropValues(products, 'price'));


console.log(getAllPropValues(products, 'quantity'));

    function calculateTotalPrice(allProducts, productName) {
  let total = 0;

  for (const product of allProducts) {
    if (product.name === productName) {
      total += product.price * product.quantity;
    }
  }

  return total;
}

const productss = [
  { name: 'Apple', price: 30, quantity: 3 },
  { name: 'Banana', price: 20, quantity: 5 },
  { name: 'Apple', price: 30, quantity: 2 }
];

console.log(calculateTotalPrice(productss, 'Apple')); 


console.log(calculateTotalPrice(productss, 'Banana')); 
