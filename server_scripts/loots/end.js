LootJS.lootTables((event) => {
  let table = event.getLootTable("minecraft:chests/end_city_treasure");
  table
    .createPool()
    .addEntry(
      LootEntry.of(
        'patchouli:guide_book[patchouli:book="umapyoi:trainers_manual"]'
      )
    );

  table
    .createPool()
    .when((conditions) => {
      conditions.randomChance(0.015);
    })
    .addEntry(LootEntry.of("irons_spellbooks:cinderous_soulcaller"));

  table
    .createPool()
    .when((conditions) => {
      conditions.randomChance(0.01);
    })
    .addEntry(LootEntry.of("l2complements:eternium_nugget"));

  table
    .createPool()
    .when((conditions) => {
      conditions.randomChance(0.001);
    })
    .addEntry(LootEntry.of("l2hostility:chaos_ingot"));

  table
    .createPool()
    .when((conditions) => {
      conditions.randomChance(0.001);
    })
    .addEntry(LootEntry.of('create:creative_blaze_cake'));

  table
    .createPool()
    .when((conditions) => {
      conditions.randomChance(0.0003);
    })
    .addEntry(LootEntry.of('create:creative_motor'));

  table
    .createPool()
    .when((conditions) => {
      conditions.randomChance(0.01);
    })
    .addEntry(LootEntry.of("umapyoi:jewel").setCount([1, 4]));

  event.create("touhou_little_maid:entities/fairy").createPool((pool) => {
    pool.addEntry(LootEntry.of("umapyoi:jewel").setCount([1, 2]).withWeight(9));
    pool.addEntry(
      LootEntry.of("umapyoi:blank_ticket").setCount([1, 6]).withWeight(1)
    );
  });

  table = event.getLootTable("minecraft:entities/shulker");
  table
    .createPool()
    .when((conditions) => {
      conditions.randomChance(0.1);
    })
    .addEntry(LootEntry.of("umapyoi:hachimi_mid"))
    .addEntry(LootEntry.of("umapyoi:hachimi_big"))
    .addEntry(LootEntry.of("umapyoi:royal_bitter"))
    .addEntry(LootEntry.of("umapyoi:cupcake"))
    .addEntry(LootEntry.of("umapyoi:sweet_cupcake"))
    .addEntry(LootEntry.of("umapyoi:small_energy_drink"))
    .addEntry(LootEntry.of("umapyoi:medium_energy_drink"))
    .addEntry(LootEntry.of("umapyoi:large_energy_drink"));
  table
    .createPool()
    .when((conditions) => {
      conditions.randomChance(0.1);
    })
    .addEntry(LootEntry.of("umapyoi:jewel"));

  table = event.getLootTable("minecraft:entities/ender_dragon");
  table.createPool().addEntry(LootEntry.of("minecraft:dragon_head"));
});
