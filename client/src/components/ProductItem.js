import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../js/action/productAction";
import EditModal from "./EditModal"
const ProductItem = ({ product }) => {
    const dispatch = useDispatch()

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://www.mega.tn/assets/uploads/img/pr_telephonie_mobile/1518877680_313.jpg" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
           <p>{product.price}</p>
           <p>{product.company}</p>
           <p>{product.category}</p>
          </Card.Text>
          <Button variant="danger" onClick={() => dispatch(deleteProduct(product._id))}>delete</Button>
          <EditModal product={product}/>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductItem;
