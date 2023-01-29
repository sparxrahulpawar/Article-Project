import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewArticle = () => {
  const [data, setData] = useState([]);

  const getUsers = () => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:8080/api/userArticle", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = async (id) => {
    const res = await axios
      .delete(`http://localhost:8080/api/deleteArticle/${id}`)
      .then(() => {
        getUsers();
      });

    if (res.statusCode === 200) {
      toast("Article Deleted Successfully");
    }
  };

  return (
    <Layout>
      <section className="article-list p-3">
        <div className="col">
          <p className="h3 text-success fw-bold p-3">View User Article</p>
          <Link to={"/"} className="btn btn-dark ms-2">
            <i className="fa fa-eye me-1" /> Home
          </Link>
        </div>
        {data.map((item) => (
          <>
            <div className="container">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="row align-items-center d-flex  justify-content-around">
                      <div className="col-md-7">
                        <ul className="list-group">
                          <li className="list-group-item list-group-item-action">
                            ImageUrl:
                            <span className="fw-bold">{item.imageUrl}</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                            Title:<span className="fw-bold">{item.title}</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                            Tags:<span className="fw-bold">{item.tags}</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                            Category:
                            <span className="fw-bold">{item.category}</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                            {item.body}
                          </li>
                        </ul>
                        <div className="row-md-1  p-2">
                          <Link
                            to={`/article/edit/${item._id}`}
                            className="btn btn-primary"
                          >
                            <i className="fa fa-pen"></i>
                          </Link>
                          &nbsp;
                          <Link
                            onClick={() => {
                              handleDelete(item._id);
                            }}
                            className="btn btn-danger"
                          >
                            <i className="fa fa-trash"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            &nbsp;
          </>
        ))}
      </section>
      <ToastContainer />
    </Layout>
  );
};

export default ViewArticle;
