"use strict";
describe('Function', function () {
    it('should support in typescript', () => {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("Hadid")).toBe("Hello Hadid");
        function printHello(name) {
            console.info(`Hello ${name}`);
        }
        printHello("Hadid");
    });
    it('should support default value', () => {
        function sayHello(name = "Guest") {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Hadid")).toBe("Hello Hadid");
    });
    it('should support rest parameter', () => {
        function sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    it('should support optional parameter', () => {
        function sayHello(firstName, lastName) {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }
            else {
                return `Hello ${firstName}`;
            }
        }
        expect(sayHello("Hadid")).toBe("Hello Hadid");
        expect(sayHello("Hadid", "Hardiansyah")).toBe("Hello Hadid Hardiansyah");
    });
    it('should support function overloading', () => {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value * 10;
            }
        }
        expect(callMe(100)).toBe(1000);
        expect(callMe("hadid")).toBe("HADID");
    });
    it('should support function as parameter', () => {
        function sayHello(name, filter) {
            return `Hello ${filter(name)}`;
        }
        function toUpper(name) {
            return name.toUpperCase();
        }
        expect(sayHello("Hadid", toUpper)).toBe("Hello HADID");
        // Anonymous Function
        expect(sayHello("Hadid", function (name) {
            return name.toUpperCase();
        })).toBe("Hello HADID");
        // Arrow Function
        expect(sayHello("Hadid", (name) => name.toUpperCase())).toBe("Hello HADID");
    });
});
