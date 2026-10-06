import { getPokemonById } from "../../src/js-foundation/06-promises";

describe("Promises", () => {
  test("getPokemonById should return a pokemon", async () => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);

    expect(pokemonName).toBe("bulbasaur");
  });

  test("getPokemonById should return an error if pokemon does not exist", async () => {
    const id = 10000000000000;
    try {
      await getPokemonById(id);
    } catch (error: any) {
      if (error?.message)
        expect(error.message).toBe(`Pokemon not found with id: ${id}`);
    }
  });
});
