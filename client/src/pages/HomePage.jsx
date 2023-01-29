import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layouts/Layout";

const HomePage = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/allArticles");
      setData(response.data);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <section className="article-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3">
                  Article
                  <Link to={"/article/add"} className="btn btn-primary ms-2">
                    <i className="fa fa-plus-circle me-1" /> ADD
                  </Link>
                  <Link to={"/article/view"} className="btn btn-primary ms-2">
                    <i className="fa fa-eye me-1" /> View-User-Article
                  </Link>
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt similique obcaecati impedit? Ullam soluta quod
                  voluptates explicabo ipsam tenetur quibusdam accusantium,
                  officiis quia provident molestias qui et culpa animi? Eaque?
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-outline-dark"
                        value="Search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        {data.map((item) => (
          <div key={item.id}>
            <section className="article-list">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <div className="card bg-light">
                      <div className="card-body">
                        <div className="row align-items-center ">
                          <div className="col-md-7">
                            <ul className="list-group">
                              <li className="list-group-item list-group-item-action">
                                ImageUrl:
                                <span className="fw-bold">{item.imageUrl}</span>
                              </li>
                              <li className="list-group-item list-group-item-action">
                                Title:
                                <span className="fw-bold">{item.title}</span>
                              </li>
                              <li className="list-group-item list-group-item-action">
                                Tags:
                                <span className="fw-bold">{item.tags}</span>
                              </li>
                              <li className="list-group-item list-group-item-action">
                                Category:
                                <span className="fw-bold">{item.category}</span>
                              </li>
                              <li className="list-group-item list-group-item-action">
                                {item.body}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    &nbsp;
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
