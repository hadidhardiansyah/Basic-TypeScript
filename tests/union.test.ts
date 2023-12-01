describe('Union type', function () {
    it('should support in typescript', () => {

        let sample: number | string | boolean = "Hadid";
        console.info(sample);

        sample = 100;
        console.info(sample);

        sample = true;
        console.info(sample);

    });

    it('should support typeof operator', () => {

        function process(value: number | string | boolean) {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value += 2;
            } else {
                return !value;
            }
        }

        expect(process("hadid")).toBe("HADID");
        expect(process(2)).toBe(4);
        expect(process(true)).toBe(false);

    });
})