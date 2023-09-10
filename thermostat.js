class Thermostat {
    constructor() {
        this.temperature = 20; // Current temperature (initial temp. set to 20)
        this.powerSavingMode = true; // Power-saving mode status
        this.minimumTemperature = 10; // Minimum temperature possible
        this.maximumTemperature = 25; // Maximum temperature allowed, according to power-saving mode status
    };

    getTemperature() {
        return this.temperature;
    }; 

    up() {
        if (this.temperature < this.maximumTemperature) {
            return this.temperature++;
        } else {
            return this.temperature = this.maximumTemperature;
        } 
    };

    down() {
        return this.temperature--;
    };

    setPowerSavingMode(on) {
        if (on) {
            this.maximumTemperature = 25
        } else {
            this.maximumTemperature = 32
        }
    }
}

module.exports = Thermostat;