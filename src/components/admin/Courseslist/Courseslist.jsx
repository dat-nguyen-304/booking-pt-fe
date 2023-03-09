import React from "react";
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";


class Courseslist extends React.Component {
  render() {
    var coursesList = [];
    for (var i = 0; i < this.props.courses.length; i++) {
      coursesList.push(
        <div className="col-md-6 col-lg-6 col-sm-12" key={i}>
          <div className="team-member aside-style">
            <div className="row margin-0">
              <div className="team-img col-4">
                <img
                  className="img-fluid"
                  src={this.props.courses[i].imgLink}
                  alt=""
                />
              </div>
              <div className="team-info col-8">
                <h3>
                  <NavLink to={`/admin/course-view/${this.props.courses[i].id}`}>
                    {this.props.courses[i].name}
                  </NavLink>
                </h3>
                <span>{this.props.courses[i].price} VND/{this.props.courses[i].durationByMonth} month</span> 
                <p>{this.props.courses[i].ptStatus}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div className="row">{coursesList}</div>;
  }
}

Courseslist.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.object),
};

export default Courseslist;
