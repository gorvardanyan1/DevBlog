import React from 'react'
import '../../../style/blogsHeader.style.scss'
import logo from '../../../images/logo.svg'
import LogoImg from '../../logo/LogoImg'
import Navigation from '../../navigation/Navigation'
const BlogsHeader = () => {
    return (
        <header>
            <div className="blogLogoDiv">
                <LogoImg srcPath={logo} altImg='Logo' />
            </div>
            <Navigation link={['Top Blogers', 'Top Blog',]} />
        </header>
    )
}

export default BlogsHeader