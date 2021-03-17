import React from "react";

function Card(props){
    return(
      
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">{props.title}</h5>
          <h6 class="card-price text-center">${props.price}<span class="period">/month</span></h6>
          <hr />
          <ul class="fa-ul">
            <li><span class="fa-li"><i class="fa fa-check"></i></span>{props.users}</li>
            <li><span class="fa-li"><i class="fa fa-check"></i></span>{props.storage}</li>
            <li><span class="fa-li"><i class="fa fa-check"></i></span>{props.public_projects}</li>
            <li><span class="fa-li"><i class="fa fa-check"></i></span>{props.access}</li>

            {props.title === "Free" ? (
            <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>{props.private_projects}</li>):
            (<li><span class="fa-li"><i class="fa fa-check"></i></span>{props.private_projects}</li>)}


            {props.title === "Free" ? (
              <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>{props.phone_support}</li>):
              (<li><span class="fa-li"><i class="fa fa-check"></i></span>{props.phone_support}</li>)
            }
            
            {props.title === "Free" ? (
            <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>{props.subdomain}</li>): 
            (
              props.title === "Pro" ? (
                <li><span className="fa-li"><i className="fa fa-check"></i></span><strong>Unlimited </strong>{props.subdomain}</li>): 
                (<li><span className="fa-li"><i className="fa fa-check"></i></span>{props.subdomain}</li>)
            
          )}
            
            {props.title === "Pro"?(     
            <li><span class="fa-li"><i class="fa fa-check"></i></span>{props.status_report}</li>):(
            <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>{props.status_report}</li>
            )}
            
          </ul>
          <a href="#" class="btn btn-block btn-primary text-uppercase">Button</a>
        </div>
      </div>
    
    )
}

export default Card;