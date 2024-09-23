const Blog = ({ blog }) => {
  const { title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;

  return (
    <div>
      <h3 className="text-3xl">{title}</h3>
      <p className="text-sm">
        {
          hashtags.map((tag, idx) => <span key={idx}>#{tag} </span>)
        }
      </p>
      <figure className="w-full rounded-lg overflow-hidden">
        <img src={cover} alt={`Cover image of ${title}`} className="w-full" />
      </figure>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <figure className="w-10">
            <img src={author_img} alt="" />
          </figure>
          <div>
            <h4>{author}</h4>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <p>{reading_time} min read</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;