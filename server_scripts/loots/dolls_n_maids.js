function addMaidLoot(event, block, item, chance) {
  let pool = event.getLootTable("kaleidoscope_doll:blocks/" + block).createPool();
  pool
    .when((conditions) => {
      conditions.randomChance(chance);
    })
    .addEntry(LootEntry.of(item));
}

LootJS.lootTables((event) => {
  addMaidLoot(event, "green_doll_gift_box", 'touhou_little_maid:smart_slab_init', 0.9);
  addMaidLoot(event, "green_doll_gift_box", 'kubejs:ticket', 0.1);
  addMaidLoot(event, "yellow_doll_gift_box", 'touhou_little_maid:smart_slab_init', 0.1);
  addMaidLoot(event, "yellow_doll_gift_box", 'kubejs:ticket', 0.1);
  addMaidLoot(event, "purple_doll_gift_box", 'touhou_little_maid:smart_slab_init', 0.1);
  addMaidLoot(event, "purple_doll_gift_box", 'kubejs:ticket', 0.1);
});
