class Employee {
    // private property
    #id: number;

    protected name: string;
    address: string;

    static employeeCount: number = 0;

    constructor(id: number, name: string, address: string) {
        Employee.employeeCount++;
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    getNameWithAddress(): string {
        return `employee ${this.name} from ${this.address}`
    }

    get id(): number {
        return this.#id
    }

    set id(id: number) {
        this.#id = id
    }
}

class Manager extends Employee {
    constructor(id: number, name: string, address: string) {
        super(id, name, address)
    }

    getNameWithAddress(): string {
        return `Manager ${this.name} from ${this.address}`
    }
}

let john = new Employee(1, "John", "Bandung");
// john.id will not be able to access because private
// john.name will not be able to access because protected (only available inside class and inherited class)
console.log(john.getNameWithAddress())
john.id = 2

console.log(john.id)

let manager = new Manager(1, "Mujahid", "Bandung");

console.log(manager.getNameWithAddress())
console.log(Employee.employeeCount)