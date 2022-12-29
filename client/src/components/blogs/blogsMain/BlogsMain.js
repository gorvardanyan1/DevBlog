import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '../../../style/blogsMain.style.scss'
import AddBlogs from './AddBlogs'
import BlogCreaterPage from './BlogCreaterPage'
const BlogsMain = () => {
    return (
        <main>
            <Routes>
                <Route path='addblog' element={<AddBlogs />} />
                <Route path='blogCreaterPage' element={<BlogCreaterPage />} />
            </Routes>
        </main>
    )
}
export default BlogsMain