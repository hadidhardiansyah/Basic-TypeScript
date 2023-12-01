"use strict";
describe('Array', function () {
    it('should same with javascript', () => {
        const names = ["hadid", "hardiansyah", "saputra"];
        const values = [22, 8, 99];
        console.info(names);
        console.info(values);
    });
    it('should support readonly array', () => {
        const hobbies = ["Sport", "Singing"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
    });
    it('should support tupple', () => {
        const person = ["Hadid", "Hardiansyah", 100];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
    });
});
