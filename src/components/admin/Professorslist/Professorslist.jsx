import React from "react";
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

var BASEDIR = process.env.REACT_APP_BASEDIR;

class Professorslist extends React.Component {
  render() {
    var professorsList = [];
    for (var i = 0; i < this.props.professors.length; i++) {
      professorsList.push(
        <div className="col-md-6 col-lg-4" key={i}>
          <div className="team-member ">
            <div className="team-img">
              <img
                className="img-fluid"
                src={this.props.professors[i].avatar}
                alt=""
              />
            </div>
            <div className="team-info">
              <h3>
                <NavLink to={BASEDIR + "/admin/pt-profile"}>
                  {this.props.professors[i].name}
                </NavLink>
              </h3>
              <span>{this.props.professors[i].position}</span>

              <p>{this.props.professors[i].msg}</p>
            </div>
          </div>
        </div>
      );
    }
    return <div className="row">{professorsList}</div>;
  }
}

Professorslist.propTypes = {
  professors: PropTypes.arrayOf(PropTypes.object),
};

export default Professorslist;
