import {Customer, CustomerType} from "../src/enum";

describe('Enum', function () {
    it('should support in typescript', () => {

        const customer: Customer = {
            id: 1,
            name: "Hadid",
            type: CustomerType.GOLD
        }

        console.info(customer);

    });
})