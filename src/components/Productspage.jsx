
import React, { useState } from "react";
import { Form, Button , Container} from "react-bootstrap";
import http from '../lib/http'
import { useNavigate } from "react-router-dom";

const ProductsPage = ({productid}) => {    
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState('');
  const [image, setImage] = useState();
  const [validated, setValidated] = useState(false);
  const [onEdit, setOnEdit] = useState(false);

  async function submit(e) {
    e.preventDefault();
    e.stopPropagation();

    setValidated(true);

    if (!name || !branch || !description || !price) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", image);

      let uploadRes;

      if (image) {
        uploadRes = await http.post("/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      }

      const productData = {
        name: name,
        branch: branch,
        description: description, 
        price: price,
        image: uploadRes ? uploadRes.data.image_name : "",
        shop_id: productid,
        
      };
// console.log(productData)
      const res = await http.post("/products", productData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      navigate(`/shop/products/${id}`);
    } catch (e) {
      console.log(e);
    }
    setOnEdit(false)
  }

  return (
    <div className="mt-4">
      <button className='mr-2 btn btn-success span26' onClick = {() => setOnEdit(!onEdit)}>
        Add Product
      </button>
{
  onEdit &&
    (
      <div>
       <Container className='productspageoverlay'>
          <h3 className="mb-4 span28">Create Product</h3>
          <Form noValidate validated={validated} onSubmit={submit}>
            <Form.Group className="mb-4">
              <Form.Label className="span26">Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please enter a Name
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="span26">Branch</Form.Label>
              <Form.Control
                type="text"
                placeholder="Branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="span26">Description</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Description"
                value={description}
                rows={1}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please enter a description
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="span26">Price</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Price"
                value={price}
                rows={1}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please enter Price
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="span26">Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group>
              <div className="d-flex justify-content-end">
                <Button variant="dark" className="span26" type="submit">
                  Create Product
                </Button>
              </div>
            </Form.Group>
          </Form>
      </Container> 
      </div>
    )
}
    </div>
  );
};

export default ProductsPage;

