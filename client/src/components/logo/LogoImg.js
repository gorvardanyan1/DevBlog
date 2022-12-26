import React from 'react'

const LogoImg = ({ srcPath, altImg = 'Image' }) => {
    return (
        <img src={srcPath} alt={altImg} />
    )
}

export default LogoImg
