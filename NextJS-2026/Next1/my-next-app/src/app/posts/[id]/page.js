export default function PostDetails({ params }) {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">
        Post ID: {params.id}
      </h1>
    </div>
  );
}