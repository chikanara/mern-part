
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProduct, editProduct } from "../js/action/productAction";

const AddModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [company, setCompany] = useState();
  const dispatch = useDispatch()
  const handleEdit = () => {
      dispatch(addProduct({name,category,company,price}))
      handleClose()
  }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <label htmlFor="">¨Category</label>
            <p>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              />
            </p>
            <label htmlFor="">Company</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setCompany(e.target.value)}
              value={company}
            />
            <label htmlFor="">Price</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddModal;

