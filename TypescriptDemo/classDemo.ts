import { Login, User } from "./interface";

interface Address {
    country: string;
    city: string;
}

class Employee implements Login {
    // private property
    #id: number;

    protected name: string;
    address: Address;

    static employeeCount: number = 0;

    constructor(id: number, name: string, address: Address) {
        Employee.employeeCount++;
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    getNameWithAddress(): string {
        return `employee ${this.name} from ${this.address}`
    }

    login(): User {
        return {
            id: this.#id,
            name: this.name,
            email: "X2I6j@example.com",
            age: 20
        }
    }

    get id(): number {
        return this.#id
    }

    set id(id: number) {
        this.#id = id
    }
}

class Manager extends Employee {
    constructor(id: number, name: string, address: Address) {
        super(id, name, address)
    }

    getNameWithAddress(): string {
        return `Manager ${this.name} from ${this.address}`
    }
}

let john = new Employee(1, "John", {country: "Indonesia", city: "Bandung"});
// john.id will not be able to access because private
// john.name will not be able to access because protected (only available inside class and inherited class)
console.log(john.getNameWithAddress())
john.id = 2

console.log(john.id)

let manager = new Manager(1, "Mujahid", { country: "Indonesia", city: "Bandung" });

console.log(manager.getNameWithAddress())
console.log(Employee.employeeCount)