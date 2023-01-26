import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import '../../../style/blogsMain.style.scss'
import AddBlogs from './AddBlogs'
import BlogSinglePage from './BlogSinglePage'
import BlogsContainer from './BlogsContainer'
import SignUp from '../signIn & signUp/SignUp'
import SignIn from '../signIn & signUp/SignIn'


const BlogsMain = ({ dispatch }) => {
    useEffect(function () {
        dispatch({ type: 'anonmyous' })
    }, [])
    return (
        <main>
            <Routes>
                <Route path='main' element={<BlogsContainer />} />
                <Route path='addblog' element={<AddBlogs />} />
                <Route path='blog/:id' element={<BlogSinglePage />} />
                <Route path='signin' element={<SignIn />} />
                <Route path='signup' element={<SignUp />} />
            </Routes>
        </main>
    )
}
export default BlogsMain
