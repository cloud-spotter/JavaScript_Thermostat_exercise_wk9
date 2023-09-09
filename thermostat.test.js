const Thermostat = require('./thermostat.js')

describe('Thermostat', () => {
    let thermostat;
    beforeEach(() => {
        thermostat = new Thermostat();
    });
    
    // Test get temperature returns correctly initialised temperature
    it(`initialises temperature property correctly
        and #getTemperature returns 20`, () => {
        expect(thermostat.getTemperature()).toBe(20);
    });

    it(`when #up is called twice, temperature increases to 22`, () => {
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toBe(22)
    });
});