/*
    1. In this module, define and export a harvestPlants function.
    2. The harvestPlants function must accept the plants array as input.
    3. The function will return an array of seed objects.
    4. Iterate the array of growing plants. On each plant, get the value of the output property.
    5. Add that many of the plant objects to the array that the function returns.
    6. The exception is corn. Half of your corn will be sold to cattle ranchers, so only half of the output of each corn plant will be added to the array that this function returns.
*/

export const harvestPlants = (growingPlants) => {
  let arrayOfSeedObjects = [];
  for (const plant of growingPlants) {
    if (plant.type === "Corn") {
      for (let i = 0; i < plant.output / 2; i++) {
        arrayOfSeedObjects.push(plant);
      }
    } else {
      for (let i = 0; i < plant.output; i++) {
        arrayOfSeedObjects.push(plant);
      }
    }
  }
  return arrayOfSeedObjects;
};
