import React from "react";
import { Container, Row, Col, Card, Button } from "reactstrap";

const Home = () => {
  return (
    <div>
      <style>
        {`
                    .title-section {
                        text-align: left;
                        
                    }
                    h1, h2, h3, h4, h5, h6 {
                        font-weight: 700;
                    }
                    .hero-magazine {
                        line-height: 1.4;
                        grid-gap: var(--spacing-l);
                        grid-template-columns: 1.25fr 1fr;

                    }
                    .hero-magazine .splash-item {
                        background: var(--color-white);
                        border: var(--border-thin);
                        border-radius: var(--radius-s);
                        overflow: hidden;
                    }
                    .thumbnail-landscape img {
                        aspect-ratio: 1.8/1;
                    }
                    .item-image img {
                        vertical-align: middle;
                    }
                    .item-text {
                        padding: var(--spacing-l);
                    }
                    .cat {
                        font-size: 0.75rem;
                        font-weight: 700;
                        letter-spacing: 0.08rem;
                    }
                    .text-section2 a {
                        text-decoration: none;
                      }
                      
                    .text-section2 a:hover {
                    text-decoration: underline;
                    }
                    `}
      </style>
      <div className="section-1">
        <Container>
          <h2 className="title-section mt-5 mb-5">Top Stories</h2>
          <div className="row hero-magazine">
            {/* <Card> */}
            <div className="grid-splash col-md-7 col-sm-12">
              <div className="splash-item">
                <a href="#">
                  <div className="card border-radius item-image thumbnail-ratio thumbnail-landscape">
                    <img src="https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-nugroho-wahyu-3119180-1024x749.jpg"></img>
                    <p
                      className="cat text-uppercase small m-3"
                      style={{ fontSize: "12px" }}
                    >
                      Lifestyle
                    </p>
                    <h3 itemprop="headline" class="item-title m-3">
                      24 Summer Wardrobe Staples That Are Simple, Sustainable,
                      and Editor-Approved
                    </h3>
                    <div className="m-3" style={{ fontSize: "0.7rem" }}>
                      NOVEMBER 4, 2022
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="grid-item col-md-5 col-sm-12">
              <div className="d-flex mb-4">
                <div
                  className=" card align-self-start"
                  style={{ width: "436px" }}
                >
                  <img
                    style={{ height: "160px" }}
                    className="img-fluid float-left"
                    src="https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-daria-shevtsova-1619488-682x1024.jpg"
                    alt="Ảnh"
                  />
                </div>
                <div className="" style={{ marginLeft: "16px" }}>
                  <p className="cat text-uppercase small">Lifestyle</p>
                  <h5 className="item-title">
                    8 Homemade Coconut Oil Shampoo Recipes For Beautiful Hair
                  </h5>
                  <div style={{ fontSize: "0.7rem" }}>AUGUST 17, 2022</div>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="card align-self-start card w-75">
                  <img
                    style={{ height: "160px" }}
                    className="img-fluid float-left"
                    src="https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-atbo-245208-1024x740.jpg"
                    alt="Ảnh"
                  />
                </div>
                <div className="" style={{ marginLeft: "13px" }}>
                  <p className="cat text-uppercase small">HOME DECOR</p>
                  <h5 className="item-title">
                    Interior Design – A Comprehensive Guide for Enthusiasts
                  </h5>
                  <div style={{ fontSize: "0.7rem" }}>AUGUST 17, 2022</div>
                </div>
              </div>

              <div className="d-flex">
                <div
                  className="align-self-start card"
                  style={{ width: "436px" }}
                >
                  <img
                    style={{ height: "160px" }}
                    className="img-fluid float-left"
                    src="https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-karolina-grabowska-4219654-1024x683.jpg"
                    alt="Ảnh"
                  />
                </div>
                <div className="" style={{ marginLeft: "13px" }}>
                  <p className="cat text-uppercase small">Lifestyle</p>
                  <h5 className="item-title text-dark">
                    6 DIY Summer Crafts for Your Home, Outdoor, and Family Fun
                  </h5>
                  <div style={{ fontSize: "0.7rem" }}>AUGUST 17, 2022</div>
                </div>
              </div>
            </div>
            {/* </Card> */}
          </div>
        </Container>
      </div>

      <div className="section-2 mt-5 mb-5">
        <Container>
          <div className="row">
            <div className="col-md-3">
              <Card
                className=""
                style={{ height: "95px", backgroundColor: "white" }}
              >
                <div className="item1 d-flex">
                  <div className="item-img ">
                    <img
                      style={{ height: "91px" }}
                      src="https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-jj-jordan-10668576-150x150.jpg"
                    />
                  </div>

                  <div className="text-section2">
                    <a
                      href="#"
                      className="text-dark"
                      title="The Beginner’s Guide To The Paleo Diet"
                    >
                      <p
                        className="mt-4 text-uppercase small"
                        style={{
                          fontSize: "12px",
                          marginLeft: "10px",
                          marginRight: "4px",
                        }}
                      >
                        The Beginner’s Guide To The Paleo Diet
                      </p>
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <div className="col-md-3">
              <Card
                className=""
                style={{ height: "95px", backgroundColor: "white" }}
              >
                <div className="item1 d-flex">
                  <div className="item-img ">
                    <img
                      style={{ height: "91px" }}
                      src="https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-ella-olsson-1640777-150x150.jpg"
                    />
                  </div>

                  <div className="text-section2">
                    <a
                      href="#"
                      className="text-dark"
                      title="According to Nutritionists, These Are the 7 Ingredients Your Food Should Have"
                    >
                      <p
                        className="col-md-3 text-uppercase small"
                        style={{
                          fontSize: "12px",
                          marginLeft: "10px",
                          marginTop: "30px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        According to Nutritionists, These Are the 7 Ingredients
                        Your Food Should Have
                      </p>
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <div className="col-md-3">
              <Card
                className=""
                style={{ height: "95px", backgroundColor: "white" }}
              >
                <div className="item1 d-flex">
                  <div className="item-img ">
                    <img
                      style={{ height: "91px" }}
                      src="https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-tijana-drndarski-3338676-150x150.jpg"
                    />
                  </div>

                  <div className="text-section2">
                    <a
                      href="#"
                      className="text-dark"
                      title="10 EVIDENCE-BASED BENEFITS OF GREEN TEA"
                    >
                      <p
                        className="mt-4 small"
                        style={{ fontSize: "12px", marginLeft: "10px" }}
                      >
                        10 EVIDENCE-BASED BENEFITS OF GREEN TEA
                      </p>
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <div className="col-md-3 rouded">
              <Card
                className=""
                style={{ height: "95px", backgroundColor: "white" }}
              >
                <div className="item1 d-flex">
                  <div className="item-img ">
                    <img
                      style={{ height: "91px" }}
                      src="https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-ella-olsson-1640771-150x150.jpg"
                    />
                  </div>

                  <div className="text-section2">
                    <a
                      href="#"
                      className="text-dark"
                      title="The 11 Best Meal Planning Apps to Help You Lose Weight"
                    >
                      <p
                        className="ml-3 text-uppercase small col-md-4"
                        style={{
                          overflow: "hidden",
                          marginTop: "30px",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          fontSize: "12px",
                          marginLeft: "10px",
                        }}
                      >
                        The 11 Best Meal Planning Apps to Help You Lose Weight
                      </p>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>

      <div className="section-3">
        <Container>
          <div className="row">
            <div className="col-md-6">
              <div className="item-img card border-radius">
                <img
                  style={{ height: "450px" }}
                  src="https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-vlada-karpovich-7368269-1536x1024.jpg"
                ></img>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="text-block text-center text-dark"
                style={{ marginTop: "100px" }}
              >
                <h2 style={{ marginBottom: "25px" }}>
                  Why you should use packing cubes to improve your (traveling)
                  life
                </h2>
                <p className="clamp">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Adipiscing elit duis tristique sollicitudin nibh sit amet
                  commodo. Rhoncus dolor purus non...
                </p>
                <div className="readmore mt-5">
                  <a
                    href="#"
                    className="text-uppercase letter-spacing-w text-dark"
                  >
                    {" "}
                    Continue Reading ⟶{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="section-4 mb-3" style={{ marginTop: "200px" }}>
        <Container>
          <div className="row">
            <div className="d-flex">
              <h2 className="mb-4">Home Decor</h2>
            </div>
            <div className="col-md-3">
              <div className="">
                <img
                  src={`https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-atbo-245208-1024x740.jpg`}
                  alt=""
                  className=""
                  style={{ width: "282px", height: "188px" }}
                />
              </div>

              <p className="mt-3 text-dark" style={{ fontSize: "1.1rem" }}>
                Interior Design – A Comprehensive Guide for Enthusiasts
              </p>
            </div>

            <div className="col-md-3">
              <div className="">
                <img
                  src={`https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-dmitry-zvolskiy-2062426-300x200.jpg`}
                  alt=""
                  className=""
                  style={{ width: "282px", height: "188px" }}
                />
              </div>

              <p className="mt-3 text-dark" style={{ fontSize: "1.1rem" }}>
                Kitchen Essentials – What Your Brand New Apartment Really Needs
              </p>
            </div>

            <div className="col-md-3">
              <div className="">
                <img
                  src={`https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-parth-shah-824197-300x225.jpg`}
                  alt=""
                  className=""
                  style={{ width: "282px", height: "188px" }}
                />
              </div>

              <p className="mt-3 text-dark" style={{ fontSize: "1.1rem" }}>
                5 Design Books You Can Get This Summer
              </p>
            </div>

            <div className="col-md-3">
              <div className="">
                <img
                  src={`https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-daria-shevtsova-698170.jpg`}
                  alt=""
                  className=""
                  style={{ width: "282px", height: "188px" }}
                />
              </div>
              <p className="mt-3 text-dark" style={{ fontSize: "1.1rem" }}>
                Furnished Versus Unfurnished Apartments: The Pros and Cons
              </p>
            </div>
          </div>
        </Container>
      </div>

      <style>
        {`
            .social-icons {
                font-size: 1.3rem;
                margin: 0;
            }
            .home-section{
                background-image: url(https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-daria-shevtsova-698170.jpg);
            }
            .cover-overlay::before {
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            }
            .home-cover::before {
                background-color: rgba(0, 0, 0, 0.3);
            }
            .cover-overlay {
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                position: relative;
            }
            .home-cover .text-block {
                color: #fff;
                left: 50%;
                position: absolute;
                top: 50%;
                transform: translate(-50%, -50%);
                width: var(--container);
                max-width: 767px;
                z-index: 2;
            }
            .home-cover {
                height: 100vh;
                position: relative;
            }
        `}
      </style>
      <div className="section-5 mb-3 mt-5">
        <section
          id="frontpage-cover"
          className="home-section home-cover cover-overlay"
        >
          <div class="text-block text-center">
            {" "}
            <h2 itemprop="headline" class="post-title">
              {" "}
              <a
                href="https://inertiawp.com/demo/furnished-versus-unfurnished-apartments-the-pros-and-cons/"
                rel="bookmark"
              >
                Furnished Versus Unfurnished Apartments: The Pros and Cons
              </a>{" "}
            </h2>{" "}
            <p itemprop="text" class="excerpt line-clamp clamp-s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>{" "}
            <a
              itemprop="url"
              class="btn btn-border letter-spacing"
              href="https://inertiawp.com/demo/furnished-versus-unfurnished-apartments-the-pros-and-cons/"
            >
              Continue Reading ⟶
            </a>
          </div>
        </section>
      </div>

      <div className="section-6 mb-3 mt-5">
        <Container>
          <div style={{ marginBottom: "45px" }}>
            <h2 className="text-center text-dark">Products We Love</h2>
            <p className="text-center small mt-3">
              Featured products your will love from the shop.
            </p>
          </div>
          <div className="row">
            <div className="col-md-3 ">
              <div
                className="shadow"
                style={{ width: "300px", height: "480px" }}
              >
                <div className="">
                  <img
                    src={`https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-ann-poan-5797999.jpg`}
                    alt=""
                    className=""
                    style={{ width: "300px", height: "320px" }}
                  />
                </div>

                <p
                  className=" text-dark"
                  style={{
                    fontSize: "0.9rem",
                    marginLeft: "40px",
                    marginTop: "15px",
                  }}
                >
                  BEAUTY
                </p>
                <h4
                  className="text-dark"
                  style={{
                    fontSize: "0.9rem",
                    marginTop: "10px",
                    marginLeft: "40px",
                  }}
                >
                  The Take It (All) Off Kit
                </h4>
                <p
                  className="text-dark"
                  style={{
                    fontSize: "0.7rem",
                    marginTop: "10px",
                    marginLeft: "40px",
                  }}
                >
                  $11.05
                </p>
              </div>
            </div>

            <div className="col-md-3 ">
              <div
                className="shadow"
                style={{ width: "300px", height: "480px" }}
              >
                <div className="">
                  <img
                    src={`https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-karolina-grabowska-4041391.jpg`}
                    alt=""
                    className=""
                    style={{ width: "300px", height: "320px" }}
                  />
                </div>

                <p
                  className=" text-dark"
                  style={{
                    fontSize: "0.9rem",
                    marginLeft: "40px",
                    marginTop: "15px",
                  }}
                >
                  BEAUTY
                </p>
                <h4
                  className="text-dark"
                  style={{
                    fontSize: "0.9rem",
                    marginTop: "10px",
                    marginLeft: "40px",
                  }}
                >
                  Minty Mineral Hydration Mist
                </h4>
                <p
                  className="text-dark"
                  style={{
                    fontSize: "0.7rem",
                    marginTop: "10px",
                    marginLeft: "40px",
                  }}
                >
                  $11.05
                </p>
              </div>
            </div>

            <div className="col-md-3 ">
              <div
                className="shadow"
                style={{ width: "300px", height: "480px" }}
              >
                <div className="">
                  <img
                    src={`https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-karolina-grabowska-4202325.jpg`}
                    alt=""
                    className=""
                    style={{ width: "300px", height: "320px" }}
                  />
                </div>

                <p
                  className=" text-dark"
                  style={{
                    fontSize: "0.9rem",
                    marginLeft: "40px",
                    marginTop: "15px",
                  }}
                >
                  BEAUTY
                </p>
                <h4
                  className="text-dark"
                  style={{
                    fontSize: "0.9rem",
                    marginTop: "10px",
                    marginLeft: "40px",
                  }}
                >
                  Cloudberry Exfoliating Jelly Cleanser
                </h4>
                <p
                  className="text-dark"
                  style={{
                    fontSize: "0.7rem",
                    marginTop: "10px",
                    marginLeft: "40px",
                  }}
                >
                  <del>$20.00</del> $18.00
                </p>
              </div>
            </div>

            <div className="col-md-3 ">
              <div
                className="shadow"
                style={{ width: "300px", height: "480px" }}
              >
                <div className="">
                  <img
                    src={`https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-karolina-grabowska-4202328.jpg`}
                    alt=""
                    className=""
                    style={{ width: "300px", height: "320px" }}
                  />
                </div>

                <p
                  className=" text-dark"
                  style={{
                    fontSize: "0.9rem",
                    marginLeft: "40px",
                    marginTop: "15px",
                  }}
                >
                  CLEANSERS
                </p>
                <h4
                  className="text-dark"
                  style={{
                    fontSize: "0.9rem",
                    marginTop: "10px",
                    marginLeft: "40px",
                  }}
                >
                  Nourishing Repair Body Butter
                </h4>
                <p
                  className="text-dark"
                  style={{
                    fontSize: "0.7rem",
                    marginTop: "10px",
                    marginLeft: "40px",
                  }}
                >
                  $18.00
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Button className="px-4 py-3 ">SHOP ALL</Button>
          </div>
        </Container>
      </div>

      <div className="section-7 mt-5" style={{marginBottom: "100px"}}>
        <Container>
          <div className="row" style={{ backgroundColor: "#f5f5f5" }}>
            <div className="col-md-6">
              <div className="p-5" style={{marginTop: '100px'}}>
                <h3>Get the latest!</h3>
                <p>
                  Latest news and articles curated in your mailbox every week.
                  No Spam. Guaranteed.
                </p>
                  <div className="social-icons">
                    <a
                      href="https://pinterest.com/"
                      title="Inertia Theme on Pinterest"
                      itemprop="url"
                      target="_blank"
                    >
                      <i className="fab fa-pinterest"></i>
                    </a>
                    <a
                      href="https://instagram.com/"
                      title="Inertia Theme on Instagram"
                      itemprop="url"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://twitter.com/"
                      title="Inertia Theme on Twitter"
                      itemprop="url"
                      target="_blank"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
              </div>
            </div>
            <style>
                {
                    `
                    .form-block {
                        margin: 100px 35px 0 0;
                        text-align: right;
                        position: relative;
                    }
                    input[type="email"] {
                        padding: 14px;
                        width: 70%;
                        max-width: 600px;
                    }
                    input[type="submit"], button[type="submit"] {
                        background: #312e81;
                        border-color: #312e81;
                        border-radius: var(--radius-s);
                        color: #fff;
                        cursor: pointer;
                        font-weight: 500;
                        padding: 12px 24px;
                    }
                    `
                }
            </style>
            <div className="col-md-6">
              <div class="form-block p-5">
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
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="block-subscribe"
                    class="uppercase letter-spacing-w"
                  />{" "}
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
