ServerEvents.recipes((event) => {
  event.remove({
    mod: "irons_spellbooks"
  });

  event.shapeless("2x irons_spellbooks:mithril_scrap", 'irons_spellbooks:mithril_ingot')
  event.shapeless("irons_spellbooks:mithril_ingot", '2x irons_spellbooks:mithril_scrap')

  event.shaped('irons_spellbooks:hither_thither_wand', [
    "  H",
    " D ",
    "T  ",
  ], {
    H: 'minecraft:amethyst_cluster',
    D: 'minecraft:stick',
    T: 'irons_spellbooks:pyrium_ingot'
  });

  event.blasting('irons_spellbooks:pyrium_ingot', 'irons_spellbooks:hellrazor')
})