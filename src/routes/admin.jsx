import Admin from 'views/admin/Dashboard/University.jsx';



import Professor from 'views/admin/Professor/Professor.jsx';
import AddProfessor from 'views/admin/Professor/AddProfessor.jsx';
import EditProfessor from 'views/admin/Professor/EditProfessor.jsx';
import ProfessorProfile from 'views/admin/Professor/ProfessorProfile.jsx';

import Trainee from 'views/admin/Trainee/Trainee.jsx';
import AddTrainee from 'views/admin/Trainee/AddTrainee.jsx';
import EditTrainee from 'views/admin/Trainee/EditTrainee.jsx';
import TraineeProfile from 'views/admin/Trainee/TraineeProfile.jsx';

import Center from 'views/admin/Center/Center.jsx';
import AddCenter from 'views/admin/Center/AddCenter.jsx';
import EditCenter from 'views/admin/Center/EditCenter.jsx';
import CenterProfile from 'views/admin/Center/CenterProfile.jsx';

// import UniversityCentres from 'views/admin/Centres/UniversityCentres.jsx';


import Course from 'views/admin/Course/Course.jsx';
import AddCourse from 'views/admin/Course/AddCourse.jsx';
import EditCourse from 'views/admin/Course/EditCourse.jsx';
import CourseView from 'views/admin/Course/CourseView.jsx';

import Library from 'views/admin/Library/Library.jsx';
import AddLibrary from 'views/admin/Library/AddLibrary.jsx';
import EditLibrary from 'views/admin/Library/EditLibrary.jsx';


import Department from 'views/admin/Department/Department.jsx';
import AddDepartment from 'views/admin/Department/AddDepartment.jsx';
import EditDepartment from 'views/admin/Department/EditDepartment.jsx';

import UniversityEvents from 'views/admin/Events/UniversityEvents.jsx';
import AddEvent from 'views/admin/Events/AddEvent.jsx';

// import UniversityMailinbox from 'views/admin/Mail/Inbox.jsx';
// import UniversityMailcompose from 'views/admin/Mail/Compose.jsx';
// import UniversityMailview from 'views/admin/Mail/View.jsx';

import UniversityReportsDepartment from 'views/admin/Reports/ReportsDepartment.jsx'; 
import UniversityReportsStudents from 'views/admin/Reports/ReportsStudent.jsx'; 
import UniversityReportsUniversity from 'views/admin/Reports/ReportsUniversity.jsx'; 

var BASEDIR = process.env.REACT_APP_BASEDIR;

var dashRoutes = [ 

    //{ path: "#", name: "Main", type: "navgroup"},
    { path: BASEDIR+"/admin/dashboard", name: "Dashboard", icon: "speedometer", badge: "", component: Admin },
    { 
        path: "#", name: "Trainees", icon: "people", type: "dropdown", parentid: "trainees",
            child: [
                { path: BASEDIR+"/admin/trainees", name: "Trainees"},
                { path: BASEDIR+"/admin/add-trainee", name: "Add Trainees"},
                { path: BASEDIR+"/admin/edit-trainee", name: "Edit Trainees"},
                { path: BASEDIR+"/admin/trainee-profile", name: "Trainee Trainees"},
            ]
    },
        { path: BASEDIR+"/admin/trainees", component: Trainee, type: "child"},
        { path: BASEDIR+"/admin/add-trainee", component: AddTrainee, type: "child"},
        { path: BASEDIR+"/admin/edit-trainee", component: EditTrainee, type: "child"},
        { path: BASEDIR+"/admin/trainee-profile", component: TraineeProfile, type: "child"},
    { 
        path: "#", name: "Personal trainer", icon: "user", type: "dropdown", parentid: "professors",
            child: [
                { path: BASEDIR+"/admin/pts", name: "Personal trainer"},
                { path: BASEDIR+"/admin/add-pt", name: "Add Personal trainer"},
                { path: BASEDIR+"/admin/edit-pt", name: "Edit Personal trainer"},
                { path: BASEDIR+"/admin/pt-profile", name: "Personal trainer Profile"},
            ]
    },
        { path: BASEDIR+"/admin/pts", component: Professor, type: "child"},
        { path: BASEDIR+"/admin/add-pt", component: AddProfessor, type: "child"},
        { path: BASEDIR+"/admin/edit-pt", component: EditProfessor, type: "child"},
        { path: BASEDIR+"/admin/pt-profile", component: ProfessorProfile, type: "child"},

    { 
        path: "#", name: "Centers", icon: "user-female", type: "dropdown", parentid: "centers",
            child: [
                { path: BASEDIR+"/admin/centers", name: "Centers"},
                { path: BASEDIR+"/admin/add-center", name: "Add Centers"},
                { path: BASEDIR+"/admin/edit-center", name: "Edit Centers"},
                { path: BASEDIR+"/admin/center-profile", name: "Centers Profile"},
            ]
    },
        { path: BASEDIR+"/admin/centers", component: Center, type: "child"},
        { path: BASEDIR+"/admin/add-center", component: AddCenter, type: "child"},
        { path: BASEDIR+"/admin/edit-center", component: EditCenter, type: "child"},
        { path: BASEDIR+"/admin/center-profile", component: CenterProfile, type: "child"},


  { 
        path: "#", name: "Reports", icon: "chart", type: "dropdown", parentid: "reports",
        child: [
                    { path: BASEDIR+"/admin/reports-department", name: "Department"},
                    { path: BASEDIR+"/admin/reports-students", name: "Students"},
                    { path: BASEDIR+"/admin/reports-university", name: "University"},
        ]
    },
    { path: BASEDIR+"/admin/reports-department", component: UniversityReportsDepartment, type: "child"},
    { path: BASEDIR+"/admin/reports-students", component: UniversityReportsStudents, type: "child"},
    { path: BASEDIR+"/admin/reports-university", component: UniversityReportsUniversity, type: "child"},



    { 
        path: "#", name: "Courses", icon: "folder-alt", type: "dropdown", parentid: "courses",
            child: [
                { path: BASEDIR+"/admin/courses", name: "Courses"},
                { path: BASEDIR+"/admin/add-course", name: "Add Course"},
                { path: BASEDIR+"/admin/edit-course", name: "Edit Course"},
                { path: BASEDIR+"/admin/course-view", name: "View Course"},
            ]
    },
        { path: BASEDIR+"/admin/courses", component: Course, type: "child"},
        { path: BASEDIR+"/admin/add-course", component: AddCourse, type: "child"},
        { path: BASEDIR+"/admin/edit-course", component: EditCourse, type: "child"},
        { path: BASEDIR+"/admin/course-view", component: CourseView, type: "child"},


    { 
        path: "#", name: "Library", icon: "notebook", type: "dropdown", parentid: "library",
            child: [
                { path: BASEDIR+"/admin/library", name: "Library Assets"},
                { path: BASEDIR+"/admin/add-library", name: "Add Library"},
                { path: BASEDIR+"/admin/edit-library", name: "Edit Library"},
            ]
    },
        { path: BASEDIR+"/admin/library", component: Library, type: "child"},
        { path: BASEDIR+"/admin/add-library", component: AddLibrary, type: "child"},
        { path: BASEDIR+"/admin/edit-library", component: EditLibrary, type: "child"},


    { 
        path: "#", name: "Departments", icon: "organization", type: "dropdown", parentid: "departments",
            child: [
                { path: BASEDIR+"/admin/department", name: "Departments"},
                { path: BASEDIR+"/admin/add-department", name: "Add Department"},
                { path: BASEDIR+"/admin/edit-department", name: "Edit Department"},
            ]
    },
        { path: BASEDIR+"/admin/department", component: Department, type: "child"},
        { path: BASEDIR+"/admin/add-department", component: AddDepartment, type: "child"},
        { path: BASEDIR+"/admin/edit-department", component: EditDepartment, type: "child"},



    { 
        path: "#", name: "Schedule", icon: "event", type: "dropdown", parentid: "events",
            child: [
                { path: BASEDIR+"/admin/events", name: "Schedules"},
                { path: BASEDIR+"/admin/addevent", name: "Add Schedules"},
            ]
    },
        { path: BASEDIR+"/admin/events", component: UniversityEvents, type: "child"},
        { path: BASEDIR+"/admin/addevent", component: AddEvent, type: "child"},

        { path: BASEDIR+"/admin/dashboard", component: Admin, type: "child"},

    //{ redirect: true, path: BASEDIR+"/", pathTo: "/dashboard", name: "Dashboard" }

];
export default dashRoutes;
