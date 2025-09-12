let $DataComponentType = Java.loadClass(
  "net.minecraft.core.component.DataComponentType"
);
ItemEvents.modifyTooltips((event) => {
  event.add("irons_jewelry:ruby", {
    translate: "kubejs.tooltips.ruby_loot",
  });
  event.add("irons_jewelry:sapphire", {
    translate: "kubejs.tooltips.sapphire_loot",
  });
  event.add("irons_jewelry:topaz", {
    translate: "kubejs.tooltips.topaz_loot",
  });
  event.add("irons_jewelry:moonstone", {
    translate: "kubejs.tooltips.moonstone_loot",
  });
  event.add("irons_jewelry:peridot", {
    translate: "kubejs.tooltips.peridot_loot",
  });
  event.add("irons_jewelry:onyx", {
    translate: "kubejs.tooltips.onyx_loot",
  });
  event.add("irons_jewelry:garnet", {
    translate: "kubejs.tooltips.garnet_loot",
  });
  event.add("hotbath:hot_water_bucket", {
    translate: "kubejs.tooltips.hot_water_bucket",
  });

  event.add(
    "touhou_little_maid:smart_slab_empty",
    Text.of({
      translate: "kubejs.tooltips.empty_smart_slab",
    }).gold()
  );
  event.add(
    "touhou_little_maid:smart_slab_empty",
    Text.of({
      translate: "kubejs.tooltips.smart_slab",
    }).gold()
  );
  event.add(
    "touhou_little_maid:smart_slab_init",
    Text.of({
      translate: "kubejs.tooltips.smart_slab",
    }).gold()
  );
  event.add(
    "touhou_little_maid:smart_slab_has_maid",
    Text.of({
      translate: "kubejs.tooltips.smart_slab",
    }).gold()
  );
  event.modify("touhou_little_maid:smart_slab_has_maid", (t) => {
    t.dynamic("smart_slab_maid_could_exchange_notice");
  });

  event.add("irons_spellbooks:cinderous_soulcaller", {
    translate: "kubejs.tooltips.cinderous_soulcaller",
  });

  event.add(
    [
      "minecraft:apple",
      "minecraft:baked_potato",
      "minecraft:beetroot",
      "minecraft:blaze_cake",
      "minecraft:cake",
      "minecraft:carrot",
      "minecraft:chocolate_berry",
      "minecraft:chorus_fruit",
      "minecraft:enchanted_golden_apple",
      "minecraft:fallback",
      "minecraft:fish",
      "minecraft:glistering_melon",
      "minecraft:glow_berry",
      "minecraft:golden_apple",
      "minecraft:golden_carrot",
      "minecraft:honeyed_apple",
      "minecraft:melon_block",
      "minecraft:melon_slice",
      "minecraft:poison_potato",
      "minecraft:potato",
      "minecraft:pufferfish",
      "minecraft:pumpkin_block",
      "minecraft:pumpkin_pie",
      "minecraft:suspicious_stew",
      "minecraft:sweet_berry",
      "farmersdelight:cabbage",
      "farmersdelight:apple_pie",
      "farmersdelight:sweet_berry_cheesecake",
      "farmersdelight:chocolate_pie",
      "farmersdelight:cake_slice",
      "farmersdelight:apple_pie_slice",
      "farmersdelight:sweet_berry_cheesecake_slice",
      "farmersdelight:chocolate_pie_slice",
      "farmersdelight:onion",
      "farmersdelight:pumpkin_slice",
      "farmersdelight:rotten_tomato",
      "farmersdelight:tomato",
      "farmersdelight:cod_roll",
      "farmersdelight:salmon_roll",
      "farmersdelight:honey_glazed_ham",
      "farmersdelight:melon_popsicle",
    ],
    {
      translate: "kubejs.tooltips.potato_cannon",
    }
  );

  event.add(
    [
      "farmersdelight:cod_roll",
      "farmersdelight:salmon_roll",
      "farmersdelight:honey_glazed_ham",
      "farmersdelight:melon_popsicle",
    ],
    Text.of({
      translate: "kubejs.tooltips.potato_cannon_osusume",
    }).gold()
  );

  event.add("irons_spellbooks:chained_book", {
    translate: "kubejs.tooltips.chained_book",
  });

  event.add("irons_spellbooks:hither_thither_wand", {
    translate: "kubejs.tooltips.hither_thither_wand",
  });

  event.add(
    ["irons_spellbooks:mithril_scrap", "irons_spellbooks:mithril_ingot"],
    {
      translate: "kubejs.tooltips.mithril",
    }
  );

  event.add("c6c:abyssal_ticket", {
    translate: "kubejs.tooltips.not_implemented",
  });
});
const $MAID_DATAS = Java.loadClass(
  "com.github.tartaricacid.touhoulittlemaid.init.InitDataComponent"
);
let $CustomData = Java.loadClass(
  "net.minecraft.world.item.component.CustomData"
);
ItemEvents.dynamicTooltips("smart_slab_maid_could_exchange_notice", (e) => {
  let item = e.item;
  let maid_info = $CustomData(item.get($MAID_DATAS.MAID_INFO.get()));
  if (maid_info) {
    let maidCompound = maid_info.copyTag();
    if (!maidCompound.hasUUID("Owner")) {
      e.add(
        Text.of({
          translate: "kubejs.tooltips.smart_slab_maid_could_exchange_notice1",
        }).darkPurple()
      );
      e.add(
        Text.of({
          translate: "kubejs.tooltips.smart_slab_maid_could_exchange_notice2",
        }).lightPurple()
      );
      return;
    }
  }
});
