import * as React from 'react';
import * as moment from 'moment';
import { useState, useMemo, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { notifyError } from "../../Pages/toast";
import { Button, Modal } from 'react-bootstrap';
import './Home.css';

export default function NavBar() {


     return (
          <>
               <div className='col-12' id='navhead'>
                    <nav className="navbar navbar-expand-lg  mr-4 navlogin" style={{ justifyContent: 'flex-end' }}>
                         <ul className='d-flex mr-auto' style={{ marginRight: '50px',listStyleType:'none' }}>
                              <li>
                                   <a className="nav-link" href="#">Login <span className="sr-only"></span></a>
                              </li>
                              <li>
                                   <a className="nav-link" href="#">Register<span className="sr-only"></span></a>
                              </li>
                         </ul>
                    </nav>
                    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                         <div className='col-md-2'>
                              <a className="navbar-brand" href="#" style={{ marginLeft: '30px', fontSize: 'xx-large' }} >Kaji.com</a>
                         </div>
                         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                         </button>

                         <div className="collapse navbar-collapse col-md-10" id="navbarSupportedContent" style={{ justifyContent: 'space-around' }}>
                              <div className='col-md-8'>
                                   <ul className="navbar-nav mr-auto" style={{ justifyContent: 'center' }}>
                                        <li className="nav-item active">
                                             <a className="nav-link" href="/home">Home </a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link" href="/test">About</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                             <a className="nav-link " href="#" > Contact </a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link " href="#">Blog</a>
                                        </li>
                                   </ul>
                              </div>

                              <div className='col-md-3'>
                                   <form className="form-inline my-2 my-lg-0 d-flex" style={{ marginRight: '20px' }} >
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className=" btn btn-outline-success my-2 my-sm-0 nav-button" type="submit" >Search</button>

                                   </form>
                              </div>
                         </div>
                    </nav>
               </div>
          </>
     )

}