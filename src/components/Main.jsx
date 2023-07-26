import { useEffect, useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import notes from "../notes";
import NoteContainer from "./NoteContainer";
import TextareaAutosize from "@mui/base/TextareaAutosize";

function Main() {
  const [inputStat, setInputStat] = useState(false);
  const [allNotes, setNewNote] = useState(notes);
  const [noteHeading, setNoteHeading] = useState("");
  const [noteContent, setNoteContent] = useState("");
  // Correction for ResizeObserver loop limit exceeded error (Found in stackOverflow).
  useEffect(() => {
    window.addEventListener("error", (e) => {
      if (e.message === "ResizeObserver loop limit exceeded") {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });
  }, []);

  function openInput() {
    setInputStat(true);
  }

  function clickAway() {
    setInputStat(false);
  }

  function addNote() {
    const newNote = {
      key: allNotes.length + 1,
      id: allNotes.length,
      title: noteHeading,
      content: noteContent,
    };

    setNewNote((prevNotes) => {
      return [...prevNotes, newNote];
    });

    setNoteHeading("");
    setNoteContent("");
  }

  function handleChange(event) {
    if (event.target.name === "heading") {
      setNoteHeading(event.target.value);
    } else if (event.target.name === "content") {
      setNoteContent(event.target.value);
    }
  }

  function deleteNote(noteId) {
    setNewNote(() => {
      return allNotes.filter((note) => {
        return note.id !== noteId;
      });
    });
  }

  return (
    <div>
      <ClickAwayListener onClickAway={clickAway}>
        <div className="input-container">
          {inputStat === false && (
            <button onClick={openInput} className="base-box">
              Take a note
            </button>
          )}
          {inputStat === true && (
            <div>
              <input
                className="Iheading input-box"
                placeholder="Title"
                onChange={handleChange}
                name="heading"
                autoComplete="off"
                value={noteHeading}
              />
              <TextareaAutosize
                autoFocus
                minRows={3}
                className="Icontent input-box"
                placeholder="Take a note..."
                onChange={handleChange}
                name="content"
                value={noteContent}
              />
              <Fab
                onClick={addNote}
                size="small"
                variant="contained"
                className="add-fab"
                sx={{
                  backgroundColor: "#1E2022",
                  position: "absolute",
                  bottom: "5%",
                  right: "3%",
                  ":hover": {
                    backgroundColor: "#34383b",
                  },
                  zIndex: "10",
                }}
              >
                <AddIcon style={{ color: "white" }} />
              </Fab>
            </div>
          )}
        </div>
      </ClickAwayListener>
      <NoteContainer notesData={allNotes} deleteNote={deleteNote} />
    </div>
  );
}

export default Main;
