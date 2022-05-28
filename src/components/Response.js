import React from 'react'

function Response({summary}) {
  return (
      <div className='center aligned cards'>
        <div className='ui card'>
            <br/>
            <h4> Summary </h4>
            <p className='divider'></p>      
            <p> {summary} </p>

            <br/>
        </div>
    </div>
  )
}

export default Response