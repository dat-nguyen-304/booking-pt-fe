import React from "react";
import {
  Collapse,
  Navbar,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";
import jwt from "jsonwebtoken";
import dashboardRoutes from "routes/admin.jsx";
import { withRouter } from "react-router-dom";
var IMGDIR = process.env.REACT_APP_IMGDIR;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      color: "primary",
      profilename: "Eric Nelson",
      profileimg: "/images/profile/profile.jpg",
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    if (this.state.isOpen) {
      this.setState({
        color: "primary",
      });
    } else {
      this.setState({
        color: "white",
      });
    }
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  userddToggle(e) {
    this.setState({
      userddOpen: !this.state.userddOpen,
    });
  }
  searchToggle() {
    //this.refs.searchbarToggle.classList.toggle('toggled');
    this.setState({
      searchOpen: !this.state.searchOpen,
    });
    //console.log(this.state.searchOpen);
    //this.refs.searchbarToggle.classList.toggle('opened');
  }
  getBrand() {
    var name;
    dashboardRoutes.map((prop, key) => {
      if (prop.collapse) {
        prop.views.map((prop, key) => {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
          return null;
        });
      } else {
        if (prop.redirect) {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        } else {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        }
      }
      return null;
    });
    return name;
  }
  openSidebar() {
    document.documentElement.classList.toggle("nav-toggle");
    this.refs.sidebarToggle.classList.toggle("toggled");

    // close chat bar if open on smaller screens
    if (window.innerWidth < 993) {
      document.documentElement.classList.remove("nav-toggle-chat");
      // this.refs.chatToggle.classList.remove('toggled');
    }
  }
  openChat() {
    document.documentElement.classList.toggle("nav-toggle-chat");
    // this.refs.chatToggle.classList.toggle('toggled');

    // close menu bar if open on smaller screens
    if (window.innerWidth < 993) {
      document.documentElement.classList.remove("nav-toggle");
      this.refs.sidebarToggle.classList.remove("toggled");
    }
  }
  toggle_grid() {
    document.documentElement.classList.toggle("toggle-grid");
  }

  openStyle() {
    document.documentElement.classList.toggle("nav-toggle-style");
    // this.refs.chatToggle.classList.toggle('toggled');

    // close menu bar if open on smaller screens
    /*if(window.innerWidth < 993){
            document.documentElement.classList.remove('nav-toggle');
            this.refs.sidebarToggle.classList.remove('toggled');
        }*/
  }
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor() {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({
        color: "primary",
      });
    } else {
      this.setState({
        color: "primary",
      });
    }
  }
  componentDidMount() {
    if (this.props.navtype === "mini") {
      document.documentElement.classList.add("nav-toggle");
      this.refs.sidebarToggle.classList.add("toggled");
    } else {
      document.documentElement.classList.remove("nav-toggle");
      this.refs.sidebarToggle.classList.remove("toggled");
    }
    window.addEventListener("resize", this.updateColor.bind(this));
    const accessToken = localStorage.getItem("accessToken");
    const nameUser = jwt.decode(accessToken).email.split("@")[0];
    if (this.props.admintype === "admin") {
      this.setState({
        profilename: nameUser,
        profileimg: IMGDIR + "/images/profile/profile-university.jpg",
      });
    } else if (this.props.admintype === "pt") {
      this.setState({
        profilename: "pt",
        profileimg: IMGDIR + "/images/profile/profile-university.jpg",
      });
    }
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-toggle") !== -1
    ) {
      document.documentElement.classList.toggle("nav-toggle");
      this.refs.sidebarToggle.classList.toggle("toggled");
    }
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-toggle-chat") !== -1
    ) {
      document.documentElement.classList.toggle("nav-toggle-chat");
      // this.refs.chatToggle.classList.toggle('toggled');
    }
  }
  render() {
    const { history } = this.props;
    function logout() {
      history.push("/logout");
    }
    return (
      // add or remove classes depending if we are on full-screen-maps page or not
      <Navbar
        expand="lg"
        className={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "navbar-absolute fixed-top"
            : "navbar-absolute fixed-top "
        }
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button
                type="button"
                ref="sidebarToggle"
                className="navbar-toggler"
                onClick={() => this.openSidebar()}
              >
                <i className="i-menu"></i>
              </button>
            </div>
          </div>

          <Collapse isOpen={this.state.isOpen} navbar className="navbar-right">
            <Nav navbar>
              <Dropdown
                nav
                isOpen={this.state.userddOpen}
                toggle={(e) => this.userddToggle(e)}
                className="userdd"
              >
                <DropdownToggle caret nav>
                  <img
                    src={this.state.profileimg}
                    alt="react-logo"
                    className="avatar-image"
                  />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag="a">
                    <i className="i-wrench" href="#!"></i> Settings
                  </DropdownItem>
                  <DropdownItem tag="a">
                    <i className="i-user" href="#!"></i> Profile
                  </DropdownItem>
                  <DropdownItem tag="a">
                    <i className="i-info" href="#!"></i> Help
                  </DropdownItem>
                  <DropdownItem
                    tag="a"
                    className=""
                    onClick={logout}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="i-lock"></i>Logout
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
            <div
              className="screensize"
              onClick={() => this.toggle_grid()}
            ></div>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default withRouter(Header);
