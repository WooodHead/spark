import React from "react";
import "./Slider.scss";
// render Slider page.

function Slider(): JSX.Element {
  return (
    <section id="slider" className="bg-gray">
      <section className="uk-container">
        <section className="uk-grid">
          <section  className="uk-width-1-3 ">
            <h2 className="uk-flex uk-flex-center uk-padding-large">
              Projects by AndyMendez
            </h2>
            <div uk-slider="" className="uk-slider uk-margin-large-bottom">
              <div className="uk-position-relative">
                <div className="uk-slider-container slider-spacing">
                  <ul
                    id="project-slider"
                    className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-grid "
                    data-style="transform: translate3d(-175px, 0px, 0px);"
                  >
                    <li data-tabindex="-1" className="" data-style="order: 1;">
                      <div className="uk-card uk-card-default">
                        <div className="uk-card-media-top">
                          <div className="porject-preview"></div>
                        </div>
                        <div className="card-body">
                          <h6 className="uk-text-muted ">React</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                        <hr className="hr-slider" />
                        <div className="card-body"></div>
                      </div>
                    </li>
                    <li data-tabindex="-1" className="">
                      <div className="uk-card uk-card-default">
                        <div className="uk-card-media-top">
                          <div className="porject-preview"></div>
                        </div>
                        <div className="card-body">
                          <h6 className="uk-text-muted ">React</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                        <hr className="hr-slider" />
                        <div className="card-body"></div>
                      </div>
                    </li>
                    <li data-tabindex="-1" className="">
                      <div className="uk-card uk-card-default">
                        <div className="uk-card-media-top">
                          <div className="porject-preview"></div>
                        </div>
                        <div className="card-body">
                          <h6 className="uk-text-muted ">React</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                        <hr className="hr-slider" />
                        <div className="card-body"></div>
                      </div>
                    </li>
                    <li data-tabindex="-1" className="">
                      <div className="uk-card uk-card-default">
                        <div className="uk-card-media-top">
                          <div className="porject-preview"></div>
                        </div>
                        <div className="card-body">
                          <h6 className="uk-text-muted ">React</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                        <hr className="hr-slider" />
                        <div className="card-body"></div>
                      </div>
                    </li>
                    <li data-tabindex="-1" className="">
                      <div className="uk-card uk-card-default">
                        <div className="uk-card-media-top">
                          <div className="porject-preview"></div>
                        </div>
                        <div className="card-body">
                          <h6 className="uk-text-muted ">React</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                        <hr className="hr-slider" />
                        <div className="card-body"></div>
                      </div>
                    </li>
                    <li data-tabindex="-1" className="">
                      <div className="uk-card uk-card-default">
                        <div className="uk-card-media-top">
                          <div className="porject-preview"></div>
                        </div>
                        <div className="card-body">
                          <h6 className="uk-text-muted ">React</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                        <hr className="hr-slider" />
                        <div className="card-body"></div>
                      </div>
                    </li>
                    <li data-tabindex="-1" className="">
                      <div className="uk-card uk-card-default">
                        <div className="uk-card-media-top">
                          <div className="porject-preview"></div>
                        </div>
                        <div className="card-body">
                          <h6 className="uk-text-muted ">React</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                        <hr className="hr-slider" />
                        <div className="card-body"></div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="uk-hidden@l uk-light">
                  <a
                    id="prev-slide"
                    className="uk-position-center-left uk-position-small uk-icon uk-slidenav-previous uk-slidenav"
                    href="#"
                    uk-slider-item="previous"
                  >
                    <span>&#8592;</span>
                  </a>
                  <a
                    id="next-slide"
                    className="uk-position-center-right uk-position-small uk-icon uk-slidenav-next uk-slidenav"
                    href="#"
                    uk-slider-item="next"
                  >
                    <span>&#8594;</span>
                  </a>
                </div>

                <div className="uk-visible@l">
                  <a
                    id="prev-slide"
                    className="uk-position-center-left-out uk-position-large uk-icon uk-slidenav-previous uk-slidenav uk-card uk-card-default"
                    href="#"
                    uk-slider-item="previous"
                  >
                    <span>&#8592;</span>
                  </a>
                  <a
                    id="next-slide"
                    className="uk-position-center-right-out uk-position-small uk-icon uk-slidenav-next uk-slidenav uk-card uk-card-default"
                    href="#"
                    uk-slider-item="next"
                  >
                    <span>&#8594;</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Slider;
