
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import http from '../lib/http'
import { useNavigate } from "react-router-dom";

const ShopsPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [service, setService] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState();
  const [validated, setValidated] = useState(false);

  async function submit(e) {
    e.preventDefault();
    e.stopPropagation();

    setValidated(true);

    if (!name || !branch || !service || !about) {
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

      const shopData = {
        name: name,
        branch: branch,
        service: service,
        about: about,
        image: uploadRes ? uploadRes.data.image_name : "",
      };

      const res = await http.post("/shops", shopData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      navigate(`/${res.data.id}`);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="mt-4">
      <h3 className="mb-4">Create Shop</h3>
      <Form noValidate validated={validated} onSubmit={submit}>
        <Form.Group className="mb-4">
          <Form.Label>Name</Form.Label>
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
          <Form.Label>Branch</Form.Label>
          <Form.Control
            type="text"
            placeholder="Branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Service</Form.Label>
          <Form.Control
            required
            as="textarea"
            placeholder="Service"
            value={service}
            rows={1}
            onChange={(e) => setService(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please enter a Service
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>About</Form.Label>
          <Form.Control
            required
            as="textarea"
            placeholder="About"
            value={about}
            rows={1}
            onChange={(e) => setAbout(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please enter an About
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </Form.Group>
        <Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Create Shop
            </Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ShopsPage;

// id, name, branch, service, about, name2 ,image