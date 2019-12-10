class Post {
    constructor({ body, id, title, userId }) {
        this.body = body
        this.id = id
        this.title = title
        this.userId = userId
    }

    get shortTitle() {
        return this.title.slice(0, 20)
    }

    get shortBody() {
        return this.body.slice(0, 50)
    }
}

export default Post
