import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

export default function Base() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    setBookmarks([...bookmarks, blog]);
  }

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);
    // remove mark as read blog from bookmarks
    const newBookmarks = bookmarks.filter(bookmark => id !== bookmark.id);
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <header className="max-w-6xl mx-auto">
        <Header></Header>
      </header>
      <main className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-4 mt-6">
        <section className="lg:col-span-2 grid gap-y-8">
          <Blogs
            handleAddToBookmark={handleAddToBookmark}
            handleMarkAsRead={handleMarkAsRead}></Blogs>
        </section>
        <aside>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </aside>
      </main>
    </>
  )
}