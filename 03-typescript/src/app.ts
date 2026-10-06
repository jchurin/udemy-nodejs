import { heroes } from "./data/heroes.js";
import { findHeroById } from "./services/hero.service.js";

const hero = findHeroById(1);

console.log(hero?.name ?? "Hero not found");
