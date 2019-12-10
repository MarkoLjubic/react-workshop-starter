import React from 'react'
import PostList from './PostList'
import postsService from '../../services/postService'

class PostPage extends React.Component {
    state = {
        posts: []
    }

    async componentDidMount() {
        try {
            const posts = await postsService.fetchPosts()
            this.setState({
                posts
            })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <h1>Post Page</h1>
                <PostList posts={this.state.posts} />
            </div>
        )
    }
}

export default PostPage
