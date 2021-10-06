import { Link } from 'react-router-dom'
import './UserAuth.css'

export default function UserAuth(props) {

  return (
    <div className='movies-wrapper'>
      <Link className='backto-portfolio' to='/portfolio'> &larr; Portfolio </Link>
      <h1 className='title'>User Authentication App </h1>
      <div className='open-app-div'>
        <a href='https://auth-mgb-app.herokuapp.com' target='_blank' rel='noreferrer'><button className='open-app-button'>Open App</button></a>
        <a href='https:/github.com/toddcford/Authentication_App' target='_blank' rel='noreferrer'><button className='open-app-button'>Code Repository</button></a>
      </div>
      <div className='userauth-content-wrapper'>
        <p> 
          This app allows users to create an account, and the app stores their data in a database so that they can subsequently log back in at anytime
          from anywhere. Passwords are hashed using bcrypt before they are stored in the database. The app was built using Next, React, Express, and Mongoose/MongoDB
        </p>
        <p></p>
        <iframe src="https://giphy.com/embed/ze6O1TqHjB7Kcej6q8" title='my-gif' width="640" height="414" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

        <iframe src="https://giphy.com/embed/v9ua3mgTU9YTXeQgR1" title='my-gif2' width="640" height="314" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

        <p>
        </p>
        <p>
        </p>
        <p></p>
        <p></p>
        <p></p>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}