import { EditNote } from "./components/EditNote"
import { NoteForm } from "./components/NoteForm"
import { NoteList } from "./components/NoteList"

const exampleNote = {
  id:1,
  title: "First Note Edit",
  content: "This is the content of the First notes but Edit"
}
const App = () => {
  return (
    <div className="app-container">
      <NoteForm />
      <NoteList />
      <EditNote note={exampleNote} />
    </div>
  )
}

export default App