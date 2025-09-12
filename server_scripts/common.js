ServerEvents.recipes((event) => {
  event.remove({
    mod: "create_dragons_plus",
    type: "create_dragons_plus:sanding",
  });

  let gem_shapeless_ticket = (gem) => {
    event
      .shapeless("kubejs:ticket", Item.of(gem, 9))
      .id(`kubejs:ticket_from_${gem.split(":")[1]}_mannul`);
  };
  gem_shapeless_ticket("irons_jewelry:ruby");
  gem_shapeless_ticket("irons_jewelry:sapphire");
  gem_shapeless_ticket("irons_jewelry:topaz");
  gem_shapeless_ticket("irons_jewelry:moonstone");
  gem_shapeless_ticket("irons_jewelry:peridot");
  gem_shapeless_ticket("irons_jewelry:onyx");
  gem_shapeless_ticket("irons_jewelry:garnet");

  event.shapeless("7x kubejs:ticket", [
    "irons_jewelry:ruby",
    "irons_jewelry:sapphire",
    "irons_jewelry:topaz",
    "irons_jewelry:moonstone",
    "irons_jewelry:peridot",
    "irons_jewelry:onyx",
    "irons_jewelry:garnet",
  ]);

  event.shaped("minecraft:elytra", ["CCC", "ADA", "HHH"], {
    A: 'minecraft:potion[potion_contents={potion:"apothic_attributes:extra_long_flying"}]',
    D: "minecraft:dragon_head",
    C: "minecraft:shulker_shell",
    H: "minecraft:phantom_membrane",
  });

  event.remove({ id: "fxntstorage:crafting_shaped/passer_block" });
  event.remove({ id: "fxntstorage:crafting_shaped/smart_passer_block" });
  event.remove({ id: "hotbath:hot_water_bucket" });
  event.remove({ id: "advancednetherite:netherite_iron_ingot" });
  event.remove({ id: "advancednetherite:netherite_gold_ingot" });
  event.remove({ id: "advancednetherite:netherite_emerald_ingot" });
  event.remove({ id: "advancednetherite:netherite_diamond_ingot" });

  event.shapeless("takesapillage:ravager_horn", [
    "minecraft:ominous_bottle",
    "minecraft:goat_horn",
  ]);

  event.shaped("kubejs:chlorophyte_sword", [" A ", " A ", " B "], {
    A: "kubejs:chlorophyte_ingot",
    B: "minecraft:stick",
  });

  event.shapeless("kubejs:compressed_tuff", ["9x minecraft:tuff"]);

  event.shapeless("9x minecraft:tuff", ["kubejs:compressed_tuff"]);
});
