import React from "react";
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";


class Studentslist extends React.Component {
  render() {
    var studentsList = [];
    for (var i = 0; i < this.props.students.length; i++) {
      studentsList.push(
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" key={i}>
          <div className="team-member">
            <div className="team-img">
              <img
                className="img-fluid"
                src={this.props.students[i].imgLink}
                alt=""
              />
            </div>
            <div className="team-info">
              <h3>
                <NavLink to={ `/admin/trainee-profile/${this.props.students[i].id}`}>
                  {this.props.students[i].fullName}
                </NavLink>
              </h3>
              <span>{this.props.students[i].currentPackageId} course</span> 
              
            </div>
          </div>
        </div>
      );
    }
    return <div className="row">{studentsList}</div>;
  }
}

Studentslist.propTypes = {
  students: PropTypes.arrayOf(PropTypes.object),
};

export default Studentslist;
