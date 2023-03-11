import React, { useState, useEffect } from "react";
import { Row, Col, Label, Input } from "reactstrap";
import axios from "axios";
import { getCenterById } from "../../../variables/admin/centers";

function EditCenter() {
  const [centerName, setcenterName] = useState({});
  const [address, setAddress] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [oldData, setOldData] = useState({});
  //center id
  const path = window.location.pathname;
  const centerId = path.split("/").pop();
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    const getCenter = async () => {
      const center = await getCenterById(centerId);
      setOldData(center);
    };
    getCenter();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(centerName);
    console.log(address);
    const data = new FormData();
    data.append("operation", "update");
    data.append("centerName", centerName);
    data.append("address", address);
    data.append("centerImg", selectedFile);
    console.log(data);
    console.log(selectedFile);
    //https://gachateambe.herokuapp.com/api/centers/${centerId}
    axios.patch(`https://gachateambe.herokuapp.com/api/centers/${centerId}`, {
      data: data
    }, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        // 'Content-Type': "multipart/form-data",
        operation : "update"
      }
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
                <h1 className="title">Edit Center</h1>
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
                        <form method="post" onSubmit={handleSubmit}>
                          <div className="form-row">
                            <div className="form-group col-md-12">
                              <label htmlFor="name">Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder=""
                                defaultValue={oldData.centerName}
                                onChange={(e) => setcenterName(e.target.value)}
                              />
                            </div>
                            <div className="form-group col-md-12">
                              <Label htmlFor="centerImg">Center Image</Label>
                              <div className="profileimg-input">
                                <img
                                  alt=""
                                  src={oldData.imgLink}
                                  className="img-fluid"
                                  style={{ width: "120px" }}
                                />
                              </div>
                              <Input type="file" name="file" id="centerImg"  onChange={handleFileSelect}/>
                            </div>
                            <div className="form-group col-md-12">
                              <label htmlFor="address">Address</label>
                              <input
                                type="text"
                                className="form-control"
                                id="address"
                                placeholder={oldData.address}
                                defaultValue={oldData.address}
                                onChange={(e) => setAddress(e.target.value)}
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

export default EditCenter;
