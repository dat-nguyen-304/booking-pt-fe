import Admin from "views/admin/Dashboard/University.jsx";

import Pt from "views/admin/Professor/Professor.jsx";
import AddPt from 'views/admin/Professor/AddProfessor.jsx';
import EditPt from "views/admin/Professor/EditProfessor.jsx";
import PtProfile from "views/admin/Professor/ProfessorProfile.jsx";

import Trainee from "views/admin/Trainee/Trainee.jsx";
// import AddTrainee from 'views/admin/Trainee/AddTrainee.jsx';
// import EditTrainee from "views/admin/Trainee/EditTrainee.jsx";
import TraineeProfile from "views/admin/Trainee/TraineeProfile.jsx";

import Center from "views/admin/Center/Center.jsx";
import AddCenter from "views/admin/Center/AddCenter.jsx";
import EditCenter from "views/admin/Center/EditCenter.jsx";
import CenterDetail from "views/admin/Center/CenterProfile.jsx";

// import UniversityCentres from 'views/admin/Centres/UniversityCentres.jsx';

import Course from "views/admin/Course/Course.jsx";
import AddCourse from "views/admin/Course/AddCourse.jsx";
import EditCourse from "views/admin/Course/EditCourse.jsx";
import CourseView from "views/admin/Course/CourseView.jsx";
import ViewAll from "views/admin/Course/ViewAll.jsx";

import Account from "views/admin/Library/Account.jsx";




var dashRoutes = [
  //{ path: "#", name: "Main", type: "navgroup"},

  {
    path: "/admin/dashboard",
    name: "Dashboard",
    icon: "speedometer",
    badge: "",
    component: Admin,
  },
  {
    path: "/admin/trainees",
    name: "Trainees",
    icon: "people",
    // type: "dropdown",
    parentid: "trainees",
    component: Trainee,
    child: [
      { path: "/admin/trainees", name: "Trainees" },
      // { path: "/admin/add-trainee", name: "Add Trainee"},
      // { path: "/admin/edit-trainee", name: "Edit Trainee" },
      { path: "/admin/trainee-profile/:id", name: "Trainee Profile" },
    ],
  },
  { path: "/admin/trainees", component: Trainee, type: "child" },
  // { path: "/admin/add-trainee", component: AddTrainee, type: "child"},
  // { path: "/admin/edit-trainee", component: EditTrainee, type: "child" },
  { path: "/admin/trainee-profile/:id", component: TraineeProfile, type: "child" },
  {
    path: "#",
    name: "Personal trainer",
    icon: "user",
    type: "dropdown",
    parentid: "professors",
    child: [
      { path: "/admin/pts", name: "Personal trainer" },
      { path: "/admin/add-pt", name: "Add Personal trainer"},
      // { path: "/admin/edit-pt/:id", name: "Edit Personal trainer" },
      // { path: "/admin/pt-profile/:id", name: "Personal trainer Profile" },
    ],
  },
  { path: "/admin/pts", component: Pt, type: "child" },
  { path: "/admin/add-pt", component: AddPt, type: "child"},
  { path: "/admin/edit-pt/:id", component: EditPt, type: "child" },
  { path: "/admin/pt-profile/:id", component: PtProfile, type: "child" },

  {
    path: "#",
    name: "Centers",
    icon: "organization",
    type: "dropdown",
    parentid: "centers",
    child: [
      { path: "/admin/centers", name: "Centers" },
      { path: "/admin/add-center", name: "Add Centers" },
    ],
  },
  { path: "/admin/centers", component: Center, type: "child" },
  { path: "/admin/add-center", component: AddCenter, type: "child" },
  { path: "/admin/edit-center/:id", component: EditCenter, type: "child" },
  { path: "/admin/center-detail/:id", component: CenterDetail, type: "child" },

  {
    path: "#",
    name: "Courses",
    icon: "folder-alt",
    type: "dropdown",
    parentid: "courses",
    child: [
      { path: "/admin/courses", name: "Courses" },
      { path: "/admin/add-course", name: "Add Course" },
      // { path: "/admin/edit-course/:id", name: "Edit Course" },
      // { path: "/admin/course-view/:id", name: "View Course" },
      { path: "/admin/view-all", name: "View All Course" }
    ],
  },
  { path: "/admin/courses", component: Course, type: "child" },
  { path: "/admin/add-course", component: AddCourse, type: "child" },
  { path: "/admin/edit-course/:id", component: EditCourse, type: "child" },
  { path: "/admin/course-view/:id", component: CourseView, type: "child" },
  { path: "/admin/view-all", component: ViewAll, type: "child" },

  {
    path: "/admin/account",
    name: "Account",
    icon: "social-reddit",
    badge: "",
    component: Account,
  },

  { path: "/admin/dashboard", component: Admin, type: "child" },

  //{ redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
