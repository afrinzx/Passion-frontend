import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "./Container";

const SingleProduct = () => {
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: "https://enfield-bd.com/wp-content/uploads/2022/02/LIGE-Mens-Watches-Top-Luxury-Brand-Business-Quartz-Watch-Men-Military-Sports-Waterproof-Dress-Wristwatch-Black-Relogio-M.jpg",
  };
  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={"Single Product"} />
      <BreadCrumb title="Single Product" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="https://islamicshopbd.com/public/uploads/all/tE4DDrkG8H5wMbSAuiSBcXTrFjqGuP8hKYDJVsx1.jpg"
                  alt="watch"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://cdn.shopclues.com/images1/thumbnails/113285/320/320/152026201-113285390-1614014355.jpg"
                  alt="watch"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://enfield-bd.com/wp-content/uploads/2022/02/LIGE-Mens-Watches-Top-Luxury-Brand-Business-Quartz-Watch-Men-Military-Sports-Waterproof-Dress-Wristwatch-Black-Relogio-M.jpg"
                  alt="watch"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://static-01.daraz.com.bd/p/e0814d33edf16d647bd3b29678a5c23e.jpg"
                  alt="watch"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Kids watch bulk 10 pack multi colored for students
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ 100.00</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mt-3 t-review">( 2 Reviews )</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">Havels</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Categories :</h3>
                  <p className="product-data">watch, laptop</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">watch </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability :</h3>
                  <p className="product-data">In Stock </p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      L
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XXL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Color :</h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center gap-10 flex-row mt-2 mb-3">
                  <h3 className="product-heading">Quantity :</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "70px" }}
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-10 ms-5">
                    <button className="button border-0 " type="submit">
                      Add to Cart
                    </button>
                    <button className="button signup">Buy It Now</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="">
                      <TbGitCompare className="fs-5 me-2" /> Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product-heading">Shipping&Returns:</h3>
                  <p className="product-data">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda aspernatur reprehenderit ipsam laudantium nobis
                    voluptates alias doloribus tenetur esse facilis? Eum
                    sapiente illum error saepe, cupiditate tempora
                    <b>5-10 Business Days!</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">ProductLink:</h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(
                        "https://enfield-bd.com/wp-content/uploads/2022/02/LIGE-Mens-Watches-Top-Luxury-Brand-Business-Quartz-Watch-Men-Military-Sports-Waterproof-Dress-Wristwatch-Black-Relogio-M.jpg"
                      );
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda aspernatur reprehenderit ipsam laudantium nobis
                voluptates alias doloribus tenetur esse facilis? Eum sapiente
                illum error saepe, cupiditate tempora velit inventore
                necessitatibus!
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex gap-10 align-items-center">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mt-3">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <h4>Write a Review</h4>
                    <ReactStars
                      count={5}
                      size={24}
                      value={5}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="form-control w-100"
                      cols="30"
                      rows="4"
                      placeholder="Write your comments here"
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Sadia</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={5}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda aspernatur reprehenderit ipsam laudantium nobis
                    voluptates alias doloribus tenetur esse facilis? Eum
                    sapiente illum error saepe, cupiditate tempora velit
                    inventore necessitatibus!
                  </p>
                </div>
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Nabila</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={5}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda aspernatur reprehenderit ipsam laudantium nobis
                    voluptates alias doloribus tenetur esse facilis? Eum
                    sapiente illum error saepe, cupiditate tempora velit
                    inventore necessitatibus!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Polular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
