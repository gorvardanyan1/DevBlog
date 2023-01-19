import React from 'react'
import '../../../style/blogsHeader.style.scss'
import logo from '../../../images/logo.svg'
import LogoImg from '../../logo/LogoImg'
import Navigation from '../../navigation/Navigation'
import { IoAddCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'


const BlogsHeader = () => {
    const link = [{
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
    return (
        <header>
            <div className="blogLogoDiv">
                <LogoImg srcPath={logo} altImg='Logo' />
            </div>
            <Navigation link={link} >
            </Navigation>
        </header>
    )
}

export default BlogsHeader