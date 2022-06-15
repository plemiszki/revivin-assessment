import React, { useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

export default function Schedule() {

  const [date, setDate] = useState(new Date)
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [errorText, setErrorText] = useState()
  const [trackingNumber, setTrackingNumber] = useState()

  const submitForm = async (e) => {
    e.preventDefault()
    console.log('submit form');
  }

  return(
    <>
      <div>
        <div className="inner-container">
          <a href="/">
            <div className="logo"></div>
          </a>

          <h1>Schedule a Pickup</h1>
          <p>Please enter the details of your pickup below.</p>
          <form onSubmit={ (e) => { submitForm(e) }}>
            <DatePicker wrapperClassName="date-picker" selected={ date } onChange={ (date) => setDate(date) } />
            <div className="address-fields-container">
              <div>
                <label htmlFor="address1">Address Line 1</label>
                <input id="address1" type="text" onChange={ (e) => setAddress1(e.target.value) } value={ address1 } maxLength={ 30 }></input>
              </div>
              <div>
                <label htmlFor="address1">Address Line 2</label>
                <input id="address2" type="text" onChange={ (e) => setAddress2(e.target.value) } value={ address2 } maxLength={ 20 }></input>
              </div>
              <div>
                <label htmlFor="city">City</label>
                <input id="city" type="text" onChange={ (e) => setCity(e.target.value) } value={ city } maxLength={ 20 }></input>
              </div>
              <div>
                <label htmlFor="state">State</label>
                <input id="state" type="text" onChange={ (e) => setState(e.target.value) } value={ state } maxLength={ 2 }></input>
              </div>
              <div>
                <label htmlFor="state">Zip</label>
                <input id="zip" type="text" onChange={ (e) => setZip(e.target.value) } value={ zip } maxLength={ 5 }></input>
              </div>
            </div>
            <input type="submit" />
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
          margin-bottom: 50px;
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
        p {
          margin-bottom: 30px;
        }
        div.address-fields-container {
          text-align: right;
          margin-bottom: 30px;
        }
        label {
          display: inline-block;
          font-size: 20px;
          margin-right: 20px;
        }
        input[type="text"] {
          display: inline-block;
          font-size: 32px;
          width: 60%;
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
