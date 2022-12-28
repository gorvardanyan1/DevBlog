import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '../../../style/blogsMain.style.scss'
import AddBlogs from './AddBlogs'
const BlogsMain = () => {
    return (
        <main>
            <Routes>
                <Route path='blogs/addblog' element={<AddBlogs />} />
            </Routes>
        </main>
    )
}
export default BlogsMain