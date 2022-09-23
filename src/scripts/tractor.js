import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js";

/*
  1. Create a scripts/tractor.js module.
  2. In this module, define and export a plantSeeds function.
    The function must accept the year's planting plan as input (i.e. it must define a parameter).
    
    The plan is an array. It contains 4 arrays representing the rows in the field to be plants. Figure out how to iterate both the parent array and the child arrays.

  3. As you iterate the row of food types to be planted, invoke the corresponding factory function (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).

  4. Take that seed and add it to the array of plants in the field module.
*/

export const plantSeeds = (yearlyPlan) => {
  for (const row of yearlyPlan) {
    for (const plant of row) {
      let veg;
      switch (plant) {
        case "Asparagus":
          veg = createAsparagus();
          break;
        case "Corn":
          veg = createCorn();
          break;
        case "Potato":
          veg = createPotato();
          break;
        case "Soybean":
          veg = createSoybean();
          break;
        case "Sunflower":
          veg = createSunflower();
          break;
        case "Wheat":
          veg = createWheat();
          break;
      }
      addPlant(veg);
    }
  }
};
