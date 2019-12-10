import React from 'react'
import { Route } from 'react-router-dom'

import PostPage from '../Post/PostPage'
import About from '../About/About'

const Main = props => {
    return (
        <main className="container">
            <Route path="/about" component={About} />
            <Route exact path="/" render={() => <PostPage />} />
        </main>
    )
}

export default Main
