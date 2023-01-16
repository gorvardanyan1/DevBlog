import React from 'react'
import { Link } from 'react-router-dom'
const BlogItem = ({ data }) => {
    return (
        <div className='blogItem'>
            <div className="blogItemHeader">
                <span className="imgSpan">
                    <h1>{data.firstName.at(0)}</h1>
                </span>
                <div>
                    <h3>{data.firstName} {data.lastName}</h3>
                    <h6>{data.submitedDate.date.day}/{data.submitedDate.date.month}/{data.submitedDate.date.year}</h6>
                </div>
                <Link to={'/blogs/blog' + data._id}>{data.postHeader}</Link>

            </div>
        </div >
    )
}

export default BlogItem