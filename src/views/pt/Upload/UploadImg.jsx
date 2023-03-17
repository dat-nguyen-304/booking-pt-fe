import React, { useState } from "react";
import { Row, Col, Label, Input } from "reactstrap";
import axios from "axios";

const UploadImage = (props) => {
  const sessionId = props.match.params.id
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files);
    console.log(event.target.files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("sessionId", sessionId);
    formData.append("imgFile", file);

    const accessToken = localStorage.getItem("accessToken");
    axios
      .post("https://gachateambe.herokuapp.com/api/images", formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                        <form onSubmit={handleSubmit}>
                          <div className="form-row">
                            <div className="form-group col-md-12">
                              <label htmlFor="sessionId">SessionId</label>
                              <input
                                type="text"
                                className="form-control"
                                id="sessionId"
                                name="sessionId"
                                placeholder=""
                                value={sessionId}
                                readOnly
                              />
                            </div>

                            <div className="form-group col-md-12">
                              <Label htmlFor="file">Trainee Image</Label>
                              <Input
                                type="file"
                                name="file"
                                id="file"
                                multiple
                                onChange={handleFileChange}
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
};

export default UploadImage;
