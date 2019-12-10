import React from 'react'
import PostItem from './PostItem'

function PostList({ posts, isGrid }) {
    if (posts.length === 0) {
        return <h4>Loading...</h4>
    }

    return (
        <div className="row">
            {posts.map(post => {
                return <PostItem post={post} />
            })}
        </div>
    )
}

export default PostList
