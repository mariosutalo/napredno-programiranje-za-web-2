import React, { useState } from 'react'

const Blogs = () => {
    const [blogs, setblogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
    ])

    console.log("rerendered")

    function addNewBlog() {
        const newBlog = { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 4 }
        const newBlogsArray = [...blogs, newBlog]
        setblogs(newBlogsArray)
    }

    return (
        <div className="home">
            <button onClick={addNewBlog}>Add new Blog</button>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))
            }
        </div>
    )
}

export default Blogs