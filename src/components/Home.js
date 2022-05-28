import React from 'react'
import Prompt from './Prompt.js'
import Response from './Response.js'

function Home() {
  return (
    <div className="homePage">
        <div className="pageHeader">
          <h1>DAVINCI</h1>
        </div>
        <Prompt />
        <br/>
        <br/>
    </div>
  )
}

export default Home