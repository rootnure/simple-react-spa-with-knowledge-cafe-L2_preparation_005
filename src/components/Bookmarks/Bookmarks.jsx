import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="flex flex-col gap-y-4 sticky top-4">
      <div className="bg-purple-100 py-4 px-8 rounded-lg">
        <p className="text-xl font-extrabold text-purple-600">
          Spent time on read: {readingTime} min
        </p>
      </div>
      <section className="bg-gray-100 p-4 rounded-lg space-y-3 max-h-[calc(100vh-175px)] overflow-auto">
        <h3 className="text-2xl font-bold text-center">
          Bookmarked Blogs: {bookmarks.length}
        </h3>
        {
          bookmarks.map((bookmark, idx) => <Bookmark key={`${bookmark.id}and${idx}`} bookmark={bookmark}></Bookmark>)
        }
      </section>
    </div>
  );
};

export default Bookmarks;