import { Link } from 'react-router-dom'
import './PortfolioViz.css'

export default function PortfolioViz() {

  return (
    <div className='port_viz_wrapper'>
      <Link className='backto-portfolio' to='/portfolio'> &larr; Portfolio </Link>
      <h1 className='title'>Portfolio Visualization App </h1>
      <div className='open-app-div'>
        <a href='https://portfolio-visualizer.netlify.app/' target='_blank' rel='noreferrer'><button className='open-app-button'>Open App</button></a>
        <a href='https://github.com/toddcford/PortfolioVisualizer' target='_blank' rel='noreferrer'><button className='open-app-button'>Code Repository</button></a>
      </div>
      <div className='port_viz_content_wrapper'>
        <p >
          This app allows users to add up to four stocks to a portoflio and visualize the cumulative performance
          of the individual stocks and the entire portfolio over time. It makes it easy to see which stocks in the portfolio
          have outperformed, and which ones have underperformed. 
        </p>
        <p className='walkthrough'> 
          Enter up to four stock tickers to get started
        </p>
        <p></p>
        <iframe src="https://giphy.com/embed/ci02GFArM8Jjt8LjgB" title='my-gif' width="640" height="292" frameBorder="0" class="giphy-embed" allowFullScreen='false'></iframe>
        <p ></p>
        <p> </p>
        <p className='walkthrough'> Then click on "Get Portfolio Performance" to gather the data and see the visualization </p>
        <p></p>
        <iframe src="https://giphy.com/embed/RWGfMDsSCTdLavSth6" title='my-gif2'width="640" height="298" frameBorder="0" class="giphy-embed" allowFullScreen='false'></iframe>
        <p> </p>
        <p> </p>
        <p className='walkthrough'>To create a new portfolio, click the "Clear Portfolio" button and add another group of stocks</p>
        <p></p>
        <iframe src="https://giphy.com/embed/5aumXhP05LXLn0P9j4" title='my-gif3' width="640" height="310" frameBorder="0" class="giphy-embed" allowFullScreen='false'></iframe>
        <p> </p>
        <p></p>
        <p className='walkthrough'>
          The app was made using React, Recharts, and the Yahoo Finance API
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