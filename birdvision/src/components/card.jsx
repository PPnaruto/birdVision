import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({image, title, price, id}) => {
    const navigate = useNavigate()
    const onNavigate = () =>{
        navigate(`/products/${id}`)
    }
  return (
    <div class="card" style={{width: "18rem"}} onClick={onNavigate}>
      <img class="card-img-top" src={image} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p>${price}</p>
        <a class="btn btn-primary">
          See Details
        </a>
      </div>
    </div>
  );
};

export default Card;
