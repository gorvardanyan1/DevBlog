import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '../../../style/blogsMain.style.scss'
import AddBlogs from './AddBlogs'

import MainBlogs from './MainBlogs'
const BlogsMain = () => {
    return (
        <main>
            <Routes>
                <Route path='addblog' element={<AddBlogs />} />
                <Route path='main' element={<MainBlogs />} />
            </Routes>
        </main>
    )
}
export default BlogsMain