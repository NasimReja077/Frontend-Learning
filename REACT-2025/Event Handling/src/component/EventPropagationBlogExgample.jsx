export const EventPropagationBlogExgample = () => {
  const handlePageClick = () => {
    console.log("📊 Blog Page Clicked (Analytics Tracking)");
  };

  const handleCardClick = () => {
    console.log("📖 Blog Card Opened (Redirect to Blog Details)");
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    console.log("❤️ Blog Liked!");
  };

  const handleShareClick = (e) => {
    e.stopPropagation();
    console.log("📤 Blog Shared!");
  };

  return (
    <div
      onClick={handlePageClick}
      className="min-h-screen p-8 bg-gray-100 flex justify-center items-center"
    >
      <div
        onClick={handleCardClick}
        className="max-w-md bg-white shadow-lg rounded-xl p-6 cursor-pointer"
      >
        <h2 className="text-2xl font-bold mb-2">React Event Propagation in Blogs</h2>
        <p className="text-gray-600 mb-4">
          This blog explains how capturing and bubbling works in React with real-life blog examples.
        </p>

        <div className="flex gap-4">
          <button
            onClick={handleLikeClick}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            ❤️ Like
          </button>

          <button
            onClick={handleShareClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            📤 Share
          </button>
        </div>
      </div>
    </div>
  );
};
