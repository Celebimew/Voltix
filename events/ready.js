module.exports = {
  name: 'ready',
  execute(client) {
    console.log("<===================================================================>")
    console.log(`Ready! Logged in as ${client.user.tag} (ID: ${client.user.id})`);
    console.log("<===================================================================>")
    console.log(`Currently in ${client.guilds.cache.size} servers.`);
    console.log("<===================================================================>")
    console.log(`${client.commands.size} commands loaded`);
    console.log("<===================================================================>")

    client.user.setPresence({
      activities: [{ name: '.help', type: 'LISTENING' }],
      status: 'idle'
    });
  },
};