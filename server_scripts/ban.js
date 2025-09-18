const restrictedItems = [
    'create:creative_crate',
    'minecraft:command_block',
    'minecraft:barrier',
    'minecraft:structure_block',
    'minecraft:jigsaw',
    'minecraft:light',
    'minecraft:debug_stick',
    'create:brown_toolbox',
    'create:creative_fluid_tank',
    'irons_spellbooks:arcane_anvil',
    'automobility:rear_attachment'
];
const itemChineseNames = {
    'create:creative_crate': '创造板条箱',
    'minecraft:command_block': '命令方块',
    'minecraft:barrier': '屏障',
    'minecraft:structure_block': '结构方块',
    'minecraft:jigsaw': '拼图方块',
    'minecraft:light': '光源方块',
    'minecraft:debug_stick': '调试棒',
    'create:brown_toolbox': '棕色工具箱',
    'create:creative_fluid_tank': '创造流体储罐',
    'irons_spellbooks:arcane_anvil': '奥术铁砧',
    'automobility:rear_attachment':'车尾箱子附件'
};
function getItemChineseName(itemId) {
    return itemChineseNames[itemId] || itemId;
}
restrictedItems.forEach(itemId => {
    ItemEvents.canPickUp(itemId, event => {
        event.cancel();
    });
    ItemEvents.dropped(itemId, event => {
        event.cancel();
    });
    BlockEvents.placed(itemId, event => {
        event.cancel();
        event.block.set('minecraft:air');
    });
    ItemEvents.rightClicked(itemId, event => {
        event.cancel();
    });
    BlockEvents.rightClicked(itemId, event => {
        event.block.set('minecraft:air');
    });
});
PlayerEvents.loggedIn(event => {
    const player = event.player;
    const playerName = player.name.getString();
    let foundRestrictedItems = false;
    player.inventory.items.forEach(item => {
        if (restrictedItems.includes(item.id)) {
            foundRestrictedItems = true;
            const itemName = getItemChineseName(item.id);
            item.count = 0;
            console.log(`发现玩家 ${playerName}背包中有受限物品: ${itemName}`);
            
            if (event.server) {
                event.server.tell(Text.of(`§c玩家${playerName}有非法物品${itemName}已被系统移除!`));
            }
        }
    });
    player.enderChestInventory.items.forEach(item => {
        if (restrictedItems.includes(item.id)) {
            foundRestrictedItems = true;
            const itemName = getItemChineseName(item.id);
            item.count = 0;
            console.log(`发现玩家 ${playerName} 末影箱中有受限物品: ${itemName}`);
            if (event.server) {
                event.server.tell(Text.of(`§c玩家${playerName}有非法物品${itemName}已被系统移除!`));
            }
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
                    foundRestrictedItems = true;
                    const itemName = getItemChineseName(item.id);
                    item.count = 0;
                    console.log(`定期检查发现玩家${playerName}背包中有受限物品${itemName}`);
                    server.tell(Text.of(`§c玩家${playerName}有非法物品${itemName}已被系统移除!`));
                }
            });
            player.enderChestInventory.items.forEach(item => {
                if (restrictedItems.includes(item.id)) {
                    foundRestrictedItems = true;
                    const itemName = getItemChineseName(item.id);
                    item.count = 0;
                    console.log(`定期检查发现玩家${playerName} 末影箱中有受限物品: ${itemName}`);
                    server.tell(Text.of(`§c玩家${playerName}有非法物品${itemName}已被系统移除!`));
                }
            });
        });
    }
});
console.log("物品与方块限制已加载，受限物品: " + restrictedItems.join(", "));