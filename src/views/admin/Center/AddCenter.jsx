import React, { useState } from "react";
import { Row, Col, Label, Input } from "reactstrap";
import axios from "axios";
function AddCenter() {
  const [centerName, setCenterName] = useState("");
  const [address, setAddress] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(centerName);
    console.log(address);
    const data = new FormData();
    data.append("centerName", centerName);
    data.append("address", address);
    data.append("centerImg", selectedFile);
    console.log(data);
    console.log(selectedFile);
    axios
      .post("https://gachateambe.herokuapp.com/api/centers", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.statusText);
        console.log(res.data);
        alert("Success");
      })
      .catch((err) => {
        alert("fail");
        console.log(err);
      });
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };
  return (
    <div>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">Add Center</h1>
              </div>
            </div>

            <div className="row margin-0">
              <div className="col-12">
                <section className="box ">
                  <header className="panel_header">
                    <h2 className="title float-left">Basic Info</h2>
                  </header>
                  <div className="content-body">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">
                        <form onSubmit={handleSubmit}>
                          <div className="form-row">
                            <div className="form-group col-md-12">
                              <label htmlFor="inputname4">Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="inputname4"
                                placeholder=""
                                value={centerName}
                                onChange={(e) => setCenterName(e.target.value)}
                              />
                            </div>

                            <div className="form-group col-md-12">
                              <Label htmlFor="exampleFile">Center Image</Label>
                              <Input
                                type="file"
                                name="imageLink"
                                id="exampleFile"
                                onChange={handleFileSelect}
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputAddress"
                              placeholder="1234 Main St"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                            />
                          </div>

                          <button type="submit" className="btn btn-primary">
                            Submit
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

export default AddCenter;
