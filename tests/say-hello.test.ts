import {sayHello} from "../src/say-hello";

describe('sayHello', function () {
    it('should return hello hadid', () => {

        expect(sayHello('hadid')).toBe('Hello hadid')

    });
})