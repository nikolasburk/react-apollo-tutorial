import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'


class DetailPage extends Component {
  render() {
    const data = {
      post: {
        id: '1',
        title: 'Hello World',
        text: '👋',
        isPublished: 'false',
      },
    }
    const action = this._renderAction(data.post)
    return (
      <Fragment>
        <h1 className="f3 black-80 fw4 lh-solid">{data.post.title}</h1>
        <p className="black-80 fw3">{data.post.text}</p>
        {action}
      </Fragment>
    )
  }

  _renderAction = ({ id, isPublished = false }) => {
    const publishButton = (
      <a
      className="f6 dim br1 ba ph3 pv2 mb2 dib black pointer"
      onClick={() => {
        this.props.history.replace('/')
      }}
    >
      Publish
    </a>
    )
    const deleteButton = (
      <a
      className="f6 dim br1 ba ph3 pv2 mb2 dib black pointer"
      onClick={() => {
        this.props.history.replace('/')
      }}
    >
      Delete
    </a>
    )
    return isPublished ?
      deleteButton :
      <Fragment>
        {publishButton} 
        {deleteButton} 
      </Fragment>
  }
}

export default withRouter(DetailPage)
