import React from "react";
import { Container, Row, Col, Card, Button } from "reactstrap";
import Header from "../component/header/header2";
import Navbar from "../component/navbar/Navbar2";
import Footer from "../component/footer/Footer2";
import "../css/shop.css";

const Shop = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Container fluid>
        <div>
          <div className="section1 wakeup mb-4">
            <Container>
              <Row className="mt-5">
                <div className="text-block1 text-center mt-5 col-md-12 col-sm-6 ">
                  <p itemprop="headline" className="post-title mt-3 mb-5">
                    <a
                      className="text-decoration-none text-uppercase"
                      href="https://inertiawp.com/lifestyle-mag/wake-up-to-gorgeous-skin-with-the-10-best-night-creams-available-according-to-the-experts/"
                      rel="bookmark"
                    >
                      From the Editors
                    </a>
                  </p>

                  <h2 className="text-light text-center mb-5">
                    Your beauty, wellness & style items all in one place.
                  </h2>
                  <a
                    itemprop="url"
                    className="btn btn-border letter-spacing p-3 rouded"
                    href="https://inertiawp.com/lifestyle-mag/wake-up-to-gorgeous-skin-with-the-10-best-night-creams-available-according-to-the-experts/"
                  >
                    SHOP NOW
                  </a>
                </div>
              </Row>
            </Container>
          </div>

          <div className="section2 productwelove1 mt-5">
            <Container>
              <h2 className="text-center pt-5">Products We Love</h2>
              <p className="subtitle text-center pb-3">
                Featured products your will love from the shop.
              </p>
              <Row>
                <div className="col-md-3 col-sm-6 mb-4 pb-4">
                  <Card style={{ height: "460px" }}>
                    <div>
                      <img
                        className="resized-image"
                        width={"100%"}
                        height={"300px"}
                        src="https://inertiawp.com/shop/wp-content/uploads/sites/34/2022/08/pexels-anete-lusina-5240621.jpg"
                      />

                      <div className="item-text">
                        <p className="text-uppercase life mt-3">BEAUTY</p>
                        <h5 itemprop="headline" className="mb-2">
                          The Take It (All) Off Kit
                        </h5>
                        <p
                          itemprop="text"
                          class="excerpt line-clamp clamp-s small"
                        >
                          $11.05
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="col-md-3 col-sm-6 mb-4 pb-4">
                  <Card style={{ height: "460px" }}>
                    <div>
                      <img
                        className="resized-image"
                        width={"100%"}
                        height={"300px"}
                        src="https://inertiawp.com/lifestyle-mag/wp-content/uploads/sites/12/2022/09/pexels-furkanfdemir-6215308.jpg"
                      />

                      <div className="item-text">
                        <p className="text-uppercase life mt-3">
                          LIFESTYLE PRODUCTS
                        </p>
                        <h5 itemprop="headline" className="mb-2">
                          Minty Mineral Hydra
                        </h5>
                        <p
                          itemprop="text"
                          class="excerpt line-clamp clamp-s small"
                        >
                          $18.00 – $45.00
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="col-md-3 col-sm-6 mb-4 pb-4">
                  <Card style={{ height: "460px" }}>
                    <div>
                      <img
                        className="resized-image"
                        width={"100%"}
                        height={"290px"}
                        src="https://inertiawp.com/lifestyle-mag/wp-content/uploads/sites/12/2022/09/pexels-ann-poan-5797999.jpg"
                      />

                      <div className="item-text">
                        <p className="text-uppercase life mt-3">
                          LIFESTYLE PRODUCTS
                        </p>
                        <h5 itemprop="headline" className="mb-2">
                          Nourishing Repair Body Butter
                        </h5>
                        <p
                          itemprop="text"
                          class="excerpt line-clamp clamp-s small"
                        >
                          $18.00
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="col-md-3 col-sm-6 mb-4 pb-5">
                  <Card style={{ height: "460px" }}>
                    <div>
                      <img
                        className="resized-image"
                        width={"100%"}
                        height={"290px"}
                        src="https://inertiawp.com/shop/wp-content/uploads/sites/34/2022/08/pexels-dagmara-dombrovska-6738804.jpg"
                      />

                      <div className="item-text">
                        <p className="text-uppercase life mt-3">SKINCARE</p>
                        <h5 itemprop="headline" className="mb-2">
                          Nourishing Repair Body Butter
                        </h5>
                        <p
                          itemprop="text"
                          class="excerpt line-clamp clamp-s small"
                        >
                          <strike style={{ color: "red" }}>$20.00</strike>{" "}
                          $18.00
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Part2 */}

                <div className="col-md-3 col-sm-6 mb-2 pb-5">
                  <Card style={{ height: "460px" }}>
                    <div>
                      <img
                        className="resized-image"
                        width={"100%"}
                        height={"280px"}
                        src="https://inertiawp.com/shop/wp-content/uploads/sites/34/2022/08/pexels-karolina-grabowska-4202325.jpg"
                      />

                      <div className="item-text">
                        <p className="text-uppercase life mt-3">MASK</p>
                        <h5 itemprop="headline" className="mb-2">
                          Morning Routine: The Kit
                        </h5>
                        <p
                          itemprop="text"
                          class="excerpt line-clamp clamp-s small"
                        >
                          <strike style={{ color: "red" }}>$3.00</strike>
                          $2.00
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="col-md-3 col-sm-6 mb-2 pb-5">
                  <Card style={{ height: "460px" }}>
                    <div>
                      <img
                        className="resized-image"
                        width={"100%"}
                        height={"280px"}
                        src="https://inertiawp.com/shop/wp-content/uploads/sites/34/2022/08/pexels-sarah-chai-7262997.jpg"
                      />

                      <div className="item-text">
                        <p className="text-uppercase life mt-3">MASK</p>
                        <h5 itemprop="headline" className="mb-2">
                          Inertia’s Spa Day Kit
                        </h5>
                        <p
                          itemprop="text"
                          class="excerpt line-clamp clamp-s small"
                        >
                          {/* <strike style={{ color: "red" }}>$3.00</strike> */}
                          $15.00
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="col-md-3 col-sm-6 mb-2 pb-5">
                  <Card style={{ height: "460px" }}>
                    <div>
                      <img
                        className="resized-image"
                        width={"100%"}
                        height={"280px"}
                        src="https://inertiawp.com/shop/wp-content/uploads/sites/34/2022/08/pexels-anete-lusina-4792681.jpg"
                      />

                      <div className="item-text">
                        <p className="text-uppercase life mt-3">CLEANSERS</p>
                        <h5 itemprop="headline" className="mb-2">
                          15% Glycolic Acid Overnight Glow Peel
                        </h5>
                        <p
                          itemprop="text"
                          class="excerpt line-clamp clamp-s small"
                        >
                          {/* <strike style={{ color: "red" }}>$3.00</strike> */}
                          $20.00
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="col-md-3 col-sm-6 mb-2 pb-5">
                  <Card style={{ height: "460px" }}>
                    <div>
                      <img
                        className="resized-image"
                        width={"100%"}
                        height={"280px"}
                        src="https://inertiawp.com/shop/wp-content/uploads/sites/34/2022/08/pexels-karolina-grabowska-4210340.jpg"
                      />

                      <div className="item-text">
                        <p className="text-uppercase life mt-3">MOISTURIZER</p>
                        <h5 itemprop="headline" className="mb-2">
                          All-in-One Nourishing Face Cream
                        </h5>
                        <p
                          itemprop="text"
                          class="excerpt line-clamp clamp-s small"
                        >
                          <strike style={{ color: "red" }}>$45.00</strike>
                          $20.00
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="col-md-12 col-sm-12 d-flex justify-content-center">
                  <a
                    itemprop="url"
                    className="btn btn-border text-decoration-none p-3 shop"
                    href="https://inertiawp.com/lifestyle-mag/wake-up-to-gorgeous-skin-with-the-10-best-night-creams-available-according-to-the-experts/"
                  >
                    SHOP ALL
                  </a>
                </div>
              </Row>
            </Container>
          </div>

          <div className="section3 wakeup1 mb-4">
            <Container>
              <Row className="mt-5">
                <div className="text-block2 text-center mt-5 col-md-12 col-sm-6 ">
                  <p itemprop="headline" className="post-title mt-0 mb-3">
                    <a
                      className="text-decoration-none text-uppercase"
                      href="https://inertiawp.com/lifestyle-mag/wake-up-to-gorgeous-skin-with-the-10-best-night-creams-available-according-to-the-experts/"
                      rel="bookmark"
                    >
                      Introducing
                    </a>
                  </p>

                  <h2 className="text-light text-center mb-4">
                    A Featured Top-Selling Product
                  </h2>
                  <a
                    itemprop="url"
                    className="btn btn-border letter-spacing p-3 rouded mb-4"
                    href="https://inertiawp.com/lifestyle-mag/wake-up-to-gorgeous-skin-with-the-10-best-night-creams-available-according-to-the-experts/"
                  >
                    SHOP NOW
                  </a>
                </div>
              </Row>
            </Container>
          </div>

          <div class="section-4 m-5">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-6 col-sm-12">
                  <div class="item-img card border-radius">
                    <img
                      class="img-fluid"
                      style={{  width: '100%' }}
                      src="https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-vlada-karpovich-7368269-1536x1024.jpg"
                      alt="Summer Wardrobe"
                    />
                  </div>
                </div>
                <div class="col-md-6 col-sm-12">
                  <div class="text-block text-center text-dark mt-4 mt-md-0">
                    <h2 class="mb-4">
                      24 Summer Wardrobe Staples That Are Simple, Sustainable,
                      and Editor-Approved
                    </h2>
                    <p class="clamp">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Adipiscing elit duis tristique sollicitudin nibh
                      sit amet commodo. Rhoncus dolor purus non...
                    </p>
                    <div class="readmore mt-5">
                      <a
                        href="#"
                        class="text-uppercase letter-spacing-w text-dark"
                      >
                        Continue Reading ⟶
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section6 subscribe1 mt-5">
            <Container>
              {/* <div className="block-wrapper1"> */}
              <Row>
                <div className="col-md-6 col-sm-12 text-dark">
                  <div className="mt-5">
                    <h3>Get the latest!</h3>
                    <p>No Spam. Guaranteed.</p>
                  </div>
                </div>

                <style>
                  {`
                    .form-block {
                        margin-bottom: 32px;
                        text-align: right;
                        position: relative;
                    }
                    
                    input[type="email"] {
                        padding: 13px;
                        width: 70%;
                        max-width: 600px;
                        position: absolute;
                    }
                    input[type="submit"], button[type="submit"] {
                        background: #827055;
                        border-color: #827055;
                        border-radius: 8px;
                        color: #fff;
                        cursor: pointer;
                        font-weight: 500;
                        padding: 9px 10px;
                        position: absolute;
                    }
                    `}
                </style>

                <div className="col-md-6 col-sm-12">
                  <div class="form-block p-5 d-flex">
                    {" "}
                    <form
                      action="https://inertiawp.com/demo"
                      method="post"
                      target="_blank"
                    >
                      {" "}
                      <input
                        type="email"
                        value=""
                        name="email"
                        class="email"
                        placeholder="Enter your email address"
                      />{" "}
                      <input
                        style={{ right: "120px", top: "52px" }}
                        type="submit"
                        value="Subscribe"
                        name="subscribe"
                        id="block-subscribe"
                        class="uppercase letter-spacing-w"
                      />{" "}
                    </form>
                  </div>
                </div>
              </Row>
              {/* </div> */}
            </Container>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Shop;
