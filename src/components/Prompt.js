import React, { useState }  from 'react'
import Response from './Response.js'

function Prompt() {

  const [summary, setSummary] = useState(``)

  const [textData, setTextData] = useState(``)

  const initialFormState = {
    prompt: "Write a poem about ",
    temperature: 50
  }
    
  function onCreatePoem(summaryResponse) {
    setSummary(summaryResponse)
  }

// This obviously needs to be changed
  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
      },
      body: JSON.stringify(textData),
    })
    .then(response => response.json())
    .then((poems) => onCreatePoem(poems))
    .then(textData(initialFormState))
  }

  function handleChange(e) {
    setTextData(e.target.value);
  }

  const summaryDiv = () => <Response 
      key= {"summaryResponseDiv"}
      summary = {summary}
    />
  

  return (
    <div>
      <div className="center-content">
        <div className='form-border'>
          <form 
            className="ui form"
            onSubmit={(e) => handleSubmit(e)}
            >

            <label htmlFor="taste">Please Paste The Text You Would Like To Analyze</label>
            <br/>
            
            <textarea
              name="Raw Text"
              type="text"
              rows="4"
              cols="80"
              id="rawTextData"
              value={textData}
              onChange={(e) => handleChange(e)}
            />
            <br/>
            <br/>
            <button className="ui button center" type="submit">Submit</button>
          </form>
        </div>
      </div>   

      <p className='divider'></p>
      <h2> Results </h2>
      <p className='divider'></p>      
      <br/>

      <div className="ui one column grid">
        <div className="ui center aligned ten wide row grid container">
          {summaryDiv}
        </div>
        <br/>
      </div>

    </div>
  )
}

export default Prompt