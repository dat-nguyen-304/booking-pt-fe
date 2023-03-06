import React from "react";
import { Row, Col } from "reactstrap";

import { Professorslist } from "components";

import { loadPTs } from "variables/admin/professors.jsx";

class Professor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          pts: [],
        };
      }
    
      async componentDidMount() {
        const loadedPts = await loadPTs();
        this.setState({
          pts: loadedPts,
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
                  <h1 className="title">Personal Trainer</h1>
                </div>
              </div>

              <div className="col-xl-12">
                <section className="box ">
                  <header className="panel_header">
                    <h2 className="title float-left">All Personal Trainer</h2>
                  </header>
                  <div className="content-body">
                    <div className="row">
                      <div className="col-12">
                        <Professorslist pt={this.state.pts} />
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

export default Professor;
