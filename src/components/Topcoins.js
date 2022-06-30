import React from "react";
import './Home_page.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Topcoins({data1}) {
  return (
    <div className="row back61">
    {/* <h1 className="head_news col-9">{data1.id}</h1>
   
    <div className='col-3 '>
       
               <img className="new_imgp" src={data1.image}></img>

               </div> */}

   <div className="col-2 padd123">
     <img className="crypto_img" src={data1.image}></img>
   </div>
<div className="col-7 padd321">
    <div className=" coin_row_name"><p className="font_name_coin">{data1.name} <span className="name_short">{data1.symbol}</span></p></div>

  <div>
    <div className="coin_row_pricing">{data1.current_price} <div className="spc"></div>{data1.price_change_percentage_24h}%</div>
   

  </div>
</div>
    

<div className="col-3 buy_btn">
    <div className="buybtntext" >BUY</div>

</div>


  </div>
);
}
export default Topcoins;
