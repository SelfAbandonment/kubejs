ServerEvents.recipes((event) => {
  let addAndesiteMechanism = (target) => {
    event.stonecutting(target, "createages:andesite_machine");
  };

  [
    "create:andesite_alloy",
    "create:gearbox",
    "create:vertical_gearbox",
    "create:cogwheel",
    "create:large_cogwheel",
    "create:clutch",
    "create:gearshift",
    "create:encased_chain_drive",
    "create:adjustable_chain_gearshift",
    "create:chain_conveyor",
    "create:water_wheel",
    "create:large_water_wheel",
    "create:encased_fan",
    "create:millstone",
    //"create:crushing_wheel",
    "create:mechanical_press",
    "create:mechanical_mixer",
    "create:basin",
    "create:depot",
    "create:weighted_ejector",
    "create:chute",
    "create:metal_bracket",
    "create:mechanical_drill",
    "create:mechanical_saw",
    "create:portable_storage_interface",
    "create:redstone_contact",
    "create:mechanical_harvester",
    "create:mechanical_plough",
    //"create:mechanical_roller",
    "create:andesite_funnel",
    "create:andesite_tunnel",
    "create:item_hatch",
    "create:packager",
    "create:repackager",
    "create:package_frogport",
    "create:stock_link",
    "create:stock_ticker",
    "create:display_board",
  ].map(addAndesiteMechanism);

  let addBrassMechanism = (target) => {
    event.stonecutting(target, "createages:brass_machine");
  };

  [
    "create:brass_funnel",
    "create:brass_tunnel",
    "create:smart_chute",
    "create:mechanical_arm",
    "create:content_observer",
    "create:mechanical_crafter",
    "create:deployer",
    "create:sequenced_gearshift",
    "create:stockpile_switch",
  ].map(addBrassMechanism);
});
