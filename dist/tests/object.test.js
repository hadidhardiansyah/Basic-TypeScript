"use strict";
describe('Object', function () {
    it('should support in typescript', () => {
        const person = {
            id: "1",
            name: "Hadid"
        };
        console.info(person);
        person.id = "2";
        person.name = "Hardiansyah";
        console.info(person);
    });
});
