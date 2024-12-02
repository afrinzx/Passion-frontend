import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
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
                    className="img-fluid w-100"
                    alt="watch"
                  />
                  <div className="py-3">
                    {/* 5:49:48 */}
                  <h5 className="title">
                  Honor T1 7.0 8 GB RAM 128 GB ROM 7 Inch With Wi-Fi+5G Tablet
                  </h5>
                  <h6 className="price">$ 100</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
