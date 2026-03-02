export default async function PostDetails({ params }) {
  const { id } = await params;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">
        Post ID: {id}
      </h1>
    </div>
  );
}