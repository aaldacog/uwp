/*
 * Dr. Abraham Aldaco
 * abraham.aldaco@gmail.com
 * December 9th, 2024
 */


/*
* Fetch with error
*/
function fetchData() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => console.log(data));

  for (const person of data) 
    console.log(person.firstName);
}
fetchData();


/*
*  Fetch solution using async/await
*/
async function fetchData() {
  const response = await fetch("./data.json");
  const data = await response.json();

  console.log(data);
  for (const person of data) 
    console.log(person.firstName);
}

fetchData();
