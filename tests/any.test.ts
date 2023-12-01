describe('Any', function () {
    it('should support in typescript', () => {

        const person: any = {
            id: 1,
            name: "Hadid Harddiansyah",
            age: 23
        };

        person.age = 24;
        person.address = "Indonesia"

        console.info(person)

    });
})