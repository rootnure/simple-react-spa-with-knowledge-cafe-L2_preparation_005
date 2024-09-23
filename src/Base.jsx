import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

export default function Base() {
  return (
    <>
      <header className="max-w-6xl mx-auto">
        <Header></Header>
      </header>
      <main className="max-w-6xl mx-auto grid grid-cols-3">
        <section className="col-span-2">
          <Blogs></Blogs>
        </section>
        <aside>
          <Bookmarks></Bookmarks>
        </aside>
      </main>
    </>
  )
}