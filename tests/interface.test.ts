import {Seller} from "../src/seller";
import {Employee, Manager} from "../src/employee";
import {Person} from "../src/person";

describe('Interface', function () {
    it('should support in typescript', () => {

        const seller: Seller = {
            id: 1,
            name: 'Hadid',
            nib: '1234',
            npwp: '5678'
        };

        seller.name = "Hardiansyah";

        console.info(seller);

    });

    it('should support function interface', () => {

        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return  value1 + value2;
        }

        expect(add(2, 2)).toBe(4);

    });

    it('should support indexable interface', () => {

        interface StringArray {
            [index: number]: string
        }

        const names: StringArray = ["Hadid", "Hardiansyah"];
        console.info(names);

    });

    it('should support indexable interface for non number index', () => {

        interface StringDictionary {
            [key: string]: string
        }

        const dictionary: StringDictionary = {
            "name": "Hadid",
            "address": "Bogor"
        }

        expect(dictionary["name"]).toBe("Hadid");
        expect(dictionary["address"]).toBe("Bogor");

    });

    it('should support extends interface', () => {

        const employee: Employee = {
            id: "1",
            name: "Hadid",
            division: "IT"
        }

        console.info(employee);

        const manager: Manager = {
            id: "2",
            name: "Hardiansyah",
            division: "IT",
            numberOfEmployees: 22
        }

        console.info(manager);

    });

    it('should support function in interface', () => {

        const person: Person = {
            name: "Hadid",
            sayHello: function (name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        }

        console.info(person.sayHello("Hardiansyah"));

    });

    it('should support intersection types', () => {

        interface HasName {
            name: string
        }

        interface HasId {
            id: string
        }

        type Domain = HasId & HasName;

        const domain: Domain = {
            id: "1",
            name: "Hadid"
        }

        console.info(domain);

    });

    it('should support type assertions', () => {

        const person: any = {
            name: "Hadid",
            age: 22
        }

        const person2: Person = person as Person;
        console.info(person2);

    });
})