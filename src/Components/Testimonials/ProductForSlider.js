import React from "react";
import { Card } from "react-bootstrap";
import './ProductSlider.css'


const ProductCard = ({product}) => {
  return (
    <div className="CardDiv">
      <Card className="Card" >
      <Card.Body>
      <Card.Img className="CardImage" variant="top" src={product.Icon3} />
        <h1 style={{margin: "2px",fontWeight: "bold"}}>{product.username}</h1>
        <Card.Text className="text-center">
          {product.feedback}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};

export default ProductCard;