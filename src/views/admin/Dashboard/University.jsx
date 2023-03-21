import React from "react";
import { Row, Col } from "reactstrap";

class University extends React.Component {
  render() {
    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div className="col-lg-12 col-xl-12 col-md-12 col-12">
                <section className="box">
                  <header className="panel_header">
                    <h2 className="title float-left">Pt Booking Dashboard</h2>
                  </header>
                  <div className="content-body">
                    <div className="row">
                      <div className="col-12">
                        <iframe
                          width="100%"
                          height="700"
                          src="https://lookerstudio.google.com/embed/reporting/d8b822e3-af3f-469d-8a8a-9309445c8051/page/tWDGB"
                          frameBorder="0"
                          // style="border:0"
                          title="Pt Booking Dashboard"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default University;
