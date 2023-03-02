import React from "react";
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import moment from "moment";
import "./Center.css";

class CenterList extends React.Component {
  render() {
    var centerlist = [];
    for (var i = 0; i < this.props.centers.length; i++) {
      const createdDate = moment(this.props.centers[i].created).format(
        "DD-MM-YYYY"
      );
      centerlist.push(
        <div className="col-md-6 col-lg-4" key={i}>
          <div className="team-member ">
            <div className="team-img">
              <img
                className="img-fluid"
                src={this.props.centers[i].img}
                alt=""
              />
            </div>
            <div className="team-info">
              <h3>
                <NavLink to={`/admin/center-detail/${this.props.centers[i].id}`}>
                  {this.props.centers[i].name}
                </NavLink>
              </h3>
              <p>{this.props.centers[i].address}</p>
              <p>{createdDate}</p>
              <p
                className={
                  this.props.centers[i].status
                    ? "status-active"
                    : "status-maintenance"
                }
              >
                {this.props.centers[i].status ? "Đang hoạt động" : "Đang bảo trì"}
              </p>
            </div>
          </div>
        </div>
      );
    }
    return <div className="row">{centerlist}</div>;
  }
}

CenterList.propTypes = {
  centers: PropTypes.arrayOf(PropTypes.object),
};

export default CenterList;
