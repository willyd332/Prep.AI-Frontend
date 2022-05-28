import React, { useState }  from 'react'
import Response from './Response.js'

function Prompt() {
  const [summary, setSummary] = useState(``)
  const [textData, setTextData] = useState(``)
    
  const showSummary = (summaryResponse) => {
    setSummary(summaryResponse)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = JSON.stringify({"textData": textData})
    console.log(requestBody)
    fetch("http://127.0.0.1:5000/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    }).then((response) => {
      if(response.status!==200){
          console.log(response.statusText);
      }
      response.json().then((textResponse) => {
        console.log(textResponse)
        showSummary(textResponse)
        setTextData(``)
      })
    }).catch(function(error){
        console.log(error);
    });
  }

  function handleChange(e) {
    setTextData(e.target.value);
  }

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

      <div className='ui left aligned container resultContainer'>
        <h2> Results </h2>
        <p id="resultDivider" className='divider'></p>      
        <br/>
        <Response 
          key= {"summaryResponseDiv"}
          summary = {summary}
        />
      </div>  
    </div>
  )
}

export default Prompt