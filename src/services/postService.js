import http from '../utils/api'
import Post from '../models/Post'
import { postsUrl } from '../utils/constants'

class PostService {
    async fetchPosts() {
        const posts = await http.get(postsUrl)
        return posts.map(post => {
            return new Post(post)
        })
    }
}

const postService = new PostService()

export default postService
