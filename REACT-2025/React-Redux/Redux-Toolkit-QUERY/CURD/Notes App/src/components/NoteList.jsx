import { useDeleteNoteMutation, useGetNotesQuery } from "../features/notes/notesApi";
import { FaTrash, FaEdit } from "react-icons/fa";

export const NoteList = () =>{
     const { data: notes = [], isLoading, isError, error } = useGetNotesQuery();
     const [deleteNote] = useDeleteNoteMutation();

     if (isLoading) return <div>Loading...</div>;
     if (isError) return <div>Error loading notes: {String(error)}</div>;
    //  console.log(notes);

     return (
    <div>
      {notes.map((note) => (
        <div className="card" key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>

          <button onClick={() => deleteNote(note.id)}>
            <FaTrash/> Delete
          </button>

          <button style={{background:"#2e90ff"}}>
            <FaEdit/> Edit
          </button>
        </div>
      ))}
    </div>
  );
}