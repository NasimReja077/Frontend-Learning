import { useState } from "react"
import { useUpdateNoteMutation } from "../features/notes/notesApi";
import { FaSave } from "react-icons/fa";

export const EditNote = ({note}) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [updateNote, { isLoading }] = useUpdateNoteMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateNote({ id: note.id, title, content });
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <input
        className="input-field"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isLoading}
      />

      <textarea
        className="textarea-field"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={isLoading}
      />

      <button className="submit-btn" disabled={isLoading}>
        <FaSave/> Save Changes
      </button>
    </form>
  );
};
