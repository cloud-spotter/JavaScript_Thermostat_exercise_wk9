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
            this.temperature++; // Refactored to remove the unnecessary 'return'
        } else {
            this.temperature = this.maximumTemperature;
        } 
    };

    down() {
        if (this.temperature > this.minimumTemperature) {
            this.temperature--;
        } else {
            this.temperature = this.minimumTemperature;
        }
    };

    setPowerSavingMode(on) {
        if (on) {
            this.maximumTemperature = 25;
        } else {
            this.maximumTemperature = 32;
        }
    };
    
    reset() {
        this.temperature = 20;
    };

    checkEnergyUsage() {
        return this.temperature < 18 ? 'low-usage'
            : this.temperature <= 25 ? 'medium-usage'
            : 'high-usage'
    };
};

module.exports = Thermostat;