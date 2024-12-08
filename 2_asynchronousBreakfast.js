/*
 * Dr. Abraham Aldaco
 * abraham.aldaco@gmail.com
 * December 9th, 2024
 */


/*
* PROBLEM
*/
function makeToast() {
   setTimeout(() => console.log("Toast is ready!"), 5000);
}

function fryEggs() {
   setTimeout(() => console.log("Eggs are ready!"), 2000);
}

function makeBreakfast() {
   console.log("Starting breakfast...");
   makeToast();
   fryEggs();
   console.log("Breakfast is being prepared...");
}
  
makeBreakfast();

/*
* SOLUTION
*/
async function makeToast() {
    return new Promise((resolve) =>
      setTimeout(() => resolve("Toast is ready!"), 2000)
    );
  }
  
  async function fryEggs() {
    return new Promise((resolve) =>
      setTimeout(() => resolve("Eggs are ready!"), 1000)
    );
  }
  
  async function makeBreakfast() {
    console.log("Starting breakfast...");
    const toast = await makeToast();
    console.log(toast);
    const eggs = await fryEggs();
    console.log(eggs);
    console.log("Breakfast is served!");
  }
  
  makeBreakfast();
  
