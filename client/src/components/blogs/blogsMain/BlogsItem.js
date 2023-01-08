import React from 'react'
import { Link } from 'react-router-dom'
const BlogsItem = ({ data }) => {
    return (
        <div>
            <h2>{data.postHeader}</h2>
            <h3>{data.firstName} {data.lastName}</h3>
            <p>{data.postBody}</p>
            <Link to={'/blogs/blog/' + data._id}>Read</Link>
        </div >
    )
}

export default BlogsItem