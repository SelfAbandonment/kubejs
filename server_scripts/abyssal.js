ServerEvents.recipes((event) => {
  let addLight = (target) => {
    event.stonecutting(target, "minecraft:light");
  };

  [
    'minecraft:light[block_state={level:"14"}]',
    'minecraft:light[block_state={level:"13"}]',
    'minecraft:light[block_state={level:"12"}]',
    'minecraft:light[block_state={level:"11"}]',
    'minecraft:light[block_state={level:"10"}]',
    'minecraft:light[block_state={level:"9"}]',
    'minecraft:light[block_state={level:"8"}]',
    'minecraft:light[block_state={level:"7"}]',
    'minecraft:light[block_state={level:"6"}]',
    'minecraft:light[block_state={level:"5"}]',
    'minecraft:light[block_state={level:"4"}]',
    'minecraft:light[block_state={level:"3"}]',
    'minecraft:light[block_state={level:"2"}]',
    'minecraft:light[block_state={level:"1"}]',
  ].map(addLight);

  event.shaped("c6c:abyssal_ticket", ["AAA", "ABA", "AAA"], {
    A: 'l2hostility:miracle_powder',
    B: "#kaleidoscope_doll:doll_machine_tokens"
  });

  event.shaped("c6c:abyssal_ticket", ["AAA", "ABA", "AAA"], {
    A: 'l2hostility:chaos_ingot',
    B: 'advancednetherite:netherite_gold_ingot'
  });
});