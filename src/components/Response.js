import React from 'react'

function Response({summary}) {
  return (
    <div id="summaryDiv">
        <h4>Summary</h4>  
        <p> {summary} </p>
    </div>
  )
}

export default Response