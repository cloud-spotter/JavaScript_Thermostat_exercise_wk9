const Thermostat = require('./thermostat.js');

describe('Thermostat', () => {
    let thermostat;
    beforeEach(() => {
        thermostat = new Thermostat();
    });
    
    // Test #getTemperature returns correctly initialised temperature
    it(`initialises temperature property correctly
        and #getTemperature returns 20`, () => {
        expect(thermostat.getTemperature()).toBe(20);
    });
    // Test #up increases temperature property by one each time
    it(`when #up is called twice, temperature increases to 22`, () => {
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toBe(22)
    });
    // Test #up increases temperature property by one each time
    it(`when down is called once, temperature decreases to 21`, () => {
        thermostat.up();
        thermostat.up();
        thermostat.down();
        expect(thermostat.getTemperature()).toBe(21)
    });
    // Test #setPowerSavingMode imposes max temp limit if True
    test('#setPowerSavingMode imposes max temp limit of 25, if true', () => {
        thermostat.setPowerSavingMode(true)
        // Attempt to increase the temperature 10 times
        for (let tempUp = 0 ; tempUp < 10 ; tempUp++) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toBe(25)
    });
    // Test #setPowerSavingMode imposes max temp limit if True
    test('#setPowerSavingMode imposes max temp limit of 32, if true', () => {
        thermostat.setPowerSavingMode(false)
        // Attempt to increase the temperature 10 times
        for (let tempUp = 0 ; tempUp < 15 ; tempUp++) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toBe(32)
    });
    // Test #up increases temperature past 25 if powerSavingMode(false)
    test(`#up increases temperature to 26 from 25,
    if this.powerSavingMode is false`, () => {
        thermostat.setPowerSavingMode(false)
        // Increase the temperature 6 times
        for (let tempUp = 0 ; tempUp < 6 ; tempUp++) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toBe(26);
    });
    // Test #reset changes the temperature property back to 20
    test(`#reset sets the temperature property to 20, 
    as returned by #getTemperature`, () => {
        thermostat.reset()
        expect(thermostat.getTemperature()).toBe(20);
    });
    // Test #checkEnergyUsage displays appropriate level usage statement
    test(`#checkEnergyUsage displays "medium-usage" when temperature is 21, 
    as returned by #getTemperature`, () => {
        thermostat.up()
        expect(thermostat.getTemperature()).toBe(21);
        expect(thermostat.checkEnergyUsage()).toBe('medium-usage')
    });
});
// Decided against testing for private properties - seems quite complex
// And not necessary to meet acceptance criteria here/test method behaviour