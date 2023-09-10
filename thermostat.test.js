const Thermostat = require('./thermostat.js')

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
    })
    // Test #setPowerSavingMode imposes max temp limit if True
    test('#setPowerSavingMode imposes max temp limit of 32, if true', () => {
        thermostat.setPowerSavingMode(false)
        // Attempt to increase the temperature 10 times
        for (let tempUp = 0 ; tempUp < 15 ; tempUp++) {
            thermostat.up();
        }
        console.log(thermostat.temperature)
        expect(thermostat.getTemperature()).toBe(32)
    })

    // Test temperature property is not directly accessible/alterable outside the class 
    // Set this after testing other features, so hardcoding can be used in those tests
});