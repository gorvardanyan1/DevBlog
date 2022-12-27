import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '../../../style/blogsMain.style.scss'
const BlogsMain = () => {
    return (
        <main>
            <Routes>
                <Route path='blogs/addblog' element={<div>Hello</div>} />
            </Routes>
        </main>
    )
}
export default BlogsMain