// Code your solution here
/*
findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive. 
*/

function findMatching(drivers, name) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
}

const driversArray = ["John", "Mark", "Noah"];

const matchingDrivers = findMatching(driversArray, "JOHN");
console.log(matchingDrivers);

//question 2 
function fuzzyMatch (drivers, letters){
    return drivers.filter(
        (driver) => driver.startsWith(letters))
}
const driversArray1 = ["John", "Mark", "Noah"];
  const matchingDrivers1 = fuzzyMatch(driversArray, "No");

  console.log(matchingDrivers1); 

  //question 3 

  function matchName (drivers, name){
return drivers.filter(
    driver => driver.name === name)

  }

  const driversArray2 = [
    { name: "John", hometown: "New York" },
    { name: "Mark", hometown: "Los Angeles" },
    { name: "Noah", hometown: "Chicago" },]

    const matchingDrivers2 = matchName(driversArray2, "Mark");
    console.log(matchingDrivers2);
