import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditArticle = () => {
  const { id } = useParams();
  //   const [msg, setMsg] = useState("");
  const [imageUrl, setImageUrl] = useState();
  const [title, setTitle] = useState();
  const [tags, setTags] = useState();
  const [category, setCategory] = useState();
  const [body, setBody] = useState();

  const fetchData = async () => {
    const res = await fetch(`http://localhost:8080/api/userArticle/${id}`);
    const jsonData = await res.json();
    setImageUrl(jsonData.imageUrl);
    setTitle(jsonData.title);
    setTags(jsonData.tags);
    setCategory(jsonData.category);
    setBody(jsonData.body);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(`http://localhost:8080/api/editArticle/${id}`, {
      imageUrl: imageUrl,
      title: title,
      tags: tags,
      category: category,
      body: body,
    });
    if (res.statusCode === 200) {
      toast("Article Edit Successfully");
    }
  };

  return (
    <Layout>
      <section>
        <div className="add-article">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="h3 text-primary fw-bold p-3">Edit Article</p>
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
                      type="text"
                      value={imageUrl}
                      onChange={(event) => setImageUrl(event.target.value)}
                      className="form-control"
                      placeholder="ImageUrl"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Title"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      value={tags}
                      onChange={(event) => setTags(event.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Tags use,"
                    />
                  </div>
                  <div className="mb-2">
                    <select
                      value={category}
                      onChange={(event) => setCategory(event.target.value)}
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select category</option>
                      <option value="1">Educational </option>
                      <option value="2">Social media</option>
                      <option value="3">Entertainment </option>
                      <option value="3">Nature </option>
                      <option value="3">Technology </option>
                      <option value="3">Others </option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <textarea
                      value={body}
                      onChange={(event) => setBody(event.target.value)}
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Body, Enter Text Here"
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Update"
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

export default EditArticle;
