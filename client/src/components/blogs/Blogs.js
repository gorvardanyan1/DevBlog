import React, { useReducer, createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import BlogsHeader from './blogsHeader/BlogsHeader'
import BlogsMain from './blogsMain/BlogsMain'
import AuthMain from '../auth/AuthMain'
export const NavigationLinkContext = createContext()

function reducer(state, action) {
    switch (action.type) {
        case 'auth':
            return [
                {
                    header: 'Main',
                    path: 'main'
                },
                {
                    header: 'My Blogs',
                    path: 'myblogs'
                },
                {
                    header: 'Message',
                    path: 'message'
                }
            ]
        case 'anonmyous':
            return [
                {
                    header: 'Main',
                    path: 'main'
                },
                {
                    header: 'Top Blogers',
                    path: 'topBlogers'
                },
                {
                    header: 'Top Blog',
                    path: 'topblogs'
                },
                // {
                //     header: <IoAddCircleOutline />,
                //     path: 'addblog'
                // },
                {
                    header: 'Sign In',
                    path: 'signIn'
                },
                {
                    header: 'Sign Up',
                    path: 'signup'
                }
            ]
    }
}
const Blogs = () => {
    const [links, dispatch] = useReducer(reducer, [])
    return (
        <NavigationLinkContext.Provider value={{ link: links, dispatch }}>
            <div className='blogsPage'>
                <BlogsHeader />
                <BlogsMain dispatch={dispatch} />
                <Routes>
                    <Route path='auth/*' element={<AuthMain />} />
                </Routes>
            </div>
        </NavigationLinkContext.Provider>

    )
}
export default Blogs