import React, { useState } from 'react'

const Form = () => {
  const [title, setTitle] = useState('')

  const handleChange = e => {
    setTitle(e.target.value)
  }

  return (
    <>
      <h2>Add a new article</h2>

      <form>
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

export default Form