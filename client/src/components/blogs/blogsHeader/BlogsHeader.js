import React from 'react'
import '../../../style/blogsHeader.style.scss'
import logo from '../../../images/logo.svg'
import LogoImg from '../../logo/LogoImg'
import Navigation from '../../navigation/Navigation'
import { IoAddCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
const BlogsHeader = () => {
    return (
        <header>
            <div className="blogLogoDiv">
                <LogoImg srcPath={logo} altImg='Logo' />
            </div>
            <Navigation link={['Top Blogers', 'Top Blog',]} >
                <li>
                    <Link to='/blogs/addblog'> <IoAddCircleOutline /></Link>
                </li>
            </Navigation>
        </header>
    )
}

export default BlogsHeader