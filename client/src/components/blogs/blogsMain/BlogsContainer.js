import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid'
import BlogItem from './BlogItem'
import '../../../style/blogsContainer.style.scss'
const BlogsContainer = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(function () {
        fetch('/blogs/mainBlogs')
            .then(result => result.json())
            .then(res => setBlogs(res))
    }, [])

    return (
        <div className='blogsContainer' >
            <div className='blogs'>
                {
                    blogs.map(elem => <BlogItem key={v4()} data={elem} />) || "loadding...."
                }
            </div>
        </div>

    )
}

export default BlogsContainer