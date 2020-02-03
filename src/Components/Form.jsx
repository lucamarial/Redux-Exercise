import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addArticle } from '../redux/actions/index'

const Form = props => {
  const [title, setTitle] = useState('')

  const handleChange = e => {
    setTitle(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.dispatch(addArticle({ title }))
    setTitle('')
  }

  return (
    <>
      <h2>Add a new article</h2>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          id='title'
          placeholder='Title'
          value={title}
          onChange={handleChange}
        />
        <button type='submit'>Save</button>
      </form>
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Form)