import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getData } from '../redux/actions/index'

const Posts = props => {
  useEffect(() => {
    props.getData()
  }, [])

  return (
    <>
      <h2>API posts</h2>
      <ul>
        {props.remoteArticles.map(article => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </>
  )
}

const mapStateToProps = state => {
  return {
    remoteArticles: state.remoteArticles.slice(0, 10)
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(Posts)