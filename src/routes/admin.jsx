import Admin from 'views/admin/Dashboard/University.jsx';



import Professor from 'views/admin/Professor/Professor.jsx';
import AddProfessor from 'views/admin/Professor/AddProfessor.jsx';
import EditProfessor from 'views/admin/Professor/EditProfessor.jsx';
import ProfessorProfile from 'views/admin/Professor/ProfessorProfile.jsx';

import Student from 'views/admin/Student/Student.jsx';
import AddStudent from 'views/admin/Student/AddStudent.jsx';
import EditStudent from 'views/admin/Student/EditStudent.jsx';
import StudentProfile from 'views/admin/Student/StudentProfile.jsx';

import Staff from 'views/admin/Staff/Staff.jsx';
import AddStaff from 'views/admin/Staff/AddStaff.jsx';
import EditStaff from 'views/admin/Staff/EditStaff.jsx';
import StaffProfile from 'views/admin/Staff/StaffProfile.jsx';

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
    { path: BASEDIR+"/dashboard", name: "Dashboard", icon: "speedometer", badge: "", component: Admin },
    { 
        path: "#", name: "Trainees", icon: "people", type: "dropdown", parentid: "students",
            child: [
                { path: BASEDIR+"/admin/students", name: "Trainees"},
                { path: BASEDIR+"/admin/add-student", name: "Add Trainees"},
                { path: BASEDIR+"/admin/edit-student", name: "Edit Trainees"},
                { path: BASEDIR+"/admin/student-profile", name: "Student Trainees"},
            ]
    },
        { path: BASEDIR+"/admin/students", component: Student, type: "child"},
        { path: BASEDIR+"/admin/add-student", component: AddStudent, type: "child"},
        { path: BASEDIR+"/admin/edit-student", component: EditStudent, type: "child"},
        { path: BASEDIR+"/admin/student-profile", component: StudentProfile, type: "child"},
    { 
        path: "#", name: "Personal trainer", icon: "user", type: "dropdown", parentid: "professors",
            child: [
                { path: BASEDIR+"/admin/professors", name: "Personal trainer"},
                { path: BASEDIR+"/admin/add-professor", name: "Add Personal trainer"},
                { path: BASEDIR+"/admin/edit-professor", name: "Edit Personal trainer"},
                { path: BASEDIR+"/admin/professor-profile", name: "Personal trainer Profile"},
            ]
    },
        { path: BASEDIR+"/admin/professors", component: Professor, type: "child"},
        { path: BASEDIR+"/admin/add-professor", component: AddProfessor, type: "child"},
        { path: BASEDIR+"/admin/edit-professor", component: EditProfessor, type: "child"},
        { path: BASEDIR+"/admin/professor-profile", component: ProfessorProfile, type: "child"},

    { 
        path: "#", name: "Centers", icon: "user-female", type: "dropdown", parentid: "staffs",
            child: [
                { path: BASEDIR+"/admin/staffs", name: "Centers"},
                { path: BASEDIR+"/admin/add-staff", name: "Add Centers"},
                { path: BASEDIR+"/admin/edit-staff", name: "Edit Centers"},
                { path: BASEDIR+"/admin/staff-profile", name: "Centers Profile"},
            ]
    },
        { path: BASEDIR+"/admin/staffs", component: Staff, type: "child"},
        { path: BASEDIR+"/admin/add-staff", component: AddStaff, type: "child"},
        { path: BASEDIR+"/admin/edit-staff", component: EditStaff, type: "child"},
        { path: BASEDIR+"/admin/staff-profile", component: StaffProfile, type: "child"},


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
