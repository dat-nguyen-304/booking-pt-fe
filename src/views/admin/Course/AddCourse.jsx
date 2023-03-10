import React from "react";
import { Row, Col, Label, Input } from "reactstrap";
import axios from "axios";
const AddCourse = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const packageName = event.target.elements.inputname4.value;
    const durationByDay = event.target.elements.day.value;
    const durationByMonth = event.target.elements.month.value;
    const category = event.target.elements.category.value;
    const object = event.target.elements.object.value;
    const price = event.target.elements.price.value;
    const data = {
      packageName,
      price,
      durationByDay,
      durationByMonth,
      category,
      object,
    };
    console.log(data);
    axios
      .post("https://gachateambe.herokuapp.com/api/packages", data, {
      })
      .then((response) => {
        console.log(response);
        window.location.href = "/admin/courses";
      })
      .catch((error) => {
        console.log(error);
        alert("Error");
      });
  };
  return (
    <div>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">Add Course</h1>
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
                              <label htmlFor="inputname4">Course Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="inputname4"
                                placeholder=""
                                required
                              />
                            </div>
                            <div className="form-group col-md-12">
                              <label htmlFor="price">Price</label>
                              <input
                                type="number"
                                className="form-control"
                                id="price"
                                placeholder=""
                                required
                              />
                            </div>
                            <div className="form-group col-md-12">
                              <label htmlFor="day">Duration By Day</label>
                              <input
                                type="number"
                                className="form-control"
                                id="day"
                                placeholder=""
                                min="1"
                                max="31"
                              />
                            </div>
                            <div className="form-group col-md-12">
                              <label htmlFor="month">Duration By Month</label>
                              <input
                                type="munber"
                                className="form-control"
                                id="month"
                                placeholder=""
                                min="1"
                                max="12"
                              />
                            </div>

                            <div className="form-group col-md-12">
                              <Label htmlFor="category">Category</Label>
                              <Input
                                type="select"
                                name="category"
                                id="category"
                                required
                              >
                                <option>Select</option>
                                <option value="havept">
                                  Have Personal Trainer
                                </option>
                                <option value="nopt">
                                  Don't have personal trainer
                                </option>
                              </Input>
                            </div>

                            <div className="form-group col-md-12">
                              <Label htmlFor="object">
                                Suitable for:
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="object"
                                placeholder=""
                                required
                              >
                                 <option>Select</option>
                                <option value="newbie">
                                  For newbie
                                </option>
                                <option value="intermediate">
                                  For intermediate
                                </option>
                                <option value="professional">
                                  for professional
                                </option>
                                </Input>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Add
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

export default AddCourse;
