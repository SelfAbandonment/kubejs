PlayerEvents.loggedIn(event => {
    const player = event.player;
    const playerName = player.name.getString();
    const playerData = player.persistentData;
    let loginCount = playerData.getInt('login_count') || 0;
    const isFirstJoin = loginCount === 0;
    loginCount++;
    playerData.putInt('login_count', loginCount);
    
    if (isFirstJoin) {
        player.runCommandSilent('title @s times 10 80 20');
        player.runCommandSilent(`title @s subtitle {"text":"§e热烈欢迎 §a${playerName} §e加入服务器!","color":"yellow"}`);
        player.runCommandSilent('title @s title {"text":"§b§l欢迎新玩家!","color":"aqua","bold":true}');
        player.playSound("minecraft:entity.firework_rocket.launch", 1.0, 1.0);
        event.server.tell(Text.of(`§7[§a!§7] §b欢迎新玩家 §e${playerName} §b加入服务器!`));
    } else {
        // 常规登录特效
        player.runCommandSilent('title @s times 10 50 20');
        player.runCommandSilent(`title @s subtitle {"text":"§a${playerName} §6，祝您游戏愉快!","color":"green"}`);
        player.runCommandSilent('title @s title {"text":"§6§l欢迎回来!","color":"gold","bold":true}');
        player.playSound("minecraft:entity.player.levelup", 0.5, 1.0);
    }
});