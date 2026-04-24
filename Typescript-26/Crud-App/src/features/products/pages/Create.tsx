import { useState } from "react";
import { createProduct } from "../api/localApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [form, setForm] = useState({
    name: "",
    price: 0,
    image: "",
  });

  const navigate = useNavigate();

  // Convert image to base64
  const handleImage = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result as string });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!form.name || !form.image) {
      toast.error("All fields required");
      return;
    }

    createProduct(form);
    toast.success("Created!");
    navigate("/");
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-3">
      <input
        className="w-full border p-2"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="w-full border p-2"
        type="number"
        placeholder="Price"
        onChange={(e) => setForm({ ...form, price: +e.target.value })}
      />

      <input type="file" onChange={handleImage} />

      {form.image && (
        <img src={form.image} className="h-32 rounded" />
      )}

      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white w-full py-2 rounded"
      >
        Save
      </button>
    </div>
  );
}