const fs = require("fs");
const chalk = require("chalk");

function getNotes() {
  return "Your notes...";
}

function addNote(title, body) {
  const notes = loadNotes();
  const duplicatedNotes = notes.filter((note) => note.title === title);
  if (duplicatedNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen("New notes added"));
  } else {
    console.error(chalk.bgRed("Note already added"));
  }
}

const saveNotes = function (notes) {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const loadNotes = function () {
  try {
    const dataJSON = fs.readFileSync("notes.json").toString();
    const data = JSON.parse(dataJSON);
    return data;
  } catch (err) {
    return [];
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => note.title !== title);
  fs.writeFileSync("notes.json", JSON.stringify(updatedNotes));
  console.log(chalk.bgGreen("Note removed"));
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
