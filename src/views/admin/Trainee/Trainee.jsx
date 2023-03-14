import moment from "moment"; // Example for onSort prop
import React from "react"; // Import React
//import { render } from 'react-dom'; // Import render method
import Datatable from "react-bs-datatable"; // Import this package
import { Row, Col } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
const apiUrl = "https://gachateambe.herokuapp.com/api/trainee-packages";
const token = localStorage.getItem("accessToken");

const header = [
  { title: "ID", prop: "traineeId", sortable: true, filterable: true },
  { title: "Full Name", prop: "fullName", sortable: true, filterable: true },
  { title: "Package Name", prop: "packageName", sortable: true, filterable: true },
  { title: "Purchase date ", prop: "regisDate", sortable: true, filterable: true },
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

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // Fetch data from the API endpoint
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Set the response data as the value of `body`
        const data = response.data.traineePackages;
        const traineePack = data.map((data) => ({
          traineeId : data.trainee.traineeId,
          fullName : data.trainee.fullName,
          packageName: data.package.packageName,
          regisDate: moment(data.registerDate).format("DD-MM-YYYY")

        }));
        this.setState({ data: traineePack });
      })
      .catch((error) => {
          console.log(error);
      });
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div className="page-title">
                <div className="float-left">
                  <h1 className="title">Trainee Assets</h1>
                </div>
              </div>

              <div className="col-12">
                <section className="box ">
                  <header className="panel_header">
                    <h2 className="title float-left">All Trainee</h2>
                  </header>
                  <div className="content-body">
                    <div className="row">
                      <div className="col-lg-12 dt-disp">
                        <Datatable
                          tableHeader={header}
                          tableBody={this.state.data.map((data) => ({
                            ...data,

                            viewDetail: (
                              <Link to={`/admin/trainee-profile/${data.traineeId}`}>
                                <button className="btn btn-primary btn-sm">
                                  View Detail
                                </button>
                              </Link>
                            ),
                          }))}
                          keyName="traineeTable"
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

export default Account;
