ServerEvents.recipes(event => {
  // 移除 create_mechanical_spawner 的问题配方
  event.remove({ id: 'create_mechanical_spawner:spawner/random' });
  
  // 如果需要，也可以移除其他相关配方
  // event.remove({ output: 'create_mechanical_spawner:spawn_fluid_random' });
});