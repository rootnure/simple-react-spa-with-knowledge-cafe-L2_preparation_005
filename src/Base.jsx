import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

export default function Base() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    setBookmarks([...bookmarks, blog]);
  }
  return (
    <>
      <header className="max-w-6xl mx-auto">
        <Header></Header>
      </header>
      <main className="max-w-6xl mx-auto grid grid-cols-3 gap-4 mt-6">
        <section className="col-span-2 grid gap-y-8">
          <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        </section>
        <aside>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </aside>
      </main>
    </>
  )
}