import Note from "./Note";
import { Masonry } from "@mui/lab";

function NoteContainer(props) {
  return (
    <Masonry columns={3} spacing={2}>
      {props.notesData.map((note) => (
        <Note
          id={note.id}
          key={note.key}
          title={note.title}
          content={note.content}
          deleteNote={props.deleteNote}
        />
      ))}
    </Masonry>
  );
}

export default NoteContainer;
