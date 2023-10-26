import React from "react";
import "./PortfolioBoot.css";

function PortfolioBoot() {
  return (
    <div>
      <section id="portfolio" class="gray-bg padding-top-bottom">
        <div className="portfolio-title">
          <h2>Portfolio</h2>
        </div>
        <div class="container bootstrap snippets bootdey">
          <div class="categories">
            <ul>
              <li class="active">
                <a href="#" data-filter="*">
                  All Categories
                </a>
              </li>
              <li>
                <a href="#" data-filter=".web-design">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" data-filter=".apps">
                  Apps
                </a>
              </li>
              <li>
                <a href="#" data-filter=".psd">
                  PSD
                </a>
              </li>
            </ul>
          </div>

          <div class="projects-container scrollimation in">
            <div class="row">
              <article class="col-md-4 col-sm-6 portfolio-item web-design apps psd">
                <div class="portfolio-thumb in">
                  <a href="#" class="main-link">
                    <img
                      class="img-responsive img-center"
                      src="https://www.bootdey.com/image/350x280/FFB6C1/000000"
                      alt=""
                    />
                    <h2 class="project-title">Billing</h2>
                    <span class="overlay-mask"></span>
                  </a>
                  <a class="enlarge cboxElement" href="#" title="Bills Project">
                    <i class="fa fa-expand fa-fw"></i>
                  </a>
                  <a class="link" href="#">
                    <i class="fa fa-eye fa-fw"></i>
                  </a>
                </div>
              </article>

              <article class="col-md-4 col-sm-6 portfolio-item apps">
                <div class="portfolio-thumb in">
                  <a href="#" class="main-link">
                    <img
                      class="img-responsive img-center"
                      src="https://www.bootdey.com/image/350x280/87CEFA/000000"
                      alt=""
                    />
                    <h2 class="project-title">Augmented Tourist</h2>
                    <span class="overlay-mask"></span>
                  </a>
                  <a class="link centered" href="">
                    <i class="fa fa-eye fa-fw"></i>
                  </a>
                </div>
              </article>

              <article class="col-md-4 col-sm-6 portfolio-item web-design psd">
                <div class="portfolio-thumb in">
                  <a href="#" class="main-link">
                    <img
                      class="img-responsive img-center"
                      src="https://www.bootdey.com/image/350x280/FF7F50/000000"
                      alt=""
                    />
                    <h2 class="project-title">Get Colored</h2>
                    <span class="overlay-mask"></span>
                  </a>
                  <a
                    class="enlarge centered cboxElement"
                    href="#"
                    title="Get Colored"
                  >
                    <i class="fa fa-expand fa-fw"></i>
                  </a>
                </div>
              </article>

              <article class="col-md-4 col-sm-6 portfolio-item apps">
                <div class="portfolio-thumb in">
                  <a href="#" class="main-link">
                    <img
                      class="img-responsive img-center"
                      src="https://www.bootdey.com/image/350x280/20B2AA/000000"
                      alt=""
                    />
                    <h2 class="project-title">Holiday Selector</h2>
                    <span class="overlay-mask"></span>
                  </a>
                  <a
                    class="enlarge cboxElement"
                    href="#"
                    title="Holiday Selector"
                  >
                    <i class="fa fa-expand fa-fw"></i>
                  </a>
                  <a class="link" href="#">
                    <i class="fa fa-eye fa-fw"></i>
                  </a>
                </div>
              </article>

              <article class="col-md-4 col-sm-6 portfolio-item web-design psd">
                <div class="portfolio-thumb in">
                  <a href="#" class="main-link">
                    <img
                      class="img-responsive img-center"
                      src="https://www.bootdey.com/image/350x280/9400D3/000000"
                      alt=""
                    />
                    <h2 class="project-title">Scavenger Hunt</h2>
                    <span class="overlay-mask"></span>
                  </a>
                  <a
                    class="enlarge cboxElement"
                    href="#"
                    title="Scavenger Hunt"
                  >
                    <i class="fa fa-expand fa-fw"></i>
                  </a>
                  <a class="link" href="#">
                    <i class="fa fa-eye fa-fw"></i>
                  </a>
                </div>
              </article>

              <article class="col-md-4 col-sm-6 portfolio-item web-design apps">
                <div class="portfolio-thumb in">
                  <a href="#" class="main-link">
                    <img
                      class="img-responsive img-center"
                      src="https://www.bootdey.com/image/350x280/87CEFA/000000"
                      alt=""
                    />
                    <h2 class="project-title">Sonor</h2>
                    <span class="overlay-mask"></span>
                  </a>
                  <a class="enlarge cboxElement" href="#" title="Sonor">
                    <i class="fa fa-expand fa-fw"></i>
                  </a>
                  <a class="link" href="#">
                    <i class="fa fa-eye fa-fw"></i>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioBoot;
