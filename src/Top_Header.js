import React, { Component } from 'react';
import logo from '../src/images/logo.png';
import menu_img from '../src/images/menu.png';
import{
    Link
 } from 'react-router-dom'

export default class Top_Header extends Component {
  render() {
    return (
      <>
      <div className="top_header">
          <div className="container-fluid">
          <div className="row">
          <div className="col-6">
            <ul className="social">
            <li><Link to=""><i class="fa fa-instagram"></i></Link></li>
          <li><Link to=""><i class="fa fa-facebook-f"></i></Link></li>
          
          </ul>
          </div>
          <div className="col-9"> 
        
        </div>
        </div>
        </div>
        </div>
      <Main_Header/>
      </>
    );
  }
}





export class Main_Header extends Component {
  render() {
    return (
      <>
          <div className="main_header">
          <div className="container-fluid">
          <div className="row">
          <div className="logo col-6 ">
              <img src={logo} />
          </div>
          <div className="col-6 navi text-right align-self-center"> 
          <img src={menu_img}/>
        {/* <ul> 
        <li><Link to="/">Home</Link> </li>
            <li><Link to="/about">About</Link> </li>
            <li><Link to="/contact">Contact</Link> </li>
        </ul> */}
        </div>
        </div>
        </div>
        </div>
      </>
    );
  }
}