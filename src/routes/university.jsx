import University from 'views/university/Dashboard/University.jsx';



import Professor from 'views/university/Professor/Professor.jsx';
import AddProfessor from 'views/university/Professor/AddProfessor.jsx';
import EditProfessor from 'views/university/Professor/EditProfessor.jsx';
import ProfessorProfile from 'views/university/Professor/ProfessorProfile.jsx';

import Student from 'views/university/Student/Student.jsx';
import AddStudent from 'views/university/Student/AddStudent.jsx';
import EditStudent from 'views/university/Student/EditStudent.jsx';
import StudentProfile from 'views/university/Student/StudentProfile.jsx';

import Staff from 'views/university/Staff/Staff.jsx';
import AddStaff from 'views/university/Staff/AddStaff.jsx';
import EditStaff from 'views/university/Staff/EditStaff.jsx';
import StaffProfile from 'views/university/Staff/StaffProfile.jsx';

import UniversityCentres from 'views/university/Centres/UniversityCentres.jsx';


import Course from 'views/university/Course/Course.jsx';
import AddCourse from 'views/university/Course/AddCourse.jsx';
import EditCourse from 'views/university/Course/EditCourse.jsx';
import CourseView from 'views/university/Course/CourseView.jsx';

import Library from 'views/university/Library/Library.jsx';
import AddLibrary from 'views/university/Library/AddLibrary.jsx';
import EditLibrary from 'views/university/Library/EditLibrary.jsx';


import Department from 'views/university/Department/Department.jsx';
import AddDepartment from 'views/university/Department/AddDepartment.jsx';
import EditDepartment from 'views/university/Department/EditDepartment.jsx';

import UniversityEvents from 'views/university/Events/UniversityEvents.jsx';
import AddEvent from 'views/university/Events/AddEvent.jsx';

import UniversityMailinbox from 'views/university/Mail/Inbox.jsx';
import UniversityMailcompose from 'views/university/Mail/Compose.jsx';
import UniversityMailview from 'views/university/Mail/View.jsx';

import UniversityReportsDepartment from 'views/university/Reports/ReportsDepartment.jsx'; 
import UniversityReportsStudents from 'views/university/Reports/ReportsStudent.jsx'; 
import UniversityReportsUniversity from 'views/university/Reports/ReportsUniversity.jsx'; 

var BASEDIR = process.env.REACT_APP_BASEDIR;

var dashRoutes = [ 

    //{ path: "#", name: "Main", type: "navgroup"},
    { path: BASEDIR+"/university/dashboard", name: "Dashboard", icon: "speedometer", badge: "", component: University },

    { 
        path: "#", name: "Personal trainer", icon: "user", type: "dropdown", parentid: "professors",
            child: [
                { path: BASEDIR+"/university/professors", name: "Personal trainer"},
                { path: BASEDIR+"/university/add-professor", name: "Add Personal trainer"},
                { path: BASEDIR+"/university/edit-professor", name: "Edit Personal trainer"},
                { path: BASEDIR+"/university/professor-profile", name: "Personal trainer Profile"},
            ]
    },
        { path: BASEDIR+"/university/professors", component: Professor, type: "child"},
        { path: BASEDIR+"/university/add-professor", component: AddProfessor, type: "child"},
        { path: BASEDIR+"/university/edit-professor", component: EditProfessor, type: "child"},
        { path: BASEDIR+"/university/professor-profile", component: ProfessorProfile, type: "child"},

    { 
        path: "#", name: "Traniees", icon: "people", type: "dropdown", parentid: "students",
            child: [
                { path: BASEDIR+"/university/students", name: "Traniees"},
                { path: BASEDIR+"/university/add-student", name: "Add Traniees"},
                { path: BASEDIR+"/university/edit-student", name: "Edit Traniees"},
                { path: BASEDIR+"/university/student-profile", name: "Student Traniees"},
            ]
    },
        { path: BASEDIR+"/university/students", component: Student, type: "child"},
        { path: BASEDIR+"/university/add-student", component: AddStudent, type: "child"},
        { path: BASEDIR+"/university/edit-student", component: EditStudent, type: "child"},
        { path: BASEDIR+"/university/student-profile", component: StudentProfile, type: "child"},

    { 
        path: "#", name: "Centers", icon: "user-female", type: "dropdown", parentid: "staffs",
            child: [
                { path: BASEDIR+"/university/staffs", name: "Centers"},
                { path: BASEDIR+"/university/add-staff", name: "Add Centers"},
                { path: BASEDIR+"/university/edit-staff", name: "Edit Centers"},
                { path: BASEDIR+"/university/staff-profile", name: "Centers Profile"},
            ]
    },
        { path: BASEDIR+"/university/staffs", component: Staff, type: "child"},
        { path: BASEDIR+"/university/add-staff", component: AddStaff, type: "child"},
        { path: BASEDIR+"/university/edit-staff", component: EditStaff, type: "child"},
        { path: BASEDIR+"/university/staff-profile", component: StaffProfile, type: "child"},


  { 
        path: "#", name: "Reports", icon: "chart", type: "dropdown", parentid: "reports",
        child: [
                    { path: BASEDIR+"/university/reports-department", name: "Department"},
                    { path: BASEDIR+"/university/reports-students", name: "Students"},
                    { path: BASEDIR+"/university/reports-university", name: "University"},
        ]
    },
    { path: BASEDIR+"/university/reports-department", component: UniversityReportsDepartment, type: "child"},
    { path: BASEDIR+"/university/reports-students", component: UniversityReportsStudents, type: "child"},
    { path: BASEDIR+"/university/reports-university", component: UniversityReportsUniversity, type: "child"},



    { 
        path: "#", name: "Courses", icon: "folder-alt", type: "dropdown", parentid: "courses",
            child: [
                { path: BASEDIR+"/university/courses", name: "Courses"},
                { path: BASEDIR+"/university/add-course", name: "Add Course"},
                { path: BASEDIR+"/university/edit-course", name: "Edit Course"},
                { path: BASEDIR+"/university/course-view", name: "View Course"},
            ]
    },
        { path: BASEDIR+"/university/courses", component: Course, type: "child"},
        { path: BASEDIR+"/university/add-course", component: AddCourse, type: "child"},
        { path: BASEDIR+"/university/edit-course", component: EditCourse, type: "child"},
        { path: BASEDIR+"/university/course-view", component: CourseView, type: "child"},


    { 
        path: "#", name: "Library", icon: "notebook", type: "dropdown", parentid: "library",
            child: [
                { path: BASEDIR+"/university/library", name: "Library Assets"},
                { path: BASEDIR+"/university/add-library", name: "Add Library"},
                { path: BASEDIR+"/university/edit-library", name: "Edit Library"},
            ]
    },
        { path: BASEDIR+"/university/library", component: Library, type: "child"},
        { path: BASEDIR+"/university/add-library", component: AddLibrary, type: "child"},
        { path: BASEDIR+"/university/edit-library", component: EditLibrary, type: "child"},


    { 
        path: "#", name: "Departments", icon: "organization", type: "dropdown", parentid: "departments",
            child: [
                { path: BASEDIR+"/university/department", name: "Departments"},
                { path: BASEDIR+"/university/add-department", name: "Add Department"},
                { path: BASEDIR+"/university/edit-department", name: "Edit Department"},
            ]
    },
        { path: BASEDIR+"/university/department", component: Department, type: "child"},
        { path: BASEDIR+"/university/add-department", component: AddDepartment, type: "child"},
        { path: BASEDIR+"/university/edit-department", component: EditDepartment, type: "child"},



    { 
        path: "#", name: "Schedule", icon: "event", type: "dropdown", parentid: "events",
            child: [
                { path: BASEDIR+"/university/events", name: "Schedules"},
                { path: BASEDIR+"/university/addevent", name: "Add Schedules"},
            ]
    },
        { path: BASEDIR+"/university/events", component: UniversityEvents, type: "child"},
        { path: BASEDIR+"/university/addevent", component: AddEvent, type: "child"},

        { path: BASEDIR+"/university/dashboard", component: University, type: "child"},

    //{ redirect: true, path: BASEDIR+"/", pathTo: "/dashboard", name: "Dashboard" }

];
export default dashRoutes;
