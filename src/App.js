import React, {useState, useEffect} from 'react'
import { HashRouter,BrowserRouter,Route, Link, Switch } from 'react-router-dom';
import Analytics from 'react-router-ga';
import './App.css';
import ScrollToTop from "./util/ScrollToTop"

import About from './pages/About/About'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import Resume from './pages/Resume/Resume'
import Movies from './pages/Portfolio/Movies/Movies'
import UserAuth from './pages/Portfolio/UserAuth/UserAuth'
import PortfolioViz from './pages/Portfolio/PortfolioViz/PortfolioViz'
import Contact from './pages/Contact/Contact'

function NavigationBar(props) {
  const bar_item = props.items.map((item, key) => {
    return (
      <div className="nav-item1" key={key}> <Link to={item.toLowerCase()}> {item}</Link></div>
    )
    })
  bar_item.push(<div className='nav-item2'><a href="https://github.com/toddcford">Code</a><a id='git' href="https://twitter.com" className="fa fa-github"> </a> </div>) 
  
  return bar_item;
}

function Header(props) {
  return (
    <div className="main-header-container">
      <h1> {props.name} </h1>
      <img id="photo" src={process.env.PUBLIC_URL + "Images/ToddFord.jpg"} alt={"toddford"}/>
      <p id='title'> {props.description} </p>
      <div className="icon-bar">
        <a href="https://twitter.com" className="fa fa-twitter"> </a>
        <a href="https://linkedin.com" className="fa fa-linkedin"> </a>
        <a href="https://github.com/toddcford" className="fa fa-github"> </a> 
      </div>

    </div>
  );
}

function ContentItem(props) {
  return (
    <div className="content-item content-item-animation">
      <a className="content-link" href={props.site}>
        <img id='content-image'height='200px' width='200px' src={process.env.PUBLIC_URL + props.img_ext} alt={props.name} href="http://espn.com"/>
        <p id='content-p'> {props.name} </p> 
       </a>
    </div>
  )
}

function Footer(props) {
  return (
    <div className="icon-bar">
      <a href="https://twitter.com" className="fa fa-twitter"> </a>
      <a href="https://linkedin.com" className="fa fa-linkedin"> </a>
      <a href="https://github.com/toddcford" className="fa fa-github"> </a> 
  </div>    
  )
}

function App() {
  // const nav_items = ['Home', 'About', 'Portfolio', 'Contact'];
  const nav_items = ['Home', 'About', 'Portfolio'];

    return (
      <div className='ReactParent'>
        <HashRouter>
        <Analytics id='G-P0RZCVFND5' debug>
        {/* <div className="nav-container" >
          <NavigationBar items={nav_items}/>
        </div> */}
        <ScrollToTop>
        <Switch>
            <Route path="/portfolio">
              <div className="nav-container" >
                <NavigationBar items={nav_items}/>
              </div>
              <div className='content-container'>
                {/* <ContentItem name="Movie Search" img_ext="/Images/Movies.png" site="https://movie-actor-search.herokuapp.com/" />  */}
                
                <Link to='/portfolio-visualizer'><ContentItem name="Stock Portfolio Visualizer" img_ext="/Images/PortfolioVisualization.png" site="https://portfolio-visualizer.netlify.app/" /> </Link>
                <Link to='/movie-search'><ContentItem name="Movie Search" img_ext="/Images/Movies.png" site="https://movie-actor-search.herokuapp.com/" /></Link> 
                <Link to='/userauth-search'><ContentItem name="User Authentication" img_ext='/Images/Auth.png' site='https://auth-mgb-app.herokuapp.com/' /> </Link>
                
                <ContentItem name="Stock Searcher" site="https://stock-searcher.netlify.app/" img_ext="/Images/Stocks.png"/>
                <ContentItem name="Shopping Cart" img_ext='/Images/ShoppingCart.jpg' site="https://tech-shopping-cart.netlify.app/" />
                <ContentItem name="Random Person Generator" site="https://randompersongenerator.netlify.app" img_ext='/Images/RPG.jpeg'/>
                <ContentItem name="Filterable Product Table" img_ext='/Images/FTP.jpg' site="https://filterabletable.netlify.app/" />                 
                
                {/*<ContentItem name="Movies" img_ext='/Images/RPG.jpeg' /> 
                <ContentItem name="Movies" img_ext='/Images/RPG.jpeg' />   */}
              </div>
            </Route>
            <Route path='/portfolio-visualizer'>
              <PortfolioViz />
            </Route>
            <Route path='/userauth-search'>
              <UserAuth />
            </Route>
            <Route path='/movie-search'>
              <Movies />
            </Route>
            <Route path="/resume">              
              <Resume />
            </Route>
            <Route path='/contact'>
              <div className="nav-container" >
                <NavigationBar items={nav_items}/>
              </div>
              <Contact />
            </Route>
            <Route path="/about">
              <div className="nav-container" >
                <NavigationBar items={nav_items}/>
              </div>
              <About />
            </Route>
            <Route path="/home">
              <div className="nav-container" >
                <NavigationBar items={nav_items}/>
              </div>
              <Home />
            </Route>
            <Route path="/">
              <div className="nav-container" >
                <NavigationBar items={nav_items}/>
              </div>
              <Home />
            </Route>
          </Switch>
          <Footer />
          </ScrollToTop>
          </Analytics>
        </HashRouter>
      </div>
    );
}
export default App;
