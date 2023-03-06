import React from "react";
import { Row, Col, Label, Input } from "reactstrap";
import axios from "axios";

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionId: props.match.params.id,
      file: null,
    };
  }

  handleFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("sessionId", this.state.sessionId);
    formData.append("imgFile", this.state.file);

    axios
      .post("https://gachateambe.herokuapp.com/api/images", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div className="page-title">
                <div className="float-left">
                  <h1 className="title">Upload Image</h1>
                </div>
              </div>

              <div className="row margin-0">
                <div className="col-12">
                  <section className="box ">
                    <header className="panel_header">
                      <h2 className="title float-left">Upload image</h2>
                    </header>
                    <div className="content-body">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">
                          <form onSubmit={this.handleSubmit}>
                            <div className="form-row">
                              <div className="form-group col-md-12">
                                <label htmlFor="sessionId">SessionId</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="sessionId"
                                  name="sessionId"
                                  placeholder=""
                                  value={this.state.sessionId}
                                  readOnly
                                />
                              </div>

                              <div className="form-group col-md-12">
                                <Label htmlFor="file">Profile Image</Label>
                                <Input
                                  type="file"
                                  name="file"
                                  id="file"
                                  onChange={this.handleFileChange}
                                />
                              </div>
                            </div>
                            <button type="submit" className="btn btn-primary">
                              Save
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default UploadImage;
