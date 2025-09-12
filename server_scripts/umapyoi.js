ServerEvents.recipes((event) => {
  event.remove({ id: "umapyoi:trainers_manual" });

  event.shapeless("umapyoi:blank_ticket", [
    'patchouli:guide_book[patchouli:book="umapyoi:trainers_manual"]',
  ]);

  event.remove({ id: "umapyoi:jewel" });
  event.remove({ id: "umapyoi:blank_ticket" });

  event.shapeless("4x umapyoi:blank_ticket", [
    "kubejs:ticket",
    "2x umapyoi:jewel",
  ]);

  event.shapeless("umapyoi:jewel", [
    "umapyoi:blank_ticket",
    "minecraft:golden_carrot",
    "2x minecraft:emerald_block",
    "2x minecraft:diamond_block"
  ]);
});
