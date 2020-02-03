import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getData } from '../redux/actions/index'

const Posts = props => {
  useEffect(() => {
    props.getData()
  }, [])

  return (
    <>
      
    </>
  )
}

export default connect(
  null,
  { getData }
)(Posts)