/*
 * Dr. Abraham Aldaco
 * abraham.aldaco@gmail.com
 * December 9th, 2024
 */


/*
* Coffee - Problem
*/
function boilWater() {
    console.log("Boiling water...");
    setTimeout(() => {
        console.log("Hot water")
        return "Hot water";
    }, 5000);
  }
  
function brewCoffee(water) {
    console.log(`Brewing coffee with ${water}`);
    setTimeout(() => {
        console.log("Coffee")
        return "Coffee";
    }, 2000);
    
}
  
function makeCoffee() {
    const water = boilWater();
    const coffee = brewCoffee(water);
    console.log(`Enjoy your ${coffee}`);
}
  
makeCoffee();

 /*
* Coffee - Solution
*/
async function boilWater() {
    console.log("Boiling water...");
    return new Promise((resolve) =>
      setTimeout(() => {
        console.log("Hot water");
        resolve("Hot water");;
      }, 5000)
    );
}
  
async function brewCoffee(water) {
    console.log(`Brewing coffee with ${water}`);
    return new Promise((resolve) =>
      setTimeout(() => {
        console.log("Coffee");
        resolve("Coffee");
      }, 2000)
    );
}
  
async function makeCoffee() {
    console.log("Starting coffee...");
    const water = await boilWater();
    const coffee = await brewCoffee(water);
    console.log(`Enjoy your ${coffee}`);
}
  
makeCoffee();
  