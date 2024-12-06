/*
 * Dr. Abraham Aldaco
 * abraham.aldaco@gmail.com
 * December 2024
 */

/*
* Synchronous processing
*
* The next code executes a sequential order of operations
*/


function multiplyOperation(argumentValue){
    argumentValue = argumentValue * 2;
    return argumentValue;
}

function addOperation(argumentValue){
    argumentValue = argumentValue + 1;
    return argumentValue;
}

function runSynchronous(){
    let value = 100;

    let valuedAdded = addOperation(value);
    console.log("The value after add operation is :"+valuedAdded);

    let valueMultiplied = multiplyOperation(valuedAdded);
    console.log("The value after multiply operation is :"+valueMultiplied );
}

console.log("Before ...");
runSynchronous();
console.log("... After");