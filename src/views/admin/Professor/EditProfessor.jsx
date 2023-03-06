import React from "react";
import { Row, Col, Label, Input } from "reactstrap";
import { updatePt, getPtById } from "../../../variables/admin/professors";
import { loadCenters } from "../../../variables/admin/centers";
import { withRouter } from "react-router-dom";
class EditPt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pt: [],
      centers: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    const { match } = this.props;
    const ptID = match.params.id;
    const loadedPT = await getPtById(ptID);
    const centers = await loadCenters();
    this.setState({
      pt: loadedPT,
      centers: centers,
      centerId: 0,
      fullName: "",
      rating: 0,
      description: "",
    });
  }
  async handleSubmit(event) {
    console.log(this.state.centerId);
    console.log(this.state.fullName);
    console.log(this.state.rating);
    console.log(this.state.description);
    event.preventDefault(); // ngăn chặn hành động mặc định của nút submit
    const formData = new FormData(); // tạo đối tượng FormData từ form
    formData.append("centerId", this.state.centerId);
    formData.append("fullName", this.state.fullName);
    formData.append("rating", this.state.rating);
    formData.append("description", this.state.description);
    const { match } = this.props;
    const ptID = match.params.id;
    console.log(formData);
    try {
        await updatePt(ptID, formData); // gọi hàm updatePT với ptId và formData
        
    } catch (error) {
        console.log(error);
    }
  }
  render() {
    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div className="page-title">
                <div className="float-left">
                  <h1 className="title">Edit Personal Trainer</h1>
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
                          <form onSubmit={this.handleSubmit}> 
                            <div className="form-row">
                              <div className="form-group col-md-12">
                                <label htmlFor="inputname4">Full Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputname4"
                                  placeholder=""
                                  defaultValue={this.state.pt.fullName}
                                  onChange={(e) => this.setState({ fullName: e.target.value })}
                                />
                              </div>

                              <div className="form-group col-md-12">
                                <Label htmlFor="exampleSelect">Center</Label>
                                <Input
                                  type="select"
                                  name="select"
                                  id="exampleSelect"
                                  defaultValue={this.state.pt.centerName}
                                  onChange={(event) => this.setState({ centerId: event.target.value })}
                                >
                                  {this.state.centers.map((center) => (
                                    <option key={center.id} value={center.id}>
                                      {center.name}
                                    </option>
                                  ))}
                                </Input>
                              </div>

                              <div className="form-group col-md-12">
                                <label htmlFor="rating">Rating</label>
                                <input
                                  type="float"
                                  className="form-control"
                                  id="rating"
                                  placeholder=""
                                  defaultValue={this.state.pt.rating}
                                  onChange={(e) => this.setState({ rating: e.target.value })}
                                  required
                                />
                              </div>

                              <div className="form-group col-md-12">
                                <Label htmlFor="description">Description</Label>
                                <Input
                                  type="text"
                                  name="text"
                                  id="description"
                                  placeholder=""
                                  defaultValue={this.state.pt.description}
                                  onChange={(e) => this.setState({ description: e.target.value })}
                                />
                              </div>
                            </div>

                            <button type="submit" className="btn btn-primary">
                              Update
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

export default withRouter(EditPt);
