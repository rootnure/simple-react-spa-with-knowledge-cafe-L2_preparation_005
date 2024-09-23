import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <>
            <h3>Blogs: {blogs.length}</h3>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </>
    );
};

export default Blogs;