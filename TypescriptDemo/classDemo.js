"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
class Employee {
    constructor(id, name, address) {
        // private property
        _Employee_id.set(this, void 0);
        Employee.employeeCount++;
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        return `employee ${this.name} from ${this.address}`;
    }
    get id() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set id(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
}
_Employee_id = new WeakMap();
Employee.employeeCount = 0;
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `Manager ${this.name} from ${this.address}`;
    }
}
let john = new Employee(1, "John", "Bandung");
// john.id will not be able to access because private
// john.name will not be able to access because protected (only available inside class and inherited class)
console.log(john.getNameWithAddress());
john.id = 2;
console.log(john.id);
let manager = new Manager(1, "Mujahid", "Bandung");
console.log(manager.getNameWithAddress());
console.log(Employee.employeeCount);
