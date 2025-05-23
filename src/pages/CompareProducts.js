import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";
import cross from "../images/cross.svg";
import watch2 from "../images/watch2.jpg";
import laptop from "../images/laptop.jpg";
import speaker from "../images/speaker.jpg";
import Container from "./Container";

const CompareProducts = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute cross img-fluid "
              />
              <div className="product-card-image">
                <img src={watch2} className="imgg w-100" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title mt-3">
                  Honor T1 7.0 8 GB RAM 128 GB ROM 7 Inch With Wi-Fi+5G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">$ 100</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand: </h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type: </h5>
                    <p>Tablet Computers</p>
                  </div>
                  <div className="product-detail">
                    <h5>SKU </h5>
                    <p>SKU033</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availability: </h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color: </h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size: </h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                      <p>L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute cross img-fluid "
              />
              <div className="product-card-image">
                <img src={laptop} className="imgg w-100" alt="laptop" />
              </div>
              <div className="compare-product-details">
                <h5 className="title mt-3">
                  Honor T1 7.0 8 GB RAM 128 GB ROM 7 Inch With Wi-Fi+5G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">$ 100</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand: </h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type: </h5>
                    <p>Tablet Computers</p>
                  </div>
                  <div className="product-detail">
                    <h5>SKU </h5>
                    <p>SKU033</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availability: </h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color: </h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size: </h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                      <p>L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute cross img-fluid "
              />
              <div className="product-card-image">
                <img src={speaker} className="imgg w-100" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title mt-3">
                  Honor T1 7.0 8 GB RAM 128 GB ROM 7 Inch With Wi-Fi+5G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">$ 100</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand: </h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type: </h5>
                    <p>Tablet Computers</p>
                  </div>
                  <div className="product-detail">
                    <h5>SKU </h5>
                    <p>SKU033</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availability: </h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color: </h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size: </h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                      <p>L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProducts;
