import React from 'react'
import { Link } from "react-router-dom";

function Selection({linkName,route}) {
  return (
    <div className='linkto'>
      <Link to={route} className='Link__'>{linkName}</Link>
    </div>
  )
}

export default Selection