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
    note.printAllNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    note.getANote(argv.title);
  },
});

yargs.parse();
