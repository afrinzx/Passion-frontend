import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import laptop from "../images/laptop.jpg";
import Container from "./Container";
import CustomInput from "../components/CustomInput";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Passion</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" href="#">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item active total-price"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item active total-price"
                    aria-current="page"
                  >
                    Shipping
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item active total-price"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h5 className="title total">Contact Information</h5>
              <p className="user-details total">
                Sadia Afrin (sadiaafrin21@iut-dhaka.edu)
              </p>
              <h5 className="title mb-3">Shipping Address</h5>
              <form
                action=""
                className="d-flex flex-wrap gap-15 justify-content-between"
              >
                <div className="w-100">
                  <select className="form-control form-select">
                    <option value="" selected disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                  />
                </div>
                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                  />
                </div>
                <div className="w-100">
                  <CustomInput
                    type="text"
                    name="address"
                    placeholder="Address"
                  />
                </div>
                <div className="w-100">
                  <CustomInput
                    type="text"
                    name="flat"       
                    placeholder="Apartment, Flat etc."
                  />
                </div>
                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    name="city"
                    placeholder="City"
                  />
                </div>
                <div className="flex-grow-1">
                  {" "}
                  <select className="form-control form-select">
                    <option value="" selected disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    name="zipcode"
                    placeholder="Zip Code"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                    <Link to="/shipping" className="button">
                      Continue to Shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 mb-2 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle p-1 position-absolute"
                    >
                      1
                    </span>
                    <img className="img-fluid" src={laptop} alt="product" />
                  </div>
                  <div>
                    <h5 className="total">
                      Kids watch bulk 10 pack multi colored for students
                    </h5>
                    <p className="total-price">Havel</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5>$ 100</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">$ 1000</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$ 1000</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">$ 1000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
