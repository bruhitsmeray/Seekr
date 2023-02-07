async function loadEvents(client){
    const { loadFiles } = require("../systems/loader.js");
    const ascii = require("ascii-table");
    const table = new ascii().setHeading("Events", "Status");

    await client.events.clear();

    const files = await loadFiles("events");
    files.forEach((file) => {
        const event = require(file);
        client.events.set(event.name);
        table.addRow(event.name + '.js', "✔ (loaded)");
    });

    return console.log(table.toString(), '\nSeekr successfully loaded the events.')
}

module.exports = { loadEvents };