import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddArticle = () => {
  const [formData, setFormData] = useState({
    imageUrl: "",
    title: "",
    tags: "",
    category: "",
    body: "",
  });
  const [ setError] = useState(null);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8080/api/add-article", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        toast("Article Added Successfully");
      })
      .catch((err) => {
        setError(err.message);
      });
    
  };

  return (
    <Layout>
      <section>
        <div className="add-article">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="h3 text-success fw-bold p-3">Create Article</p>
                <p className="fst-italic">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Libero obcaecati assumenda repellat porro et cupiditate quae
                  numquam esse sint? Asperiores placeat velit non. Eius,
                  molestias! Voluptatum quidem totam ducimus facilis.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <input
                      onChange={handleChange}
                      type="text"
                      name="imageUrl"
                      value={formData.imageUrl}
                      className="form-control"
                      placeholder="ImageUrl"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      onChange={handleChange}
                      type="text"
                      name="title"
                      value={formData.title}
                      className="form-control"
                      placeholder="Title"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      onChange={handleChange}
                      type="text"
                      name="tags"
                      value={formData.tags}
                      className="form-control"
                      placeholder="Tags use,"
                    />
                  </div>
                  <div className="mb-2">
                    <select
                      onChange={handleChange}
                      class="form-select"
                      name="category"
                      value={formData.category}
                      aria-label="Default select example"
                    >
                      <option selected>Open this select category</option>
                      <option value="Educational">Educational </option>
                      <option value="Social media">Social media</option>
                      <option value="Entertainment">Entertainment </option>
                      <option value="Nature">Nature </option>
                      <option value="Technology">Technology </option>
                      <option value="Others">Others </option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <textarea
                      onChange={handleChange}
                      class="form-control"
                      name="body"
                      value={formData.body}
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Body, Enter Text Here"
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <input
                      type="submit"
                      className="btn btn-success"
                      value="Create"
                    />
                    <Link to={"/article/view"} className="btn btn-dark ms-2">
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </Layout>
  );
};

export default AddArticle;
