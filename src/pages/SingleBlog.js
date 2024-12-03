import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Find By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Home</li>
                    <li>Our Store</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-5"/> Go back to Blogs
                </Link>
                <h3 className="title">
                  A beautiful Sunday Morning Renaissance
                </h3>
                <div className="card-image ">
                  <img
                    src="/images/blog-1.jpg"
                    className="img-fluid w-100 my-4"
                    alt="blog"
                  />
                  <p className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda aspernatur reprehenderit ipsam laudantium nobis
                    voluptates alias doloribus tenetur esse facilis? Eum
                    sapiente illum error saepe, cupiditate tempora velit
                    inventore necessitatibus Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Assumenda aspernatur
                    reprehenderit ipsam laudantium nobis voluptates alias
                    doloribus tenetur esse facilis? Eum sapiente illum error
                    saepe, cupiditate tempora velit inventore necessitatibus!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
