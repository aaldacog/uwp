/*
 * Dr. Abraham Aldaco
 * abraham.aldaco@gmail.com
 * December 2024
 */

/*
* Synchronous processing
*
* Simple example with two functions, where one function depend
* on the result of the previous one
*/

// Function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}

// Function to calculate the cost of flooring based on area
function calculateFlooringCost(area, costPerSquareUnit) {
    return area * costPerSquareUnit;
}

function flooringCost() {

    const length = 10; // Length of the room
    const width = 15;  // Width of the room
    const costPerSquareUnit = 5; // Cost per square unit

    // Step 1: Calculate the area
    const area = calculateArea(length, width);
    console.log(`Area of the room: ${area} square units`);

    // Step 2: Calculate the flooring cost based on the area
    const totalCost = calculateFlooringCost(area, costPerSquareUnit);
    console.log(`Total flooring cost: $${totalCost}`);
}


flooringCost();