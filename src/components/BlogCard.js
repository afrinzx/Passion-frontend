import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image ">
        <img src="/images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">30 Nov, 2024</p> 
        <h5 className="title">A beautiful Sunday morning renaissance</h5>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          aspernatur reprehenderit ipsam laudantium nobis voluptates alias
          doloribus tenetur esse facilis? Eum sapiente illum error saepe,
          cupiditate tempora velit inventore necessitatibus!
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
