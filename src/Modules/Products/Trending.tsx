
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Product.css"
import jacket from './../../images/products/jacket.jpg';
import jeans from './../../images/products/jeans.jpg';
import shirt from './../../images/products/shirt.jpg';
import sunglass from './../../images/products/sunglass.jpg';
import topi from './../../images/products/topi.jpg';

export default function Trending() {
     return (
          <div className='row'>
               <div className='col-md-12'>
                    <div className='justify-content-center'>
                         <h1 className='pickshead'></h1>
                    </div>
               </div>
               <div className="col-md-12 col-lg-12 col-sm-12  d-flex flex-wrap" style={{ justifyContent: 'center', marginBottom: '20px' }}>

                   
                    <div className="card card-wrap picksofseasoncard" style={{ width: '18rem', height: '25rem' }}>
                         <img className="card-img-top" src={jacket} alt="Card image cap" style={{height:'210px;'}}/>
                         <div className="card-body">
                              <strong>High Quality Ray ban SunGlass</strong>
                              <h5 style={{ marginLeft: '1px', paddingTop: '1px' }}>Rs.<span className='text-warning'><strong>5000.00</strong></span></h5>
                         </div>
                         <div className='card-footer d-grid'>
                              <button className='btn btn-warning' >Shop Now</button>
                         </div>
                    </div>
                    <div className="card card-wrap picksofseasoncard" style={{ width: '18rem', height: '25rem' }}>
                         <img className="card-img-top" src={sunglass} alt="Card image cap" style={{height:'210px;'}}/>
                         <div className="card-body">
                              <strong>High Quality Ray ban SunGlass</strong>
                              <h5 style={{ marginLeft: '1px', paddingTop: '1px' }}>Rs.<span className='text-warning'><strong>5000.00</strong></span></h5>
                         </div>
                         <div className='card-footer d-grid'>
                              <button className='btn btn-warning' >Shop Now</button>
                         </div>
                    </div>
             
           
                    <div className="card card-wrap picksofseasoncard" style={{ width: '18rem', height: '25rem' }}>
                         <img className="card-img-top" src={jeans} alt="Card image cap" style={{height:'210px;'}}/>
                         <div className="card-body">
                              <strong>High Quality Ray ban SunGlass</strong>
                              <h5 style={{ marginLeft: '1px', paddingTop: '1px' }}>Rs.<span className='text-warning'><strong>5000.00</strong></span></h5>
                         </div>
                         <div className='card-footer d-grid'>
                              <button className='btn btn-warning' >Shop Now</button>
                         </div>
                    </div>
                    <div className="card card-wrap picksofseasoncard" style={{ width: '18rem', height: '25rem' }}>
                         <img className="card-img-top" src={shirt} alt="Card image cap" style={{height:'210px;'}}/>
                         <div className="card-body">
                              <strong>High Quality Ray ban SunGlass</strong>
                              <h5 style={{ marginLeft: '1px', paddingTop: '1px' }}>Rs.<span className='text-warning'><strong>5000.00</strong></span></h5>
                         </div>
                         <div className='card-footer d-grid'>
                              <button className='btn btn-warning' >Shop Now</button>
                         </div>
                    </div>
            
                   

               </div>
          </div>

     );
}


