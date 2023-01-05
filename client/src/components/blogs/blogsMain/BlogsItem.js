import React from 'react'

const BlogsItem = ({ data }) => {
    return (
        <div>
            <h1>{data.firstName}</h1>
            <h1>{data.lastName}</h1>
        </div>
    )
}

export default BlogsItem