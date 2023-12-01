describe('Interface', function () {
    it('should support in typescript', () => {
        const seller = {
            id: 1,
            name: 'Hadid',
            nib: '1234',
            npwp: '5678'
        };
        seller.name = "Hardiansyah";
        console.info(seller);
    });
    it('should support function interface', () => {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it('should support indexable interface', () => {
        const names = ["Hadid", "Hardiansyah"];
        console.info(names);
    });
    it('should support indexable interface for non number index', () => {
        const dictionary = {
            "name": "Hadid",
            "address": "Bogor"
        };
        expect(dictionary["name"]).toBe("Hadid");
        expect(dictionary["address"]).toBe("Bogor");
    });
    it('should support extends interface', () => {
        const employee = {
            id: "1",
            name: "Hadid",
            division: "IT"
        };
        console.info(employee);
        const manager = {
            id: "2",
            name: "Hardiansyah",
            division: "IT",
            numberOfEmployees: 22
        };
        console.info(manager);
    });
    it('should support function in interface', () => {
        const person = {
            name: "Hadid",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };
        console.info(person.sayHello("Hardiansyah"));
    });
    it('should support intersection types', () => {
        const domain = {
            id: "1",
            name: "Hadid"
        };
        console.info(domain);
    });
    it('should support type assertions', () => {
        const person = {
            name: "Hadid",
            age: 22
        };
        const person2 = person;
        console.info(person2);
    });
});
export {};
