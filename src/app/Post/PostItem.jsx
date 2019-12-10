import React, { useState, useContext } from 'react'
import AppContext from '../_context/AppContext'

function PostItem({ post }) {
    const { isGrid, isLight } = useContext(AppContext)
    const [select, setSelect] = useState(false)
    const onSelect = () => {
        setSelect(select => !select)
    }

    return (
        <div className={`col s12 ${isGrid ? 'm4' : ''}`}>
            <div className={`card ${isLight ? 'blue-grey darken-1' : 'white'}`}>
                <div className={`card-content ${isLight ? 'white-text' : 'blue-gray-text'}`}>
                    <span className="card-title">{isGrid ? post.shortTitle : post.title}</span>
                    <p>{isGrid ? post.shortBody : post.body}</p>
                </div>
                <div onClick={onSelect} className={`card-action ${select ? 'red' : ''}`}>
                    <a>Click</a>
                </div>
            </div>
        </div>
    )
}

export default PostItem
