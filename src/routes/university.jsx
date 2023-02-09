import University from 'views/ptbooking/Dashboard/University.jsx';



import Professor from 'views/ptbooking/Professor/Professor.jsx';
import AddProfessor from 'views/ptbooking/Professor/AddProfessor.jsx';
import EditProfessor from 'views/ptbooking/Professor/EditProfessor.jsx';
import ProfessorProfile from 'views/ptbooking/Professor/ProfessorProfile.jsx';

import Student from 'views/ptbooking/Student/Student.jsx';
import AddStudent from 'views/ptbooking/Student/AddStudent.jsx';
import EditStudent from 'views/ptbooking/Student/EditStudent.jsx';
import StudentProfile from 'views/ptbooking/Student/StudentProfile.jsx';

import Staff from 'views/ptbooking/Staff/Staff.jsx';
import AddStaff from 'views/ptbooking/Staff/AddStaff.jsx';
import EditStaff from 'views/ptbooking/Staff/EditStaff.jsx';
import StaffProfile from 'views/ptbooking/Staff/StaffProfile.jsx';

import UniversityCentres from 'views/ptbooking/Centres/UniversityCentres.jsx';


import Course from 'views/ptbooking/Course/Course.jsx';
import AddCourse from 'views/ptbooking/Course/AddCourse.jsx';
import EditCourse from 'views/ptbooking/Course/EditCourse.jsx';
import CourseView from 'views/ptbooking/Course/CourseView.jsx';

import Library from 'views/ptbooking/Library/Library.jsx';
import AddLibrary from 'views/ptbooking/Library/AddLibrary.jsx';
import EditLibrary from 'views/ptbooking/Library/EditLibrary.jsx';


import Department from 'views/ptbooking/Department/Department.jsx';
import AddDepartment from 'views/ptbooking/Department/AddDepartment.jsx';
import EditDepartment from 'views/ptbooking/Department/EditDepartment.jsx';

import UniversityEvents from 'views/ptbooking/Events/UniversityEvents.jsx';
import AddEvent from 'views/ptbooking/Events/AddEvent.jsx';

import UniversityMailinbox from 'views/ptbooking/Mail/Inbox.jsx';
import UniversityMailcompose from 'views/ptbooking/Mail/Compose.jsx';
import UniversityMailview from 'views/ptbooking/Mail/View.jsx';

import UniversityReportsDepartment from 'views/ptbooking/Reports/ReportsDepartment.jsx'; 
import UniversityReportsStudents from 'views/ptbooking/Reports/ReportsStudent.jsx'; 
import UniversityReportsUniversity from 'views/ptbooking/Reports/ReportsUniversity.jsx'; 

var BASEDIR = process.env.REACT_APP_BASEDIR;

var dashRoutes = [ 

    //{ path: "#", name: "Main", type: "navgroup"},
    { path: BASEDIR+"/ptbooking/dashboard", name: "Dashboard", icon: "speedometer", badge: "", component: University },

    { 
        path: "#", name: "Personal trainer", icon: "user", type: "dropdown", parentid: "professors",
            child: [
                { path: BASEDIR+"/ptbooking/professors", name: "Personal trainer"},
                { path: BASEDIR+"/ptbooking/add-professor", name: "Add Personal trainer"},
                { path: BASEDIR+"/ptbooking/edit-professor", name: "Edit Personal trainer"},
                { path: BASEDIR+"/ptbooking/professor-profile", name: "Personal trainer Profile"},
            ]
    },
        { path: BASEDIR+"/ptbooking/professors", component: Professor, type: "child"},
        { path: BASEDIR+"/ptbooking/add-professor", component: AddProfessor, type: "child"},
        { path: BASEDIR+"/ptbooking/edit-professor", component: EditProfessor, type: "child"},
        { path: BASEDIR+"/ptbooking/professor-profile", component: ProfessorProfile, type: "child"},

    { 
        path: "#", name: "Trainees", icon: "people", type: "dropdown", parentid: "students",
            child: [
                { path: BASEDIR+"/ptbooking/students", name: "Trainees"},
                { path: BASEDIR+"/ptbooking/add-student", name: "Add Trainees"},
                { path: BASEDIR+"/ptbooking/edit-student", name: "Edit Trainees"},
                { path: BASEDIR+"/ptbooking/student-profile", name: "Student Trainees"},
            ]
    },
        { path: BASEDIR+"/ptbooking/students", component: Student, type: "child"},
        { path: BASEDIR+"/ptbooking/add-student", component: AddStudent, type: "child"},
        { path: BASEDIR+"/ptbooking/edit-student", component: EditStudent, type: "child"},
        { path: BASEDIR+"/ptbooking/student-profile", component: StudentProfile, type: "child"},

    { 
        path: "#", name: "Centers", icon: "user-female", type: "dropdown", parentid: "staffs",
            child: [
                { path: BASEDIR+"/ptbooking/staffs", name: "Centers"},
                { path: BASEDIR+"/ptbooking/add-staff", name: "Add Centers"},
                { path: BASEDIR+"/ptbooking/edit-staff", name: "Edit Centers"},
                { path: BASEDIR+"/ptbooking/staff-profile", name: "Centers Profile"},
            ]
    },
        { path: BASEDIR+"/ptbooking/staffs", component: Staff, type: "child"},
        { path: BASEDIR+"/ptbooking/add-staff", component: AddStaff, type: "child"},
        { path: BASEDIR+"/ptbooking/edit-staff", component: EditStaff, type: "child"},
        { path: BASEDIR+"/ptbooking/staff-profile", component: StaffProfile, type: "child"},


  { 
        path: "#", name: "Reports", icon: "chart", type: "dropdown", parentid: "reports",
        child: [
                    { path: BASEDIR+"/ptbooking/reports-department", name: "Department"},
                    { path: BASEDIR+"/ptbooking/reports-students", name: "Students"},
                    { path: BASEDIR+"/ptbooking/reports-university", name: "University"},
        ]
    },
    { path: BASEDIR+"/ptbooking/reports-department", component: UniversityReportsDepartment, type: "child"},
    { path: BASEDIR+"/ptbooking/reports-students", component: UniversityReportsStudents, type: "child"},
    { path: BASEDIR+"/ptbooking/reports-university", component: UniversityReportsUniversity, type: "child"},



    { 
        path: "#", name: "Courses", icon: "folder-alt", type: "dropdown", parentid: "courses",
            child: [
                { path: BASEDIR+"/ptbooking/courses", name: "Courses"},
                { path: BASEDIR+"/ptbooking/add-course", name: "Add Course"},
                { path: BASEDIR+"/ptbooking/edit-course", name: "Edit Course"},
                { path: BASEDIR+"/ptbooking/course-view", name: "View Course"},
            ]
    },
        { path: BASEDIR+"/ptbooking/courses", component: Course, type: "child"},
        { path: BASEDIR+"/ptbooking/add-course", component: AddCourse, type: "child"},
        { path: BASEDIR+"/ptbooking/edit-course", component: EditCourse, type: "child"},
        { path: BASEDIR+"/ptbooking/course-view", component: CourseView, type: "child"},


    { 
        path: "#", name: "Library", icon: "notebook", type: "dropdown", parentid: "library",
            child: [
                { path: BASEDIR+"/ptbooking/library", name: "Library Assets"},
                { path: BASEDIR+"/ptbooking/add-library", name: "Add Library"},
                { path: BASEDIR+"/ptbooking/edit-library", name: "Edit Library"},
            ]
    },
        { path: BASEDIR+"/ptbooking/library", component: Library, type: "child"},
        { path: BASEDIR+"/ptbooking/add-library", component: AddLibrary, type: "child"},
        { path: BASEDIR+"/ptbooking/edit-library", component: EditLibrary, type: "child"},


    { 
        path: "#", name: "Departments", icon: "organization", type: "dropdown", parentid: "departments",
            child: [
                { path: BASEDIR+"/ptbooking/department", name: "Departments"},
                { path: BASEDIR+"/ptbooking/add-department", name: "Add Department"},
                { path: BASEDIR+"/ptbooking/edit-department", name: "Edit Department"},
            ]
    },
        { path: BASEDIR+"/ptbooking/department", component: Department, type: "child"},
        { path: BASEDIR+"/ptbooking/add-department", component: AddDepartment, type: "child"},
        { path: BASEDIR+"/ptbooking/edit-department", component: EditDepartment, type: "child"},



    { 
        path: "#", name: "Schedule", icon: "event", type: "dropdown", parentid: "events",
            child: [
                { path: BASEDIR+"/ptbooking/events", name: "Schedules"},
                { path: BASEDIR+"/ptbooking/addevent", name: "Add Schedules"},
            ]
    },
        { path: BASEDIR+"/ptbooking/events", component: UniversityEvents, type: "child"},
        { path: BASEDIR+"/ptbooking/addevent", component: AddEvent, type: "child"},

        { path: BASEDIR+"/ptbooking/dashboard", component: University, type: "child"},

    //{ redirect: true, path: BASEDIR+"/", pathTo: "/dashboard", name: "Dashboard" }

];
export default dashRoutes;
