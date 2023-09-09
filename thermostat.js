class Thermostat {
    constructor() {
        this.temperature = 20; // Current temperature
        this.powerSavingMode = true; // Power-saving mode status
        this.minimumTemperature = 10; // Minimum temperature allowed
        this.maximumTemperature = 25; // Maximum temperature allowed, according to power-saving mode status
    };

    getTemperature() {
        return this.temperature;
    } 

    up() {
        return this.temperature += 1   // This may need revising depending on next tests
    }
}

module.exports = Thermostat;