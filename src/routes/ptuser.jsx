
import Student from 'views/pt/Student/Student.jsx';
import AddStudent from 'views/pt/Student/AddStudent.jsx';
import EditStudent from 'views/pt/Student/EditStudent.jsx';
import StudentProfile from 'views/pt/Student/StudentProfile.jsx';




import Course from 'views/pt/Course/Course.jsx';
import AddCourse from 'views/pt/Course/AddCourse.jsx';
import EditCourse from 'views/pt/Course/EditCourse.jsx';
import CourseView from 'views/pt/Course/CourseView.jsx';

import UploadImg from 'views/pt/Upload/UploadImg.jsx';

import Department from 'views/pt/Department/Department.jsx';
import AddDepartment from 'views/pt/Department/AddDepartment.jsx';
import EditDepartment from 'views/pt/Department/EditDepartment.jsx';

import UniversityEvents from 'views/pt/Events/UniversityEvents.jsx';

import UniversityReportsDepartment from 'views/pt/Reports/ReportsDepartment.jsx'; 
import UniversityReportsStudents from 'views/pt/Reports/ReportsStudent.jsx'; 
import UniversityReportsUniversity from 'views/pt/Reports/ReportsUniversity.jsx'; 

var BASEDIR = process.env.REACT_APP_BASEDIR;

var dashRoutes = [ 
   
    // { path: "#", name: "Main", type: "navgroup"},
    { path: BASEDIR+"/pt/scheduled", name: "Scheduled", icon: "event", badge: "", component: UniversityEvents },
    // { 
    //     path: "#", name: "Scheduled", icon: "event", type: "dropdown", parentid: "events",
    //         child: [
    //             { path: BASEDIR+"/university/events", name: "Scheduled"},
    //             // { path: BASEDIR+"/university/addevent", name: "Add Event"},
    //         ]
    // },
    //     { path: BASEDIR+"/university/events", component: UniversityEvents, type: "child"},
    //     { path: BASEDIR+"/university/addevent", component: AddEvent, type: "child"},
       { 
        path: "#", name: "Students", icon: "people", type: "dropdown", parentid: "students",
            child: [
                { path: BASEDIR+"/pt/students", name: "Students"},
                { path: BASEDIR+"/pt/add-student", name: "Add Student"},
                { path: BASEDIR+"/pt/edit-student", name: "Edit Student"},
                { path: BASEDIR+"/pt/student-profile", name: "Student Profile"},
            ]
    },
        { path: BASEDIR+"/pt/students", component: Student, type: "child"},
        { path: BASEDIR+"/pt/add-student", component: AddStudent, type: "child"},
        { path: BASEDIR+"/pt/edit-student", component: EditStudent, type: "child"},
        { path: BASEDIR+"/pt/student-profile", component: StudentProfile, type: "child"},


            { path: BASEDIR+"/pt/upload-image/:id", component: UploadImg, type: "child"},
            
      { 
        path: "#", name: "Reports", icon: "chart", type: "dropdown", parentid: "reports",
        child: [
                    { path: BASEDIR+"/pt/reports-department", name: "Department"},
                    { path: BASEDIR+"/pt/reports-students", name: "Students"},
                    { path: BASEDIR+"/pt/reports-university", name: "University"},
        ]
    },
    { path: BASEDIR+"/pt/reports-department", component: UniversityReportsDepartment, type: "child"},
    { path: BASEDIR+"/pt/reports-students", component: UniversityReportsStudents, type: "child"},
    { path: BASEDIR+"/pt/reports-university", component: UniversityReportsUniversity, type: "child"},

    { 
        path: "#", name: "Courses", icon: "folder-alt", type: "dropdown", parentid: "courses",
            child: [
                { path: BASEDIR+"/pt/courses", name: "Courses"},
                { path: BASEDIR+"/pt/add-course", name: "Add Course"},
                { path: BASEDIR+"/pt/edit-course", name: "Edit Course"},
                { path: BASEDIR+"/pt/course-view", name: "View Course"},
            ]
    },
        { path: BASEDIR+"/pt/courses", component: Course, type: "child"},
        { path: BASEDIR+"/pt/add-course", component: AddCourse, type: "child"},
        { path: BASEDIR+"/pt/edit-course", component: EditCourse, type: "child"},
        { path: BASEDIR+"/pt/course-view", component: CourseView, type: "child"},


    


    { 
        path: "#", name: "Departments", icon: "organization", type: "dropdown", parentid: "departments",
            child: [
                { path: BASEDIR+"/pt/department", name: "Departments"},
                { path: BASEDIR+"/pt/add-department", name: "Add Department"},
                { path: BASEDIR+"/pt/edit-department", name: "Edit Department"},
            ]
    },
        { path: BASEDIR+"/pt/department", component: Department, type: "child"},
        { path: BASEDIR+"/pt/add-department", component: AddDepartment, type: "child"},
        { path: BASEDIR+"/pt/edit-department", component: EditDepartment, type: "child"},


];
export default dashRoutes;
