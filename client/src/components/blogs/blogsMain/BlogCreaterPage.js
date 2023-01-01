import React, { useState } from 'react'
import '../../../style/blogCreaterPage.style.scss'
import { useNavigate } from 'react-router-dom'
const BlogCreaterPage = () => {
    const navigate = useNavigate()
    const [text, setText] = useState({ blogBody: "" })
    function handleBlogText(e) {
        console.log(text);
        e.preventDefault()
        fetch('/text', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(text),
        })
            .then((response) => response.json())
            .then((data) => {
                navigate('/blogs')
                return data
            })

            .catch((error) => {
                console.error('Error:', error);

            });
    }
    return (
        <div className='blogCreaterPage'>
            <form method="post" onSubmit={handleBlogText}>
                <textarea name="text" id="" cols="30" rows="10" onChange={e => setText({ blogBody: e.target.value })}></textarea>
                <input type="submit" value="Submit" />
            </form>

            {/* <iframe height="300" style={{ width: '100%' }} scrolling="no" title="Untitled" src="https://codepen.io/gorvardanyan1/embed/zYLqywR?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/gorvardanyan1/pen/zYLqywR">
                    Untitled</a> by Gor (<a href="https://codepen.io/gorvardanyan1">@gorvardanyan1</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe> */}
        </div>
    )
}

export default BlogCreaterPage