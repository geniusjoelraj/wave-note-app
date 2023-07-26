import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

/* eslint-disable jsx-a11y/heading-has-content */
function Note(note) {
  const [editable, setEditable] = useState("false");
  const [confirmDelete, setConfirmDelete] = useState("false");

  function editNote() {
    editable === "true" ? setEditable("false") : setEditable("true");
  }

  function triggerConfirmDelete() {
    setConfirmDelete("true");
  }

  return (
    <div className="note-container">
      <h3
        className="note-heading"
        style={{
          fontWeight: 500,
        }}
        contentEditable={editable}
      >
        {note.title}
      </h3>
      <p
        style={{ wordBreak: "break-all" }}
        className="note-heading"
        contentEditable={editable}
      >
        {note.content}
      </p>
      <button
        style={{
          backgroundColor: "transparent",
          position: "absolute",
          right: 10,
          bottom: 10,
          outline: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        {confirmDelete === "false" ? (
          <DeleteIcon
            sx={{ ":hover": { color: "#1e2022" } }}
            onClick={triggerConfirmDelete}
          />
        ) : (
          <div>
            <p
              style={{
                color: "red",
                display: "inline",
                position: "relative",
                bottom: "7px",
              }}
            >
              Delete Forever?
            </p>
            <DeleteForeverIcon
              sx={{ color: "red" }}
              onClick={() => {
                note.deleteNote(note.id);
              }}
            />
          </div>
        )}
      </button>
      <button
        style={{
          backgroundColor: "transparent",
          position: "absolute",
          left: 20,
          bottom: 10,
          outline: "none",
          border: "none",
          cursor: "pointer",
        }}
        onClick={editNote}
      >
        {editable === "true" ? (
          <SaveIcon sx={{ ":hover": { color: "#1e2022" } }} />
        ) : (
          <EditIcon sx={{ ":hover": { color: "#1e2022" } }} />
        )}
      </button>
    </div>
  );
}

export default Note;
