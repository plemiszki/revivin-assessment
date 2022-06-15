import React from 'react'

export default function Start() {
  return(
    <>
      <div>
        <div className="inner-container">
          <div className="logo"></div>
          <a href="/schedule">Schedule a Pickup</a>
          <a href="/track">Track a Pickup</a>
        </div>
      </div>
      <style jsx>{`
        .inner-container {
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
        a {
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
        a:not(:last-of-type) {
          margin-top: 50px;
          margin-bottom: 50px;
        }
        a:hover {
          background-color: #4c4cfe;
        }
      `}</style>
    </>
  )
}
