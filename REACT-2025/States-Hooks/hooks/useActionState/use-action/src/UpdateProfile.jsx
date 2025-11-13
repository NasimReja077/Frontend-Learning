/* eslint-disable react-refresh/only-export-components */
import { useActionState } from "react";

function UpdateProfile() {
  const [error, submit, isPending] = useActionState(async (formData) => {
    const name = formData.get("name");
    if (!name) throw new Error("Name required");
    return `Saved ${name}`;
  });

  return (
    <form onSubmit={submit}>
      <input name="name" placeholder="Enter name" />
      <button disabled={isPending}>
        {isPending ? "Saving…" : "Save"}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default UpdateProfile();
