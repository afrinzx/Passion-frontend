import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "./Container";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid "
              />
              <div className="wishlist-card-image">
                <img
                  src="images/famous-2.jpg"
                  className="imgg w-100"
                  alt="laptop"
                />
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor T1 7.0 8 GB RAM 128 GB ROM 7 Inch With Wi-Fi+5G Tablet
                  </h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid "
              />
              <div className="wishlist-card-image">
                <img
                  src="images/famous-3.jpg"
                  className="imgg w-100"
                  alt="watch"
                />
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor T1 7.0 8 GB RAM 128 GB ROM 7 Inch With Wi-Fi+5G Tablet
                  </h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid "
              />
              <div className="wishlist-card-image">
                <img src="images/tab.jpg" className="imgg w-100" alt="tab" />
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor T1 7.0 8 GB RAM 128 GB ROM 7 Inch With Wi-Fi+5G Tablet
                  </h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid "
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch1.jpg"
                  className="imgg w-100"
                  alt="watch"
                />
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor T1 7.0 8 GB RAM 128 GB ROM 7 Inch With Wi-Fi+5G Tablet
                  </h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid "
              />
              <div className="wishlist-card-image">
                <img
                  src="images/famous-2.jpg"
                  className="imgg w-100"
                  alt="laptop"
                />
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor T1 7.0 8 GB RAM 128 GB ROM 7 Inch With Wi-Fi+5G Tablet
                  </h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid "
              />
              <div className="wishlist-card-image">
                <img
                  src="images/famous-3.jpg"
                  className="imgg w-100"
                  alt="watch"
                />
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor T1 7.0 8 GB RAM 128 GB ROM 7 Inch With Wi-Fi+5G Tablet
                  </h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid "
              />
              <div className="wishlist-card-image">
                <img src="images/tab.jpg" className="imgg w-100" alt="tab" />
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor T1 7.0 8 GB RAM 128 GB ROM 7 Inch With Wi-Fi+5G Tablet
                  </h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid "
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch1.jpg"
                  className="imgg w-100"
                  alt="watch"
                />
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor T1 7.0 8 GB RAM 128 GB ROM 7 Inch With Wi-Fi+5G Tablet
                  </h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
