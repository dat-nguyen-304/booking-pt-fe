import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Center } from "components";
import { loadCenters } from "variables/admin/centers.jsx";

class Centers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centers: [],
    };
  }

  async componentDidMount() {
    const loadedCenters = await loadCenters();
    this.setState({
      centers: loadedCenters,
    });
  }

  render() {
    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div className="page-title">
                <div className="float-left">
                  <h1 className="title">Center</h1>
                </div>
              </div>

              <div className="col-xl-12">
                <section className="box ">
                  <header className="panel_header">
                    <h2 className="title float-left">All Centers</h2>
                  </header>
                  <div className="content-body">
                    <div className="row">
                      <div className="col-12">
                        <Center centers={this.state.centers} />
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

export default Centers;
