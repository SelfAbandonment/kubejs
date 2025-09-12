ServerEvents.recipes((event) => {
  event.remove({
    mod: "alloy_smelter",
    type: "alloy_smelter:smelting",
  });
});
