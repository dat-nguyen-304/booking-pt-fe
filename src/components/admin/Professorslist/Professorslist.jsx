import React from "react";
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";



class Ptlist extends React.Component {
  render() {
    var ptList = [];
    for (var i = 0; i < this.props.pt.length; i++) {
      ptList.push(
        <div className="col-md-6 col-lg-4" key={i}>
          <div className="team-member ">
            <div className="team-img">
              <img
                className="img-fluid"
                src={this.props.pt[i].img}
                alt=""
              />
            </div>
            <div className="team-info">
              <h3>
                <NavLink to={`/admin/pt-profile/${this.props.pt[i].id}`}>
                  {this.props.pt[i].name}
                </NavLink>
              </h3>
              <span>{this.props.pt[i].description}</span>

              <p>{this.props.pt[i].center}</p>
            </div>
          </div>
        </div>
      );
    }
    return <div className="row">{ptList}</div>;
  }
}

Ptlist.propTypes = {
  pt: PropTypes.arrayOf(PropTypes.object),
};

export default Ptlist;
