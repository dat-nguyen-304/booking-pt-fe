import moment from "moment"; // Example for onSort prop
import React from "react"; // Import React
//import { render } from 'react-dom'; // Import render method
import Datatable from "react-bs-datatable"; // Import this package
import { Row, Col } from "reactstrap";
import { packagesStatic } from "../../../variables/admin/courses";
import { Link } from "react-router-dom";

const header = [
  { title: "ID", prop: "id", sortable: true, filterable: true },
  { title: "Course Name", prop: "name", sortable: true, filterable: true },
  { title: "Price", prop: "price", sortable: true, filterable: true },
  { title: "Student", prop: "numberOfTrainees", sortable: true, filterable: true },
  {
    title: "Package Type",
    prop: "packCategory",
    sortable: true,
    filterable: true,
  },
  { title: "Action", prop: "viewDetail" },
];


const onSortFunction = {
  date(columnValue) {
    // Convert the string date format to UTC timestamp
    // So the table could sort it by number instead of by string
    return moment(columnValue, "Do MMMM YYYY").valueOf();
  },
};

const customLabels = {
  first: "<<",
  last: ">>",
  prev: "<",
  next: ">",
  show: "Display ",
  entries: " rows",
  noResults: "There is no data to be displayed",
};

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const packages = await packagesStatic();
    this.setState({data: packages});
  }
  render() {
    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div className="page-title">
                <div className="float-left">
                  <h1 className="title">Courses Assets</h1>
                </div>
              </div>
              <div className="col-12">
                <section className="box ">
                  <header className="panel_header">
                    <h2 className="title float-left">All Courses</h2>
                  </header>
                  <div className="content-body">
                    <div className="row">
                      <div className="col-lg-12 dt-disp">
                        <Datatable
                          tableHeader={header}
                          tableBody={this.state.data.map((data) => ({
                            ...data,

                            viewDetail: (
                              <Link to={`/admin/course-view/${data.id}`}>
                                <button className="btn btn-primary btn-sm">
                                  View Detail
                                </button>
                              </Link>
                            ),
                          }))}
                          keyName="userTable"
                          tableClass="striped table-hover"
                          rowsPerPage={10}
                          rowsPerPageOption={[5, 10, 15, 20]}
                          initialSort={{ prop: "id", isAscending: true }}
                          onSort={onSortFunction}
                          labels={customLabels}
                        />
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

export default Course;
