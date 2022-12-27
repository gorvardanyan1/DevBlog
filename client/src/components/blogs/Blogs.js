import React from 'react'
import BlogsHeader from './blogsHeader/BlogsHeader'
import BlogsMain from './blogsMain/BlogsMain'

const Blogs = () => {
    return (
        <div className='blogsPage'>
            <BlogsHeader />
            <BlogsMain />
        </div>
    )
}

export default Blogs