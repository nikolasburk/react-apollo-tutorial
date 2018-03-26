import React, { Component, Fragment } from 'react'
import Post from '../components/Post'

export default class FeedPage extends Component {
  render() {
    const data = {
      feed: [
        {
          id: '1',
          title: 'Hello World',
          text: '👋',
          isPublished: 'true',
        },
      ],
    }
    return (
      <Fragment>
        <h1>Feed</h1>
        {data.feed &&
          data.feed.map(post => (
            <Post
              key={post.id}
              post={post}
              refresh={() => console.log(`Refetch`)}
              isDraft={!post.isPublished}
            />
          ))}
        {this.props.children}
      </Fragment>
    )
  }
}
