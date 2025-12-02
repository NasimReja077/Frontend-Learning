import { useState } from "react"
import { useAddNoteMutation } from "../features/notes/notesApi";
import { FaPlus } from "react-icons/fa";

export const NoteForm = ()=> {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [addNote] = useAddNoteMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addNote({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <input
        className="input-field"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
      />

      <textarea
        className="textarea-field"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note Content"
      />

      <button className="submit-btn">
        <FaPlus/> Add Note
      </button>
    </form>
  );
};
