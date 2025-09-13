ServerEvents.recipes((event) => {
  event.remove({
    mod: "create_mechanical_spawner",
    type: "create:mixing"
  });
  event.remove({
    mod: "create_mechanical_spawner",
    type: "create_mechanical_spawner:spawner",
    not: { id: "create_mechanical_spawner:spawner/random" },
  });
});
