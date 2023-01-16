import React from 'react'
import { Link } from 'react-router-dom'
const BlogItem = ({ data }) => {
    return (
        <div className='blogItem'>
            <div className="blogItemHeader">
                <span className="imgSpan">
                    <h1>G</h1>
                </span>
                <h3>{data.firstName} {data.lastName}</h3>
            </div>
            <h2>{data.postHeader}</h2>
            <h3>{data.firstName} {data.lastName}</h3>
            <p>{data.postBody}</p>
            <Link to={'/blogs/blog/' + data._id}>Read</Link>
        </div >
    )
}

export default BlogItem