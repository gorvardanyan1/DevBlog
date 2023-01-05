import React, { useEffect, useState } from 'react'

const MainBlogs = () => {
    const { blogs, setBlogs } = useState([])
    useEffect(function () {
        // fetch('/mainBlogs').then(result => {
        //     console.log(result)
        //     setBlogs(result)
        // }
        // )
    }, [])
    return (
        <div>
            hello
            {/* {blogs.map(elem => {
                return (elem.postHeder)
            }) || 'Loading ...'} */}
        </div>
    )
}

export default MainBlogs