function addPotionLoot(event, table, chance) {
  let pool = event.getLootTable("minecraft:chests/" + table).createPool();
  pool
    .when((conditions) => {
      conditions.randomChance(chance);
    })
    .addEntry(LootEntry.of("c6c:recall_potion"));
}

LootJS.lootTables((event) => {
    addPotionLoot(event, "village/village_cartographer", 1.0);
    addPotionLoot(event, "village/village_desert_house", 0.5);
    addPotionLoot(event, "village/village_plains_house", 0.5);
    addPotionLoot(event, "village/village_savanna_house", 0.5);
    addPotionLoot(event, "village/village_snowy_house", 0.5);
    addPotionLoot(event, "village/village_taiga_house", 0.5);
    addPotionLoot(event, "village/village_fisher", 0.25);

    event
        .getLootTable("minecraft:gameplay/fishing/treasure")
        .firstPool()
        .addEntry(LootEntry.of("c6c:recall_potion").withWeight(1))
});
