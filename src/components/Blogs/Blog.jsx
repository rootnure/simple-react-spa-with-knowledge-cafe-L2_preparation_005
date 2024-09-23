import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark }) => {
  const { title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;

  return (
    <div>
      <figure className="w-full rounded-lg overflow-hidden">
        <img src={cover} alt={`Cover image of ${title}`} className="w-full" />
      </figure>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 my-2">
          <figure className="w-10">
            <img src={author_img} alt="" />
          </figure>
          <div>
            <h4>{author}</h4>
            <p className="text-sm">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-x-1">
          <p>{reading_time} min read</p>
          <button onClick={() => handleAddToBookmark(blog)} className="text-xl hover:text-blue-500" title="Click to bookmark"><FaBookmark /></button>
        </div>
      </div>
      <h3 className="text-3xl font-bold leading-10 mb-1">{title}</h3>
      <p className="text-sm text-gray-400 flex gap-x-1.5">
        {
          hashtags.map((tag, idx) => <span key={idx}>#{tag}</span>)
        }
      </p>
      <button className="text-blue-800 underline mt-2">Mark as read</button>
    </div>
  );
};

export default Blog;