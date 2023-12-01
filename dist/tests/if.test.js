"use strict";
describe('If Statement', function () {
    it('should support in typescript', () => {
        const examValue = 50;
        if (examValue > 80) {
            console.info("Good");
        }
        else if (examValue > 60) {
            console.info("Not Bad");
        }
        else {
            console.info("Try Again");
        }
    });
    it('should support ternary operator', () => {
        const value = 80;
        const say = value >= 75 ? "Congratulation" : "Try Again";
        console.info(say);
    });
    it('should support switch statement', () => {
        function sayHello(name) {
            switch (name) {
                case "Hadid":
                    return "Hi Hadid";
                case "Hardiansyah":
                    return "Hi Hardiansyah";
                default:
                    return "Hello";
            }
        }
        console.info(sayHello("Hadid"));
        console.info(sayHello("Hardiansyah"));
        console.info(sayHello("Saputra"));
    });
});
