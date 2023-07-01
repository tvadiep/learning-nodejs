const yargs = require("yargs");
const chalk = require("chalk");
const note = require("./note");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: false,
      type: "string",
    },
  },
  handler: (argv) => {
    note.addNote(argv.title, argv.body);
  },
});
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    note.removeNote(argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "List all of the notes",
  handler: () => {
    console.log("Here are all notes");
  },
});
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: (note) => {
    console.log("reading a note");
  },
});
// console.log(process.argv);
console.log(yargs.argv);
