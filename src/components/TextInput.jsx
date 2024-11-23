import React from 'react'
//import PropTypes from 'prop-types'

const TextInput = ({placeholder, text, setText, isBlank= false}) => {
  return (
    <input className='input-reverse' 
    type="text" 
    placeholder={placeholder}
    value={text}
    onChange={(e) => setText(e.target.value)}
    /> 
    
    
  )
}

export default TextInput
