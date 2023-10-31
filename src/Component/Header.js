import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  return (
    <div className="slider-area ">
      <div className="slider-active">
        {/* <!-- Single Slider --> */}
        <div className="single-slider slider-height d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-9">
                <div className="hero__caption">
                  <h1>
                    Safe & Reliable <span>Logistic</span> Solutions!
                  </h1>
                </div>
                {/* <!--Hero form --> */}
                <form action="#" className="search-box" onSubmit={handleSearch}>
                  <div className="input-form">
                    <input
                      type="text"
                      placeholder="Your Tracking ID"
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                  </div>
                  <div className="search-form">
                    <Button type="submit">Track & Trace</Button>
                  </div>
                </form>
                {/* <Modal showModal={showModal} setShowModal={setShowModal}/> */}
                {/* <!-- Hero Pera --> */}
                <div className="hero-pera">
                  <p>For order status inquiry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 62px;
  background: #ff5f13;
  font-size: 20px;
  line-height: 1;
  text-align: center;
  color: #fff;
  display: block;
  padding: 15px;
  border-radius: 0px;
  text-transform: uppercase;
  font-family: "Barlow", sans-serif;
  line-height: 1.2;
  line-height: 29px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.03em;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
