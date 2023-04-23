const { loadFiles } = require("../systems/loader.js");
const ascii = require("ascii-table");
const table = new ascii().setHeading("Slash Commands", "Status");

module.exports = async(client) => {
  const files = await loadFiles("commands");
  files.forEach((file) => {
    const cmd = require(file); // File var has the path including the file
    if(cmd.name){
      console.log(`${file}`);
      client.commands.set(cmd.name, file);
      table.addRow(cmd.name + '.js', "✔ (loaded)");
    }
  });  
  return console.log(table.toString(), '\nSeekr successfully loaded the commands.');
}