/*
 * Dr. Abraham Aldaco
 * abraham.aldaco@gmail.com
 * December 9, 2024
 */

/*
* Synchronous processing
*
* The next code executes a sequential order of operations
*/


function boilWater() {
    console.log("Boiling water...");
    return "Hot water";
  }
  
  function brewCoffee(water) {
    console.log(`Brewing coffee with ${water}`);
    return "Coffee";
  }
  
  function makeCoffee() {
    const water = boilWater();
    const coffee = brewCoffee(water);
    console.log(`Enjoy your ${coffee}`);
  }
  
  makeCoffee();
  