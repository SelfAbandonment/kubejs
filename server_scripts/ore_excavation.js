function removeOreVeinTypes(event, type) {
  event.remove({ id: "createoreexcavation:ore_vein_type/" + type });
  event.remove({ id: "createoreexcavation:drilling/" + type });
  event.remove({ id: "createoreexcavation:extractor/" + type });
}

ServerEvents.recipes((event) => {
  removeOreVeinTypes(event, "hardened_diamond");
  removeOreVeinTypes(event, "water");
  removeOreVeinTypes(event, "zinc");
  removeOreVeinTypes(event, "copper");
  removeOreVeinTypes(event, "emerald");

  event.remove({ id: "createoreexcavation:cutting/diamond_cutting" });
  event.remove({ id: "createoreexcavation:cutting/emerald_cutting" });
});
