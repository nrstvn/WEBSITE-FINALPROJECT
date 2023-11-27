import React from 'react';
import './about.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <section className="upcoming-meetings" id="About">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="section-heading">
              <h2>Program Studi</h2>
            </div>
          </Col>
        </Row>
        {/* Program Studi Teknik Informatika */}
        <div className="container" style={{ marginBottom: '50px' }} id="teknik-informatika">
          <Row>
            <Col lg={12}>
              <div className="row">
                <Col lg={12}>
                  <div className="meeting-single-item">
                    <div className="thumb">
                      <a href="#"><img src="public/img/ass1.jpg" alt="" style={{ maxWidth: '100%', margin: 'auto' }} /></a>
                    </div>
                    <div className="down-content">
                      <h4>Program Studi Teknik Informatika</h4>
                      <p className="description">
                      Program Studi Informatika, Fakultas Ilmu Komputer, Universitas Klabat dibuka untuk memenuhi kebutuhan pasar akan tenaga ahli dibidang informatika. Seorang ahli informatika (Ilmu Komputer) harus mempunyai dasar algoritma dan logika yang kuat karena ia akan merancang suatu prosedur baru, modul baru ataupun algoritma baru. Hasil rancangan dan temuan baru ini digunakan oleh tenaga ahli dari Sistem Informasi untuk dibuatkan aplikasinya, sehingga temuan tersebut bisa mempermudah dan melengkapi fasilitas kehidupan manusia. Program studi ini didirikan pada tahun 2005 pengembangan dari program studi Sistem Informasi yang sudah dulu ada. Untuk menyelesaikan program studi ini mahasiswa harus menyelesaikan dalam sks sebanyak 156 SKS.
                      </p>
                    </div>
                  </div>
                </Col>
              </div>
            </Col>
          </Row>
        </div>

{/* Program Studi Sistem Informasi */}
<div className="container" style={{ marginBottom: '50px' }} id="sistem-informasi">
  <Row>
    <Col lg={12}>
      <div className="row">
        <Col lg={12}>
          <div className="meeting-single-item">
            <div className="thumb">
              <a href="#"><img src="public/img/ass2.jpg" alt="" style={{ maxWidth: '100%', margin: 'auto' }} /></a>
            </div>
            <div className="down-content">
              <h4>Program Studi Sistem Informasi</h4>
              <p className="description">
              Program studi Sistem Informasi di Fakultas Ilmu Komputer Universitas Klabat berdiri sejak tahun 1999 pertama kali program studi ini bernama Ilmu Komputer, kemudian berubah menjadi Sistem Informasi. Pada tahun 2010 program studi ini sudah mendapatkan akreditasi dari Badan Akreditasi Nasional (BAN) dengan nomor 021/BAN-PT/Ak-XIII/S1/X/2010. Lulusan program studi Sistem Informasi akan menjadi seorang ahli dibidang Sistem Informasi, dimana mereka ini akan membuat aplikasi-aplikasi yang bermanfaat bagi manusia disegala bidang, seperti perkantoran, institusi, perhotelan, perdagangan dll. Sebuah sistem yang sebelumnya dikerjakan manual, oleh seorang ahli Sistem Informasi akan menjadi mudah, sederhana dan otomatis dengan bantuan komputer Untuk menyelesaikan program studi ini sesuai dengan kurikululm tahun 2008-2013 mahasiswa dituntut untuk menempuh sejumlah mata kuliah dengan bobot satuan kredit semester total 154 SKS, yang bisa diselesaikan dalam waktu empat tahun
              </p>
            </div>
          </div>
        </Col>
      </div>
    </Col>
  </Row>
</div>


        {/* Program Studi Teknologi Informasi */}
        <div className="container" style={{ marginBottom: '50px' }} id="teknologi-informasi">
          <Row>
            <Col lg={12}>
              <div className="row">
                <Col lg={12}>
                  <div className="meeting-single-item">
                    <div className="thumb">
                      <a href="#"><img src="public/img/ass3.jpg" alt="" style={{ maxWidth: '100%', margin: 'auto' }} /></a>
                    </div>
                    <div className="down-content">
                      <h4>Program Studi Teknologi Informasi</h4>
                      <p>
                        Konsentrasi Desain & Animasi
                        Program studi Teknologi Informasi dengan konsentrasi Desain, Animasi, dan Multimedia adalah sebuah program pendidikan yang menggabungkan prinsip-prinsip desain visual, animasi, dan pengembangan multimedia dengan pengetahuan dan keahlian di bidang teknologi informasi. Program ini bertujuan untuk melatih mahasiswa dalam menciptakan konten digital yang menarik dan interaktif, serta dipersiapkan untuk berkarir di industri kreatif. Selama studi, mahasiswa akan mempelajari konsep dasar desain visual, estetika, dan teknik-teknik kreatif untuk menciptakan antarmuka pengguna yang menarik dan intuitif. Dan selain itu juga akan diperkenalkan pada prinsip-prinsip animasi, termasuk gerakan, timing, dan karakterisasi, untuk menghasilkan animasi yang hidup dan mengesankan. Mahasiswa tentunya juga akan mempelajari teknologi multimedia seperti pengembangan web, grafika komputer, suara, dan video untuk menciptakan pengalaman multimedia dalam sebuah tampilan visual yang informatif dan kreatif.
                      </p>
                    </div>
                  </div>
                </Col>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default About;
