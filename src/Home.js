import React, { Component } from 'react';
import home_banner from '../src/images/main_banner.png';
import{
    Link
 } from 'react-router-dom'



export default class HomeBanner extends Component {
    render() {
      return (
        <>
        
        <div className="main_banner">
                <img className="img-fluid" src={home_banner} />
                <div className="banner_text">
                <div className="container-fluid">
                <div className="row ">
                <div className="col-md-6 ">
                        <h2>Get your fabric stiched from the comfort of your home</h2>
                        <a className="banner-button">Make an Appointment</a>
                        </div>
                        <div className="col-md-6 "></div>
                    </div>
                </div>
                </div>
                <div className="home_search">
            
            <div className="container">
            <div className="row ">
            
            <div className="col-md-12">
            <form>
            <div class="form-row">
              
                    <div className="col-md-3">
                    <input type="text" className="form-control" placeholder="Name"/>
                    </div>
                    <div className="col-md-3">
                    <input type="text" className="form-control" placeholder="Type of Stiching"/>
                    </div>
                    <div className="col-md-3">
                    <input type="text" className="form-control" placeholder="+91 9876543210"/>
                    </div>
                    <div className="col-md-3">
                    <button type="submit" class="btn btn-primary btn-block">Search</button>
                    </div>
                    
                    </div>
                    </form>
            </div>
            </div>
            </div>
            </div>


      </div>
      <AfterBanner/>
      </>
   
      );
    }
  }
  export class AfterBanner extends Component {
    render() {
      return (
        <>
        
        <div className="after_banner">
            
                <div className="container">
                <div className="row ">
                
                <div className="col-md-6">
                    <div className="left_side inner_side">
                        <p>Have a Fabric That You Want to</p>
                        <Link to="" className="btn btn-primary btn-block after_button">Get Stitched?</Link>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="right_side inner_side">
                        <p>Saw a Designer Wear on the internet and</p>
                        <Link to="" className="btn btn-primary btn-block after_button">What to get it Stitched?</Link>
                    </div>
                </div>
                </div>
                </div>
                </div>
      </>
      );
    }
  }
  
  