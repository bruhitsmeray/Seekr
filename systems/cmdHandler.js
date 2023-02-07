async function loadCommands(client){
    const { loadFiles } = require("../systems/loader.js");
    const ascii = require("ascii-table");
    const table = new ascii().setHeading("Commands", "Status");

    await client.commands.clear();
    let commandsArray = [];

    const files = await loadFiles("commands");
    files.forEach((file) => {
        const command = require(file);
        client.commands.set(command.data.name, command);

        commandsArray.push(command.data.toJSON());
        table.addRow(command.data.name + '.js', "✔ (loaded)");
    });

    client.application.commands.set(commandsArray);
    return console.log(table.toString(), '\nSeekr successfully loaded the commands.')
}

module.exports = { loadCommands };