import React from "react"; // Import React
import moment from "moment"; // Example for onSort prop
//import { render } from 'react-dom'; // Import render method
import Datatable from "react-bs-datatable"; // Import this package
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
const apiUrl = "https://gachateambe.herokuapp.com/api/sessions";
const token = localStorage.getItem("accessToken");
const header = [
  {
    title: "ID",
    prop: "sessionId",
    sortable: true,
    filterable: true,
    width: "200px",
  },
  {
    title: "Slot",
    prop: "slot",
    sortable: true,
    filterable: true,
    width: "200px",
  },
  {
    title: "Date",
    prop: "date",
    sortable: true,
    filterable: true,
    width: "200px",
  },
  {
    title: "Note from Pt",
    prop: "notePt",
    sortable: true,
    filterable: true,
    width: "200px",
  },
  {
    title: "Note form Trainee",
    prop: "noteTe",
    sortable: true,
    filterable: true,
    width: "200px",
  },
  { title: "Action", prop: "editButton", width: "50px" },
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

class Sessions extends React.Component {
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
        const slot = response.data;
        const slotData = slot.sessions.map((slot) => ({
          sessionId: slot.sessionId,
          slot: slot.slot.slotTime,
          date: moment(slot.date).format("DD-MM-YYYY"),
          notePt: slot.noteFromPT,
          noteTe: slot.noteFromTrainee ? slot.noteFromTrainee : "Nothing",
        }));
        this.setState({ data: slotData });
        return slotData;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleEdit(slot) {
    console.log(`Edit slot with ID ${slot.sessionId}`);
  }
  render() {
    const customStyle = {
      td: {
        whiteSpace: "normal",
        wordWrap: "break-word",
        fontSize: "20px",
      },
      th: {
        width: "200px",
        fontSize: "20px",
      },
    };
    const { data } = this.state;
    console.log(data);
    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div className="page-title">
                <div className="float-left">
                  <h1 className="title">Session asset</h1>
                </div>
              </div>

              <div className="col-12">
                <section className="box ">
                  <header className="panel_header">
                    <h2 className="title float-left">Session</h2>
                  </header>
                  <div className="content-body">
                    <div className="row">
                      <div className="col-lg-12 dt-disp">
                        <Datatable
                          tableHeader={header}
                          tableBody={data.map((slot) => ({
                            ...slot,

                            editButton: (
                              <Link to={`/pt/upload-image/${slot.sessionId}`}>
                                <button className="btn btn-primary">
                                  Edit
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
                          customStyle={customStyle}
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

export default Sessions;
