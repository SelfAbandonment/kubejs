StartupEvents.registry("item", (event) => {
  event
    .create("chlorophyte_sword", "sword")
    .tier("chlorophyte")
    .maxDamage(1800);
});

ItemEvents.toolTierRegistry((event) => {
  event.addBasedOnExisting("chlorophyte", "diamond", (tier) => {
    tier.uses = 1800;
    tier.speed = 8.0;
    tier.enchantmentValue = 5;
    tier.repairIngredient = "kubejs:chlorophyte_ingot";
  });
});

ItemEvents.modification((event) => {
  event.modify('takesapillage:ravager_horn', item => {
    item.maxDamage = 16
  })

  event.modify("kubejs:chlorophyte_sword", (item) => {
    let modifier = Item.of(item.item().id)
      .attributeModifiers.withModifierAdded(
        "minecraft:player.entity_interaction_range",
        {
          amount: 0.5,
          operation: "add_value",
          id: "chlorophyte_interaction_range",
        },
        "mainhand"
      )
      .withModifierAdded(
        "minecraft:generic.attack_damage",
        {
          amount: 6.5,
          id: "minecraft:base_attack_damage",
          operation: "add_value",
        },
        "mainhand"
      );
    item.setAttributeModifiersWithTooltip(modifier.modifiers());
  });
});
