console.log("Welcome to the main module");
import { createPlan } from "./plan.js";
import { createAsparagus } from "../scripts/seeds/asparagus.js";
import { createCorn } from "../scripts/seeds/corn.js";
import { createPotato } from "../scripts/seeds/potato.js";
import { createSoybean } from "../scripts/seeds/soybean.js";
import { createSunflower } from "../scripts/seeds/sunflower.js";
import { createWheat } from "../scripts/seeds/wheat.js";
import { addPlant } from "./field.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { Catalog } from "./catalog.js";

const yearlyPlan = createPlan();

const plantedField = plantSeeds(yearlyPlan);
const growingPlants = usePlants();

const harvest = harvestPlants(growingPlants);

const parentHTMLElement = document.querySelector(".container");
parentHTMLElement.innerHTML = Catalog(harvest);
