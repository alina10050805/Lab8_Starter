// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
describe('function isPhoneNumber', () => {
    it('123-123-1234 is a phone number', async () => {
        expect(functions.isPhoneNumber('123-123-1234')).toBe(true);
    });
    it('(123)-123-1234 is a phone number', async () => {
        expect(functions.isPhoneNumber('123-123-1234')).toBe(true);
    });
    it('number is NOT a phone number', async () => {
        expect(functions.isPhoneNumber('number')).toBe(false);
    });
    it('123-abc-1234 is NOT a phone number', async () => {
        expect(functions.isPhoneNumber('123-abc-1234')).toBe(false);
    });
});

describe('function isEmail', () => {
    it('123abc@gmail.com is a email', async () => {
        expect(functions.isEmail('123abc@gmail.com')).toBe(true);
    });
    it('111@sd.sd is a email', async () => {
        expect(functions.isEmail('111@sd.sd')).toBe(true);
    });
    it('mail is NOT a email', async () => {
        expect(functions.isEmail('mail')).toBe(false);
    });
    it('123-abc-1234gmail.com is NOT a email', async () => {
        expect(functions.isEmail('123-abc-1234gmail.com')).toBe(false);
    });
});

describe('function isStrongPassword', () => {
    it('PaSsWoRd is a strong password', async () => {
        expect(functions.isStrongPassword('PaSsWoRd')).toBe(true);
    });
    it('A1b2C3d4 is a strong password', async () => {
        expect(functions.isStrongPassword('A1b2C3d4')).toBe(true);
    });
    it('aa is NOT a strong password', async () => {
        expect(functions.isStrongPassword('aa')).toBe(false);
    });
    it('111 is NOT a strong password', async () => {
        expect(functions.isStrongPassword('111')).toBe(false);
    });
});


describe('function isDate', () => {
    it('1/1/2022 is a date', async () => {
        expect(functions.isDate('1/1/2022')).toBe(true);
    });
    it('01/01/2022 is a date', async () => {
        expect(functions.isDate('01/01/2022')).toBe(true);
    });
    it('010122 is NOT a date', async () => {
        expect(functions.isDate('010122')).toBe(false);
    });
    it('0101 is NOT a date', async () => {
        expect(functions.isDate('0101')).toBe(false);
    });
});

describe('function isHexColor', () => {
    it('#ffffff is a hex color', async () => {
        expect(functions.isHexColor('#ffffff')).toBe(true);
    });
    it('#123abc is a hex color', async () => {
        expect(functions.isHexColor('#123abc')).toBe(true);
    });
    it('#12 is NOT a hex color', async () => {
        expect(functions.isHexColor('#12')).toBe(false);
    });
    it('gks is NOT a hex color', async () => {
        expect(functions.isHexColor('gks')).toBe(false);
    });
});