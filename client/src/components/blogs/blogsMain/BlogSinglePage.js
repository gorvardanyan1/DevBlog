import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../../style/blogsSinglePage.style.scss'
const BlogSinglePage = () => {
    const { id } = useParams()
    const [data, setData] = useState({})
    useEffect(function () {
        fetch(`/blogs/blog/${id}`)
            .then(res => res.json())
            .then(result => setData(result))
    }, [id])
    console.log(data);
    return (
        <div className='blogsSinglePageDiv'>
            <h1>{data.firstName}</h1>
            <h6>{data.lastName}</h6>
            <p>{data.postBody}</p>
        </div>
    )
}

export default BlogSinglePage