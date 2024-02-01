export interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

// object desctructing and custom name
let {
  name: username,
  age,
  email,
}: User = {
  id: 1,
  name: "Mujahid",
  age: 25,
  email: "X2I6j@example.com",
};

console.log(username, age, email);

interface Employees extends User {
  salary: number;
}

let employee: Employees = {
  id: 1,
  name: "Mujahid",
  age: 25,
  email: "X2I6j@example.com",
  salary: 100,
};

export interface Login {
  login(): User;
}

// array destructuring
let [user1, user2, ...users]: User[] = [
  {
    id: 1,
    name: "Mujahid",
    age: 25,
    email: "X2I6j@example.com",
  },
  {
    id: 2,
    name: "Ansori",
    age: 21,
    email: "ansori@example.com",
  },
  {
    id: 3,
    name: "Majid",
    age: 18,
    email: "majid@example.com",
  },
  {
    id: 4,
    name: "mamat",
    age: 22,
    email: "majid@example.com",
  },
];

console.log(user1);
console.log(user2);
console.log(users);

let result = users.filter(user => user.age > 20);

console.log(result)