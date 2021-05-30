import React, { Component } from 'react'

export default class Posts extends Component {

    state = {
        posts:[]
    }

    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        this.setState({posts: data})
    }

    render() {
        return (
            <div class="section">
                <div class="title">Posts</div>
                {
                    this.state.posts.map(post => {
                        return <div class="box" key={post.id}> 
                            <article class="message is-link">
                                <div class="message-header">
                                <p>{post.title}</p>
                            </div>
                            <div class="message-body">
                                {post.body}
                            </div>
                            </article>
                        </div>
                    })
                }
            </div>
        )
    }
}
