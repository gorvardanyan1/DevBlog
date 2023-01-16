import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '../../../style/blogsMain.style.scss'
import AddBlogs from './AddBlogs'
import BlogSinglePage from './BlogSinglePage'
import BlogsContainer from './BlogsContainer'


const BlogsMain = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<BlogsContainer />} />
                <Route path='addblog' element={<AddBlogs />} />
                <Route path='blog/:id' element={<BlogSinglePage />} />
            </Routes>
        </main>
    )
}
export default BlogsMain
