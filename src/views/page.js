import React from "react";
import { Container, Row, Col, Card, Button } from "reactstrap";
import Header from "../component/header/header";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

const Page = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <style>
        {`
            .page-head-title {
                font-size: 3rem;
                font-weight: 500;
                padding-top: 170px;
            }

            
            .entry-thumbnail {
                flex: 0 0 50%;
                text-align: center;
            }
            .thumbnail-square img {
                aspect-ratio: 1/1;
            }
            .entry-thumbnail img {
                object-fit: cover;
                width: 100%;
                vertical-align: middle;
                aspect-ratio: 1.67/1;
            }
            .entry-primary {
                width: 100%;
                max-width: var(--content-width);
                margin: auto;
            }
            .entry-content {
                font-size: 1.06rem;
                padding: var(--spacing-l) 0;
            }
            .alignwide:not(.single-2cols .alignfull) {
                margin-left: calc((100% - 80vw) / 2);
                width: 80vw;
            }
            @media (min-width: 782px)
            .wp-block-columns:not(.is-not-stacked-on-mobile)>.wp-block-column {
                flex-basis: 0;
                flex-grow: 1;
            }
            .entry-content p {
                color: #404040;
                padding-bottom: 24px;
                line-height: 1.75;
            }
            .alignfull:not(.single-2cols .alignfull) {
                margin-left: calc((100% - 100vw) / 2);
                width: 100vw;
            }
            .wp-block-cover, .wp-block-cover-image {
                align-items: center;
                background-position: 50%;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                min-height: 430px;
                padding: 1em;
                position: relative;
            }
            .alignwide:not(.single-2cols .alignfull) {
                margin-left: calc((100% - 80vw) / 2);
                width: 80vw;
            }
            .alignwide {
                max-width: 1200px;
            }
            .wp-block-cover .wp-block-cover__image-background {
                border: none;
                bottom: 0;
                box-shadow: none;
                height: 100%;
                left: 0;
                margin: 0;
                max-height: none;
                max-width: none;
                object-fit: cover;
                outline: none;
                padding: 0;
                position: absolute;
                right: 0;
                top: 0;
                width: 100%;
            }
            
            cover.is-light .wp-block-cover__inner-container {
                color: #fff;
            }
            .wp-block-cover .wp-block-cover__inner-container {
                text-align: center;
                position: relative;
                font-size: xx-large;
            }
            .entry-content p {
            
                padding-bottom: 24px;
                line-height: 1.75;

            }
            
            `}
      </style>
      <Container fluid>
        <Row className="">
          <div className="col-md-6 col-sm-12 entry-head head-center">
            <Container>
              <h1 className="page-head-title text-center" itemprop="headline">
                About Me
              </h1>
            </Container>
          </div>
          <div className="col-md-6 col-sm-12">
            <figure className="entry-thumbnail thumbnail-square ">
              <img
                src="https://inertiawp.com/demo/wp-content/uploads/sites/2/2022/08/pexels-antoni-shkraba-4348401.jpg"
                className="attachment-post-thumbnail size-post-thumbnail wp-post-image col-12"
                alt="Inertia image. © Pexels"
                decoding="async"
                loading="lazy"
              />
            </figure>
          </div>
        </Row>

        <div className="mully mt-3">
          <Container>
            <div className="entry-grid">
              <div className="entry-primary">
                <div className="entry-content" itemprop="text">
                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                      <h2 className="wp-block-heading">Hello, </h2>{" "}
                      <h2 className="wp-block-heading">This is Mully.</h2>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <p>
                        Beginnings, had and working made versus or of this
                        reedy, he if rationally the on he devoting legs, in
                        opulence stiff than the ruining purer of supplies in
                        richer way, writing as in have it by I at prudently, be
                        gentlemen, a as to hills feel display can with to on.
                        Hand-painted, in deep motivator, in that thoughts odd
                        because by disciplined handout towards are lane.
                      </p>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <p>
                        Hardly watch refinements. To, the let unionized into
                        were clear of wonder research each get velocity should
                        will. Are he consider my of another your its have we the
                        have he I to found people hills such text he the got
                        return background kind caching and I has my read box
                        emphasis what must proceeded impact than commitment
                      </p>
                    </div>
                  </div>
                  <p> </p>
                  <div className="wp-block-cover alignfull is-light">
                    <span
                      aria-hidden="true"
                      className="wp-block-cover__background has-background-dim"
                    ></span>
                    <img
                      className="wp-block-cover__image-background wp-image-668"
                      alt=""
                      src="https://inertiawp.com/wp-content/uploads/sites/2/2022/08/pexels-parth-shah-824197.jpg"
                      data-object-fit="cover"
                      sizes="(max-width: 2560px) 100vw, 2560px"
                    />
                    <div className="wp-block-cover__inner-container">
                      <p className="has-text-align-center has-white-color has-text-color has-large-font-size">
                        Follow me on Instagram @instagram
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Page;
