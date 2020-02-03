import React from 'react'
import { connect } from 'react-redux'

const List = ({ articles }) => {
  return (
    <>
      <h2>Articles</h2>
      <ul>
        {articles.map(article => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </>
  )
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps)(List)