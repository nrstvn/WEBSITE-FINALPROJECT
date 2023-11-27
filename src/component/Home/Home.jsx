import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <section className="section main-banner" id="home1">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="public/img/uk3.jpeg" alt="First slide" />
          <Carousel.Caption>
            <div className="photo header">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="caption">
                      <h6>Hello Students</h6>
                      <h2>Selamat datang di Fakultas Ilmu Komputer</h2>
                      <p>
                        Fakultas Ilmu Komputer Universitas Klabat (FILKOM UNKLAB) ini keberadaannya sangat diperlukan oleh
                        masyarakat baik pada masa kini maupun pada masa yang akan datang. Pengembangan ilmu komputer ini
                        sangat diperlukan seiring dengan pengembangan kondisi masyarakat dan pemerintah.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        {/*  */}
      </Carousel>
    </section>
  );
};

export default Home;
