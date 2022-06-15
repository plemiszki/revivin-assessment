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
  const [errors, setErrors] = useState([])
  const [trackingNumber, setTrackingNumber] = useState()

  const clearForm = () => {
    setTrackingNumber(null)
    setAddress1('')
    setAddress2('')
    setCity('')
    setState('')
    setZip('')
  }

  const submitForm = async (e) => {
    e.preventDefault()
    setErrors([])

    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

    fetch('/api/pickups', {
      method: 'POST',
      headers: {
        'x-csrf-token': csrfToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pickup: {
          pickup_date: date,
          address1,
          address2,
          city,
          state,
          zip,
        }
      })
    })
    .then(async (response) => {
      if (response.status === 422) {
        let result = await response.json()
        setErrors(result.errors)
        window.scrollTo(0, 0)
        return
      }
      if (!response.ok) {
        setErrors(['There was an unknown error.'])
        window.scrollTo(0, 0)
        return
      }
      let result = await response.json()
      setTrackingNumber(result.tracking_number)
      window.scrollTo(0, 0)
    })
  }

  const renderErrors = () => {
    if (errors.length === 0) {
      return
    }
    return(
      <>
        <ul>
          { errors.map((error, index) => {
            return <li key={ index }>{ error }</li>
          }) }
        </ul>
        <style jsx>{`
          ul {
            margin-top: -10px;
            display: inline-block;
            padding: 20px;
            background: pink;
            margin-bottom: 20px;
            border-radius: 6px;
          }
          li {
            list-style: none;
          }
          li:not(:last-of-type) {
            margin-bottom: 10px;
          }
        `}</style>
      </>
    )
  }

  if (trackingNumber) {
    return(
      <>
        <div>
          <div className="inner-container">
            <a href="/">
              <div className="logo"></div>
            </a>
            <h1>Thank you.</h1>
            <p>Your tracking number is {trackingNumber}</p>
            <a className="button" onClick={ () => { clearForm() } }>Schedule Another Pickup</a>
            <a className="button" href="/track">Track a Pickup</a>
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
            font-size: 30px;
            margin-bottom: 30px;
          }
          a.button {
            display: block;
            background-color: blue;
            text-decoration: none;
            color: white;
            padding: 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 32px;
            text-align: center;
            box-sizing: border-box;
            font-family: arial;
            width: 60%;
            margin: auto;
          }
          a.button:not(:last-of-type) {
            margin-top: 50px;
            margin-bottom: 50px;
          }
          a.button:hover {
            background-color: #4c4cfe;
          }
        `}</style>
      </>
    )
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
          { renderErrors() }
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
