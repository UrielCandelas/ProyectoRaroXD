import React from 'react'

function GeneralInput(inputType,value,placeHolder,name) {
  return (
    <input 
    type={inputType.type} 
    value={value.value} 
    placeholder={placeHolder.placeHolder} 
    name={name.name} 
    className='GenaralInput'
    required/>
  )
}

export default GeneralInput