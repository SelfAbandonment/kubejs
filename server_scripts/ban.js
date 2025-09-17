const restrictedItems = [
    'create:creative_crate',
    'minecraft:command_block',
    'minecraft:barrier',
    'minecraft:structure_block',
    'minecraft:jigsaw',
    'minecraft:light',
    'minecraft:debug_stick'
];
const playerName = player.name.getString();

restrictedItems.forEach(itemId => {
    ItemEvents.canPickUp(itemId, event => {
        event.cancel();
        console.log(`阻止玩家 ${event.player?.name?.getString()} 拾取: ${itemId}`);
        event.server.tell(Text.of(`${playerName}拾取非法物品`));
    });
    
    ItemEvents.dropped(itemId, event => {
        event.cancel();
        console.log(`阻止玩家 ${event.player?.name?.getString()} 丢弃: ${itemId}`);
        event.server.tell(Text.of(`${playerName}丢弃非法物品`));
    });
    BlockEvents.placed(itemId, event => {
        const player = event.player;
        event.cancel();
        event.block.set('minecraft:air')
        event.server.tell(Text.of(`${playerName}放置非法物品，已移除`));
    });
    ItemEvents.rightClicked(itemId, event => {
        const player = event.player;
        console.log(`阻止玩家 ${player?.name?.getString()} 使用: ${itemId}`);
        event.cancel();
    });
    BlockEvents.rightClicked(itemId, event => {
        const player = event.player;
        
        console.log(`阻止玩家 ${player?.name?.getString()} 交互: ${itemId}`);
        event.cancel();
    });
});


PlayerEvents.loggedIn(event => {
    const player = event.player;
    const playerName = player.name.getString();
    let foundRestrictedItems = false;
    player.inventory.items.forEach(item => {
        if (restrictedItems.includes(item.id)) {
            event.server.tell(`发现玩家 ${playerName} 背包中有受限物品: ${item.id}`);
            foundRestrictedItems = true;
            item.count = 0;
            event.server.tell(Text.of(`§c检测到非法物品 ${item.id} 已被移除!`));
        }
    });
    
});
ServerEvents.tick(event => {
    const { server } = event;

    if (server.tickCount % 300 === 0) {
        server.players.forEach(player => {
            let foundRestrictedItems = false;
            const playerName = player.name.getString();
            player.inventory.items.forEach(item => {
                if (restrictedItems.includes(item.id)) {
                    event.server.tell(`定期检查发现玩家 ${playerName} 背包中有受限物品: ${item.id}`);
                    foundRestrictedItems = true;
                    
                    // 移除物品
                    item.count = 0;
                    event.server.tell(Text.of(`§c检测到非法物品 ${item.id} 已被系统移除!`));
                }
            });
        });
    }
});


console.log("物品与方块限制系统已加载，受限物品: " + restrictedItems.join(", "));