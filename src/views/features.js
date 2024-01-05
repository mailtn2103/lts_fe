import React from "react";
import { Container, Row, Col, Card, Button } from "reactstrap";
import Header from "../component/header/header2";
import Navbar from "../component/navbar/Navbar2";
import Footer from "../component/footer/Footer2";
import "../css/features.css";

const Features = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Container fluid>
        <div className="section1 topStories">
          <Container>
            <h2 className="section-title mt-4">Top Stories</h2>
            <Row className="mt-5">
              <div className="col-md-3 col-sm-6 item1">
                <a href="/">
                  <div className="item-image thumbnail-ratio thumbnail-portrait image-gradient-overlay">
                    <img
                      className="resized-image"
                      width={"100%"}
                      height={"350px"}
                      src="https://inertiawp.com/lifestyle-mag/wp-content/uploads/sites/12/2022/08/pexels-nugroho-wahyu-3119180-1024x749.jpg"
                    ></img>
                  </div>
                  <div className="item-text text-center">
                    <p className="cat text-uppercase">Lifestyle</p>
                    <h3 itemprop="headline" className="item-title">
                      24 Summer Wardrobe Staples That Are Simple
                    </h3>
                  </div>
                </a>
              </div>

              <div className="col-md-3 col-sm-6 item1">
                <a href="/">
                  <div className="item-image thumbnail-ratio thumbnail-portrait image-gradient-overlay">
                    <img
                      className="resized-image"
                      width={"100%"}
                      height={"350px"}
                      src="https://inertiawp.com/lifestyle-mag/wp-content/uploads/sites/12/2022/08/pexels-daria-shevtsova-1619488-682x1024.jpg"
                    ></img>
                  </div>
                  <div className="item-text text-center">
                    {" "}
                    <p className="cat text-uppercase">Lifestyle</p>{" "}
                    <h3 itemprop="headline" className="item-title">
                      8 Homemade Coconut Oil Shampoo Recipes For Beautiful Hair
                    </h3>
                  </div>
                </a>
              </div>

              <div className="col-md-3 col-sm-6 item1">
                <a href="/">
                  <div className="item-image thumbnail-ratio thumbnail-portrait image-gradient-overlay">
                    <img
                      className="resized-image"
                      width={"100%"}
                      height={"350px"}
                      src="https://inertiawp.com/lifestyle-mag/wp-content/uploads/sites/12/2022/08/pexels-atbo-245208-1024x740.jpg"
                    ></img>
                  </div>
                  <div className="item-text text-center">
                    {" "}
                    <p className="cat text-uppercase">home DECOR</p>{" "}
                    <h3 itemprop="headline" className="item-title">
                      Interior Design – A Comprehensive Guide for Enthusiasts
                    </h3>
                  </div>
                </a>
              </div>

              <div className="col-md-3 col-sm-6 item1">
                <a href="/">
                  <div className="item-image thumbnail-ratio thumbnail-portrait image-gradient-overlay">
                    <img
                      className="resized-image"
                      width={"100%"}
                      height={"350px"}
                      src="https://inertiawp.com/lifestyle-mag/wp-content/uploads/sites/12/2022/08/pexels-karolina-grabowska-4219654-1024x683.jpg"
                    ></img>
                  </div>
                  <div className="item-text text-center">
                    {" "}
                    <p className="cat text-uppercase">Lifestyle</p>{" "}
                    <h3 itemprop="headline" className="item-title">
                      6 DIY Summer Crafts for Your Home, Outdoor, and Family Fun
                    </h3>
                  </div>
                </a>
              </div>
            </Row>
          </Container>
        </div>

        <div className="section2 podcarst mt-5">
          <Container>
            <Row>
              <Col className="col-md-6 col-sm-12">
                <a href="#">
                  <img
                    width={"100%"}
                    height={"550px"}
                    className="resized-image py-4"
                    src="https://inertiawp.com/lifestyle-mag/wp-content/uploads/sites/12/2022/08/pexels-julian-jagtenberg-103127-1536x800.jpg"
                  />
                </a>
              </Col>
              <Col className="col-md-6 col-sm-12">
                <div className="text-block text-center text-dark">
                  <h2 itemprop="headline">
                    <a
                      className="text-decoration-none text-dark"
                      href="https://inertiawp.com/lifestyle-mag/podcast-three-daily-habits-that-will-change-your-life/"
                      rel="bookmark"
                    >
                      Podcast: Three Daily Habits That Will Change Your Life
                    </a>
                  </h2>
                  <p itemprop="text" className="excerpt line-clamp clamp-s">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                  <div className="editorial-readmore">
                    <a
                      className="text-uppercase text-dark text-decoration-none letter-spacing-w"
                      href="https://inertiawp.com/lifestyle-mag/podcast-three-daily-habits-that-will-change-your-life/"
                      title="Podcast: Three Daily Habits That Will Change Your Life"
                    >
                      Continue Reading ⟶
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section3 wakeup1">
          <Container>
            <Row className="mt-5">
              <div className="text-block text-center mt-5 col-md-12 col-sm-6 " style={{marginTop:'130px'}}>
                <h2 itemprop="headline" className="post-title">
                  <a
                    className="text-decoration-none text-light"
                    href="https://inertiawp.com/lifestyle-mag/wake-up-to-gorgeous-skin-with-the-10-best-night-creams-available-according-to-the-experts/"
                    rel="bookmark"
                  >
                    Wake Up to Gorgeous Skin With the 10 Best Night Creams
                    Available
                  </a>
                </h2>
                <p
                  itemprop="text"
                  className="excerpt line-clamp clamp-s text-light"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <a
                  itemprop="url"
                  className="btn btn-border letter-spacing p-3"
                  href="https://inertiawp.com/lifestyle-mag/wake-up-to-gorgeous-skin-with-the-10-best-night-creams-available-according-to-the-experts/"
                >
                  Continue Reading ⟶
                </a>
              </div>
            </Row>
          </Container>
        </div>

        <div className="section4 theLatest mt-3 mb-5">
          <Container>
            <Row>
              <h3 className="section-title mt-4 mb-3" itemprop="headline">
                The Latest
              </h3>
              <div className="col-md-4 col-sm-12 mb-4">
                <Card style={{ height: "755px" }}>
                  <div>
                    <img
                      className="resized-image"
                      width={"100%"}
                      height={"400px"}
                      src="https://inertiawp.com/lifestyle-mag/wp-content/uploads/sites/12/2022/08/pexels-nugroho-wahyu-3119180-1024x749.jpg"
                    />

                    <div className="item-text">
                      <p className="text-uppercase life mt-4">Lifestyle</p>
                      <h3 itemprop="headline" className="mb-3">
                        24 Summer Wardrobe Staples That Are Simple
                      </h3>
                      <p itemprop="text" class="excerpt line-clamp clamp-s">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
                      </p>
                      <div class="loop-meta">
                        <div
                          itemscope=""
                          itemtype="http://schema.org/Person"
                          itemprop="author"
                          class="meta-item p-author"
                        >
                          By <span itemprop="name">Lucas Sebastian</span>
                        </div>
                        <div class="meta-item p-readtime">
                          <i class="icon-bookmark"></i>1 min Read
                        </div>
                      </div>
                      <div class="loop-readmore letter-spacing uppercase">
                        Read More
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="col-md-4 col-sm-12 mb-4">
                <Card style={{ height: "755px" }}>
                  <div>
                    <img
                      className="resized-image"
                      width={"100%"}
                      height={"400px"}
                      src="https://inertiawp.com/lifestyle-mag/wp-content/uploads/sites/12/2022/08/pexels-george-milton-6954162-1024x683.jpg"
                    />

                    <div className="item-text">
                      <p className="text-uppercase life mt-4">Lifestyle</p>
                      <h3 itemprop="headline" className="mb-3">
                        12 Top Favorite Lifestyle Podcasts for Modern Conscious
                        Women
                      </h3>
                      <p itemprop="text" class="excerpt line-clamp clamp-s">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
                      </p>
                      <div class="loop-meta">
                        <div
                          itemscope=""
                          itemtype="http://schema.org/Person"
                          itemprop="author"
                          class="meta-item p-author"
                        >
                          By <span itemprop="name">Lucas Sebastian</span>
                        </div>
                        <div class="meta-item p-readtime">
                          <i class="icon-bookmark"></i>1 min Read
                        </div>
                      </div>
                      <div class="loop-readmore letter-spacing uppercase">
                        Read More
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="col-md-4 col-sm-12 mb-4">
                <Card style={{ height: "755px" }}>
                  <div>
                    <img
                      className="resized-image"
                      width={"100%"}
                      height={"400px"}
                      src="https://inertiawp.com/lifestyle-mag/wp-content/uploads/sites/12/2022/08/pexels-nataliya-vaitkevich-6252725-1024x683.jpg"
                    />

                    <div className="item-text">
                      <p className="text-uppercase life mt-4">FOOD & RECIPES</p>
                      <h3 itemprop="headline" className="mb-3">
                        This Roasted Carrot and Red Pepper Hummus Flatbread Is a
                        Delicious
                      </h3>
                      <p itemprop="text" class="excerpt line-clamp clamp-s">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
                      </p>
                      <div class="loop-meta">
                        <div
                          itemscope=""
                          itemtype="http://schema.org/Person"
                          itemprop="author"
                          class="meta-item p-author"
                        >
                          By <span itemprop="name">Lucas Sebastian</span>
                        </div>
                        <div class="meta-item p-readtime">
                          <i class="icon-bookmark"></i>1 min Read
                        </div>
                      </div>
                      <div class="loop-readmore letter-spacing uppercase">
                        Read More
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* line2 */}
              <div className="col-md-4 col-sm-12 mb-4">
                <Card style={{ height: "755px" }}>
                  <div>
                    <img
                      className="resized-image"
                      width={"100%"}
                      height={"400px"}
                      src="https://inertiawp.com/lifestyle-mag/wp-content/uploads/sites/12/2022/08/pexels-karolina-grabowska-4219654-1024x683.jpg"
                    />

                    <div className="item-text">
                      <p className="text-uppercase life mt-4">Lifestyle</p>
                      <h3 itemprop="headline" className="mb-3">
                        6 DIY Summer Crafts for Your Home, Outdoor, and Family
                        Fun
                      </h3>
                      <p itemprop="text" class="excerpt line-clamp clamp-s">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
                      </p>
                      <div class="loop-meta">
                        <div
                          itemscope=""
                          itemtype="http://schema.org/Person"
                          itemprop="author"
                          class="meta-item p-author"
                        >
                          By <span itemprop="name">Lucas Sebastian</span>
                        </div>
                        <div class="meta-item p-readtime">
                          <i class="icon-bookmark"></i>1 min Read
                        </div>
                      </div>
                      <div class="loop-readmore letter-spacing uppercase">
                        Read More
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="col-md-4 col-sm-12 mb-4">
                <Card style={{ height: "755px" }}>
                  <div>
                    <img
                      className="resized-image"
                      width={"100%"}
                      height={"400px"}
                      src="https://inertiawp.com/lifestyle-mag/wp-content/uploads/sites/12/2022/08/pexels-daria-shevtsova-1619488-682x1024.jpg"
                    />

                    <div className="item-text">
                      <p className="text-uppercase life mt-4">Lifestyle</p>
                      <h3 itemprop="headline" className="mb-3">
                        8 Homemade Coconut Oil Shampoo Recipes For Beautiful
                        Hair
                      </h3>
                      <p itemprop="text" class="excerpt line-clamp clamp-s">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
                      </p>
                      <div class="loop-meta">
                        <div
                          itemscope=""
                          itemtype="http://schema.org/Person"
                          itemprop="author"
                          class="meta-item p-author"
                        >
                          By <span itemprop="name">Lucas Sebastian</span>
                        </div>
                        <div class="meta-item p-readtime">
                          <i class="icon-bookmark"></i>1 min Read
                        </div>
                      </div>
                      <div class="loop-readmore letter-spacing uppercase">
                        Read More
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="col-md-4 col-sm-12 mb-4">
                <Card style={{ height: "755px" }}>
                  <div>
                    <img
                      className="resized-image"
                      width={"100%"}
                      height={"400px"}
                      src="https://inertiawp.com/lifestyle-mag/wp-content/uploads/sites/12/2022/08/pexels-atbo-245208-1024x740.jpg"
                    />

                    <div className="item-text">
                      <p className="text-uppercase life mt-4">FOOD & RECIPES</p>
                      <h3 itemprop="headline" className="mb-3">
                        Interior Design – A Comprehensive Guide for Enthusiasts
                      </h3>
                      <p itemprop="text" class="excerpt line-clamp clamp-s">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
                      </p>
                      <div class="loop-meta">
                        <div
                          itemscope=""
                          itemtype="http://schema.org/Person"
                          itemprop="author"
                          class="meta-item p-author"
                        >
                          By <span itemprop="name">Lucas Sebastian</span>
                        </div>
                        <div class="meta-item p-readtime">
                          <i class="icon-bookmark"></i>1 min Read
                        </div>
                      </div>
                      <div class="loop-readmore letter-spacing uppercase">
                        Read More
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* line3 */}
              <div className="col-md-4 col-sm-12 mb-4">
                <Card style={{ height: "755px" }}>
                  <div>
                    <img
                      className="resized-image"
                      width={"100%"}
                      height={"400px"}
                      src="https://inertiawp.com/lifestyle-mag/wp-content/uploads/sites/12/2022/08/pexels-jj-jordan-10668576-1024x1024.jpg"
                    />

                    <div className="item-text">
                      <p className="text-uppercase life mt-4">Lifestyle</p>
                      <h3 itemprop="headline" className="mb-3">
                        The Beginner’s Guide To The Paleo Diet
                      </h3>
                      <p itemprop="text" class="excerpt line-clamp clamp-s">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
                      </p>
                      <div class="loop-meta">
                        <div
                          itemscope=""
                          itemtype="http://schema.org/Person"
                          itemprop="author"
                          class="meta-item p-author"
                        >
                          By <span itemprop="name">Lucas Sebastian</span>
                        </div>
                        <div class="meta-item p-readtime">
                          <i class="icon-bookmark"></i>1 min Read
                        </div>
                      </div>
                      <div class="loop-readmore letter-spacing uppercase">
                        Read More
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="col-md-4 col-sm-12 mb-4">
                <Card style={{ height: "755px" }}>
                  <div>
                    <img
                      className="resized-image"
                      width={"100%"}
                      height={"400px"}
                      src="https://inertiawp.com/lifestyle-mag/wp-content/uploads/sites/12/2022/08/pexels-belle-co-672916-1024x683.jpg"
                    />

                    <div className="item-text">
                      <p className="text-uppercase life mt-4">Lifestyle</p>
                      <h3 itemprop="headline" className="mb-3">
                        The Must-See Room In The San Francisco Decorator’s
                        Showcase
                      </h3>
                      <p itemprop="text" class="excerpt line-clamp clamp-s">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
                      </p>
                      <div class="loop-meta">
                        <div
                          itemscope=""
                          itemtype="http://schema.org/Person"
                          itemprop="author"
                          class="meta-item p-author"
                        >
                          By <span itemprop="name">Lucas Sebastian</span>
                        </div>
                        <div class="meta-item p-readtime">
                          <i class="icon-bookmark"></i>1 min Read
                        </div>
                      </div>
                      <div class="loop-readmore letter-spacing uppercase">
                        Read More
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="col-md-4 col-sm-12 mb-4">
                <Card style={{ height: "755px" }}>
                  <div>
                    <img
                      className="resized-image"
                      width={"100%"}
                      height={"400px"}
                      src="https://inertiawp.com/lifestyle-mag/wp-content/uploads/sites/12/2022/08/pexels-dmitry-zvolskiy-2062426-1024x684.jpg"
                    />

                    <div className="item-text">
                      <p className="text-uppercase life mt-4">FOOD & RECIPES</p>
                      <h3 itemprop="headline" className="mb-3">
                        Kitchen Essentials – What Your Brand New Apartment
                        Really Needs
                      </h3>
                      <p itemprop="text" class="excerpt line-clamp clamp-s">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
                      </p>
                      <div class="loop-meta">
                        <div
                          itemscope=""
                          itemtype="http://schema.org/Person"
                          itemprop="author"
                          class="meta-item p-author"
                        >
                          By <span itemprop="name">Lucas Sebastian</span>
                        </div>
                        <div class="meta-item p-readtime">
                          <i class="icon-bookmark"></i>1 min Read
                        </div>
                      </div>
                      <div class="loop-readmore letter-spacing uppercase">
                        Read More
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="col-md-12 col-sm-12 d-flex justify-content-center">
                <a
                  itemprop="url"
                  className="btn btn-border text-decoration-none p-3 rouded"
                  href="https://inertiawp.com/lifestyle-mag/wake-up-to-gorgeous-skin-with-the-10-best-night-creams-available-according-to-the-experts/"
                >
                  Next Posts ⟶
                </a>
              </div>
            </Row>
          </Container>
        </div>

        <div className="section5 productwelove mb-5">
          <Container>
            <h2 className="text-center pt-5">Products We Love</h2>
            <p className="subtitle text-center pb-4">
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
                      src="https://inertiawp.com/lifestyle-mag/wp-content/uploads/sites/12/2022/09/pexels-ray-piedra-1502219.jpg"
                    />

                    <div className="item-text">
                      <p className="text-uppercase life mt-4">BEAUTY</p>
                      <h4 itemprop="headline" className="mb-3">
                        The Take It (All) Off Kit
                      </h4>
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
                      <p className="text-uppercase life mt-4">
                        LIFESTYLE PRODUCTS
                      </p>
                      <h4 itemprop="headline" className="mb-3">
                        Minty Mineral Hydration Mist
                      </h4>
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
                      height={"300px"}
                      src="https://inertiawp.com/lifestyle-mag/wp-content/uploads/sites/12/2022/09/pexels-ann-poan-5797999.jpg"
                    />

                    <div className="item-text">
                      <p className="text-uppercase life mt-4">
                        LIFESTYLE PRODUCTS
                      </p>
                      <h4 itemprop="headline" className="mb-3">
                        Nourishing Repair Body Butter
                      </h4>
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
                      height={"300px"}
                      src="https://inertiawp.com/lifestyle-mag/wp-content/uploads/sites/12/2022/09/pexels-furkanfdemir-6215308.jpg"
                    />

                    <div className="item-text">
                      <p className="text-uppercase life mt-4">SKINCARE</p>
                      <h4 itemprop="headline" className="mb-3">
                        Cloudberry Exfoliating Jelly
                      </h4>
                      <p
                        itemprop="text"
                        class="excerpt line-clamp clamp-s small"
                      >
                        <strike style={{ color: "red" }}>$20.00</strike> $18.00
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="col-md-12 col-sm-12 d-flex justify-content-center mb-4 pb-4">
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

        <div className="section6 subscribe mt-5 mb-5">
          <Container>
            <div className="block-wrapper">
                <Row>
              
                <div className="col-md-6 col-sm-12 text-light">
                  <div className="p-5" style={{ marginTop: "10px" }}>
                    <h3>Get the latest!</h3>
                    <p>
                      Latest news and articles curated in your mailbox every
                      week. No Spam. Guaranteed.
                    </p>
                    <div className="social-icons text-light">
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
                  {`
                    .form-block {
                        margin: 60px 0px 0 0;
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
                      style={{right: '120px', top: '52px'}}
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
            </div>
          </Container>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Features;
