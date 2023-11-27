// VisiMisi.jsx

import React from 'react';
import './visiMisi.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const VisiMisi = () => {
  return (
    <section className="apply-now" id="visimisi">
      <Container className="unique-container">
        <Row>
          <Col lg={12} className="text-center mb-4">
            <img src="public/img/logo.png" alt="Logo" className="logo" />
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="align-self-center">
            <div className="item">
              <h3>VISI</h3>
              <p>
                Menjadi fakultas ilmu komputer yang unggul dan terkemuka di Indonesia Timur dalam penyelenggaraan
                Pendidikan, Penelitian dan Pengabdian Masyarakat dalam bidang penguasaan teknologi informasi dan
                sistem informasi yang berlandaskan keimanan yang kuat kepada Tuhan sehingga menciptakan tenaga kerja
                yang cerdas, kreatif, jujur, disiplin, bertanggungjawab dan takut akan Tuhan.
              </p>
            </div>
          </Col>
          <Col lg={6} className="align-self-center">
            <div className="item">
              <h3>MISI</h3>
              <p>
                Mengembangkan dan meningkatkan kualitas dosen, mahasiswa maupun lulusannya dalam penelitian dasar dan
                aplikasinya yang mendukung pengembangan teknologi informasi dan sistem informasi dalam meningkatkan
                kesejahteraan umat manusia, dengan cara melaksanakan tri darma perguruan tinggi.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VisiMisi;
