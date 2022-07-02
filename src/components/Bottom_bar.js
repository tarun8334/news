import React from "react";
import './Home_page.css';
import "bootstrap/dist/css/bootstrap.min.css";
import vector from './v2.png';
import coin from './solana.png';
import qrcode from './qr.png';
import dollar from './dollar.png';
import polygon from './polygon.png';
import home from './home.png';
import orders from './orders.png';
import portfolio from './portfolio.png';
import reverse from './reverse.png';
import wallet from './wallet.png';
import new_img from './new_img.png';
import refresh from './refresh.png';

function Bottom_bar() {
  return (
      
    <div className='row bottom_bar'>
    <div className='col-2 home_image'>
        <img src={home}></img>

    </div>
    <div className='col-1'></div>
    <div className='col-1'>
        <img src={orders}></img>
        
    </div>
    <div className='col-1'></div>
    <div className='col-2 reverse_image'>
        <img src={reverse} className='swap'></img>
    </div>
    <div className='col-1'></div>
    <div className='col-2'>
        <img src={portfolio}></img>
    </div>
    <div className='col-2 wallet_image'>
        <img src={wallet}></img>
    </div>

</div>

  )
  }

export default Bottom_bar;
