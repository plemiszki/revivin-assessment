import React, { useState } from 'react'

export default function Track() {

  const [trackingNumber, setTrackingNumber] = useState('')
  const [sentTrackingNumber, setSentTrackingNumber] = useState('')
  const [status, setStatus] = useState('')
  const [errorText, setErrorText] = useState('')

  return(
    <>
      <div>
        <div className="inner-container">
          <a href="/">
            <div className="logo"></div>
          </a>
          <h1>Track a Pickup</h1>
          <p>Please enter your tracking number below.</p>
          <form onSubmit={ (e) => { submitForm(e) }}>
            <input type="text" onChange={ (e) => setTrackingNumber(e.target.value) } value={ trackingNumber }></input>
            <input type="submit" value="Track" />
          </form>
        </div>
      </div>
      <style jsx>{`
        .inner-container {
          font-family: arial;
          text-align: center;
          background-color: white;
          border-radius: 10px;
          width: 60%;
          margin: auto;
          padding: 50px;
          box-sizing: border-box;
          box-shadow: 1px 2px 3px 0px #e6e9ec;
        }
        .logo {
          width: 100%;
          height: 50px;
          background-image: url(/logo.svg);
          background-repeat: no-repeat;
          background-position: 50%;
          margin-bottom: 50px;
        }
        h1 {
          margin: 0;
          font-size: 40px;
        }
        h1, p {
          text-align: center;
        }
        input[type="text"] {
          display: block;
          font-size: 32px;
          width: 50%;
          padding: 15px;
          margin: auto;
          margin-bottom: 20px;
        }
        input[type="submit"] {
          display: block;
          margin: auto;
          font-size: 32px;
          cursor: pointer;
          color: white;
          padding: 20px;
          border-radius: 5px;
          background-color: blue;
        }
        input[type="submit"]:hover {
          background-color: #4c4cfe;
        }
      `}</style>
    </>
  )
}
