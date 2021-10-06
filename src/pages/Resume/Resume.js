import './Resume.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header-wrapper'>
      <h2 className='go-home'> <Link id='go-home' to='/'> &larr; Home</Link> </h2>
      <h1 className="resume-header"> Todd Ford </h1>
      <h3 className="header-subtitle"> Software Engineer </h3>
    </div>
  )
}

export default function Resume() {

  return (
    <div className='resume-wrapper'>
    <Header />
    <div className='page-wrapper'>
      <div className='side-column'>
        <div className='side-column-top'>
          <h4 className='side-title'> Contact </h4>
          <div className='side-list'>
            <li> <a href="https://linkedin.com" id='resume-icons' className="fa fa-google resume"> </a> toddcford@gmail.com </li>
            <li> <i class="fa fa-phone resume" id='resume-icons' aria-hidden="true"></i> 847-714-2401 </li>
            <li> <a href="https://github.com/toddcford" id='resume-icons' className="fa fa-github resume"> </a>github.com/toddcford </li>
            {/* <li> <a href="toddcford.github.io/portfolio_site" id='resume-icons' className="fa fa-github resume"> </a>toddcford.github.io/portfolio_site </li> */}
            <li> <a href="www.linkedin.com/in/todd-ford-4b5aa3105" id='resume-icons' className="fa fa-linkedin"> </a> <a id='linked-in'href="www.linkedin.com/in/todd-ford-4b5aa3105"> linkedin </a></li>  
          </div>
        </div>
        <div className='side-column-bottom'>
          <h4 className='side-bottom-title'>Currently Learning</h4>
          <li> AWS & S3 </li>
          <li> Blockchain development </li>
        </div>
      </div>

      <div className='main-content'>
        <h2 className='sub-title'> Skills </h2>

          <p className='items'> <strong>Core Languages: </strong> Javascript, Python, C++, SQL, HTML, CSS  </p>
          <p className='items'> <strong>Frameworks & Libraries:</strong> React, Next, Express, Mongoose, Pandas, Numpy </p>

        <hr className='full-bleed'></hr>
        <h2 className='sub-title'> Experience </h2>
        {/* <ul className='list'> */}
          <div className='company-block'>
            <hX><strong>Gelber Group, LLC  </strong><span className='location'>(Chicago, IL)</span></hX> 
            <hX className='dates'><strong> 2016-Current</strong></hX>
          </div>
          <p style={{'margin': '0px 0 0 0 '}}><em>Trader/Portfolio Manager</em> </p>
          {/* <li className='space'><br></br></li> */}
          
          <li className='list-item'> Used Python and Pandas to assist in developing and analyzing trading strategies</li>
          <li className='list-item'> Used Python to scrape key economic data from the web in order to optimize trade execution</li>
          <li className='list-item'> Generated over $1.3 million in trading revenue since 2017</li>
          <br />
          <div className='company-block'>
            <hX><strong>Munich Re Trading </strong><span className='location'>(Houston, TX)</span></hX>
            <hX className='dates'><strong> Summer 2015 </strong> </hX>
          </div>
          <p style={{'margin': '0px 0 0 0'}}><em>Quantitative Analyst Intern</em> </p>
          
          <li className='list-item'> Assisted in developing a derivative trading platform using MATLAB, Javascript, HTML and CSS </li>
          <li className='list-item'> Developed database management skills through the use of SQL  </li>
       
        <hr className='full-bleed'></hr>
        <h2 className='sub-title'> Education  </h2>
        <div>
          <div className='company-block'>
          <hX><strong>Williams College</strong> <span className='location'>(Williamstown, MA)</span></hX>
          <hX className='dates'><strong> 2012-2016 </strong></hX>
          </div>
          {/* <li className='space'><br></br></li> */}
          <li className='list-item'> Major: Math</li>
          <li className='list-item'> Relevant Coursework: Data Structures and Advanced Programming, Regression and Forecasting, Probability</li>
          
        </div>
      </div>

    </div>

    </div>
  )
}