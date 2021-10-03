import React, {useState, useEffect} from 'react'
import { HashRouter,BrowserRouter,Route, Link, Switch } from 'react-router-dom';
import './App.css';

import About from './pages/About/About'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'


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
      <img id="photo" src={process.env.PUBLIC_URL + "Images/me.jpg"} alt={"toddford"}/>
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
        <img height='200px' width='200px' src={process.env.PUBLIC_URL + props.img_ext} alt={props.name} href="http://espn.com"/>
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
  const nav_items = ['Home', 'Portfolio'];

    return (
      <div className='ReactParent'>
        <HashRouter>
        <div className="nav-container" >
          <NavigationBar items={nav_items}/>
        </div>
        
        <Switch>
            <Route path="/portfolio">
              <div className='content-container'>
                <ContentItem name="Movie Search" img_ext="/Images/Movies.png" site="https://movie-actor-search.herokuapp.com/" /> 
                <ContentItem name="User Authentication" img_ext='/Images/Auth.png' site='https://auth-mgb-app.herokuapp.com/' /> 
                <ContentItem name="Stock Portfolio Visualizer" img_ext="/Images/PortfolioVisualization.png" site="https://portfolio-visualizer.netlify.app/" />  
                <ContentItem name="Stock Searcher" site="https://stock-searcher.netlify.app/" img_ext="/Images/Stocks.png"/>
                <ContentItem name="Shopping Cart" img_ext='/Images/ShoppingCart.jpg' site="https://tech-shopping-cart.netlify.app/" />
                <ContentItem name="Random Person Generator" site="https://randompersongenerator.netlify.app" img_ext='/Images/RPG.jpeg'/>
                <ContentItem name="Filterable Product Table" img_ext='/Images/FTP.jpg' site="https://filterabletable.netlify.app/" />                 
                
                {/*<ContentItem name="Movies" img_ext='/Images/RPG.jpeg' /> 
                <ContentItem name="Movies" img_ext='/Images/RPG.jpeg' />   */}
              </div>
            </Route>
            {/* <Route path="/blog">
              <Blog />
            </Route> */}
            <Route path="/about">
              <About />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              {/* <Header name="Todd Ford" description="Software Developer" /> */}
              <Home />
            </Route>
          </Switch>
          <Footer />
        </HashRouter>
      </div>
    );
}
export default App;
