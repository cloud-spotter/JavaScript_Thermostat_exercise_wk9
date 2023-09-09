# {{Thermostat}} Class Design Recipe

## 1. Describe the Problem

You'll build, test-driving your code, a simple program to manage a thermostat. Here is the specification for the initial MVP of the program:

The Thermostat starts with an initial temperature of 20 degrees.<br>
You can increase the temperature with an up method.<br>
You can decrease the temperature with a down method.<br>
The minimum possible temperature is 10 degrees.<br>
The Power saving mode is on by default but it can also be turned off.<br>
If power saving mode is on, the maximum temperature is 25 degrees.<br>
If power saving mode is off, the maximum temperature is 32 degrees.<br>
You can reset the temperature to 20 with a reset method.<br>
You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.

## 2. Design the Class Interface

_Include the initializer, public properties, and public methods with all parameters, return values, and side-effects._

```javascript

class Thermostat {
// No code here yet
    constructor() {
        // Parameters:
        //  temperature: number
        //  power saving mode: boolean
        //  minimum temperature: number
        //  maximum temperature: number
        } 

    getTemperature() {
        // Returns: temperature
        // Side-effects: none
    }
    
    up() {
        // Returns: the new temperature
        /* Side-effects: Changes the value of the temperature property;
        Throws an exception if temperature is already at maximum */
    }

    down() {
        // Returns: the new temperature
        /* Side-effects: Changes the value of the temperature property;
        Throws an exception if temperature is already at minimum */
    }

    setPowerSavingMode() {
        // Returns: undefined
        /* Side-effects: changes the value of the power saving mode property;
        sets the value of the maximum temperature property */
    }

    reset() {
    // Returns: undefined
    // Side-effects: changes the value of the temperature property to 20
    }

    checkEnergyUsage() {
        // Returns: a string statement (low-usage/medium-usage/high-usage)
        // Side-effects: none
    }
};
```

## 3. Create Examples as Tests

_Make a list of examples of how the class will behave in different situations._

``` javascript
// EXAMPLE

 thermostat = new Thermostat();

thermostat.getTemperature(); // should return 20

thermostat.up();
thermostat.up();
thermostat.getTemperature(); // should now return 22

thermostat.down();
thermostat.getTemperature(); // should now return 21

thermostat.setPowerSavingMode(true); // PSM is now on, max temperature is 25

for (let i = 0 ; i < 10 ; i++) {
  thermostat.up();
}

thermostat.getTemperature(); // should be 25 (max reached)

thermostat.setPowerSavingMode(false); // PSM is now off, max temperature is no more 25

thermostat.up();
thermostat.getTemperature(); // should now return 26

thermostat.reset();
thermostat.getTemperature(); // should be back to 20
```

## 4. Implement the Behaviour

_After each test you write, follow the test-driving process of red, green, refactor to implement the behaviour._


<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fgolden-square-in-python&prefill_File=resources%2Fsingle_class_recipe_template.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fgolden-square-in-python&prefill_File=resources%2Fsingle_class_recipe_template.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fgolden-square-in-python&prefill_File=resources%2Fsingle_class_recipe_template.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fgolden-square-in-python&prefill_File=resources%2Fsingle_class_recipe_template.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fgolden-square-in-python&prefill_File=resources%2Fsingle_class_recipe_template.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
