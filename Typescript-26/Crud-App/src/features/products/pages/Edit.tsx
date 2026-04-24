import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../api/localApi";
import toast from "react-hot-toast";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: 0,
    image: "",
  });

  useEffect(() => {
    const data = getProductById(id!);
    if (data) setForm(data);
  }, []);

  const handleImage = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result as string });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    updateProduct(id!, form);
    toast.success("Updated!");
    navigate("/");
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-3">
      <input
        value={form.name}
        className="w-full border p-2"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        value={form.price}
        type="number"
        className="w-full border p-2"
        onChange={(e) => setForm({ ...form, price: +e.target.value })}
      />

      <input type="file" onChange={handleImage} />

      {form.image && (
        <img src={form.image} className="h-32 rounded" />
      )}

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white w-full py-2 rounded"
      >
        Update
      </button>
    </div>
  );
}