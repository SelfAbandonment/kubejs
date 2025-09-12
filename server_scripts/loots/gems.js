function addGemLoot(event, entity, item, chance) {
  let pool = event.getLootTable("minecraft:entities/" + entity).createPool();
  pool
    .when((conditions) => {
      conditions.randomChance(chance);
    })
    .addEntry(LootEntry.of(item));
}

LootJS.lootTables((event) => {
  addGemLoot(event, "ravager", "irons_jewelry:ruby", 1.0);
  addGemLoot(event, "skeleton", "irons_jewelry:sapphire", 0.001);
  addGemLoot(event, "husk", "irons_jewelry:topaz", 0.01);
  addGemLoot(event, "stray", "irons_jewelry:moonstone", 0.01);
  addGemLoot(event, "zombie_villager", "irons_jewelry:peridot", 0.3);
  addGemLoot(event, "spider", "irons_jewelry:onyx", 0.005);
  addGemLoot(event, "magma_cube", "irons_jewelry:garnet", 0.001);
});
