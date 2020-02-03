import React from 'react'

const Form = () => {
  return (
    <>
      <h2>Add a new article</h2>

      <form>
        <input
          type='text'
          id='title'
          placeholder='Title'
        />
        <button type='submit'>Save</button>
      </form>
    </>
  )
}

export default Form