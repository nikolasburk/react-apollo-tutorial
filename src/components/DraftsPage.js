import React, { Component, Fragment } from 'react'
import Post from '../components/Post'

export default class DraftsPage extends Component {
  render() {
    const data = {
      drafts: [
        {
          id: '1',
          title: 'Hello World',
          text: '👋',
          isPublished: 'false',
        },
      ],
    }

    return (
      <Fragment>
        <div className="flex justify-between items-center">
          <h1>Drafts</h1>
        </div>
        {data.drafts &&
          data.drafts.map(draft => (
            <Post
              key={draft.id}
              post={draft}
              refresh={() => console.log(`Refetch`)}
              isDraft={!draft.isPublished}
            />
          ))}
        {this.props.children}
      </Fragment>
    )
  }
}

