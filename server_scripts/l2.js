ServerEvents.recipes((event) => {
  event.remove({
    id: "l2complements:enchantments/projectile_immunity",
  });
  event.remove({
    id: "l2complements:enchantments/explosion_immunity",
  });
  event.remove({
    id: "l2complements:enchantments/fire_immunity",
  });
  event.remove({
    id: "l2complements:enchantments/magic_immunity",
  });
  event.remove({
    id: "l2complements:vanilla/renew/ancient_debris",
  });
  event.remove({
    id: "l2complements:craft/totem_of_undying",
  });
  event.remove({
    id: "l2complements:craft/trident",
  });
  event.remove({
    id: "l2complements:craft/shulkerate_ingot",
  });
  event.remove({
    id: "l2complements:craft/sculkium_ingot",
  });

  event.replaceInput(
    {
      id: "l2complements:craft/sculkium_ingot",
    },
    "minecraft:copper_ingot",
    "advancednetherite:netherite_gold_ingot"
  );

  event.replaceInput(
    {
      id: "l2complements:craft/fragile_warp_stone",
    },
    "minecraft:ender_pearl",
    "minecraft:dragon_head"
  );
});
