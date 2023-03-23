
import Student from 'views/pt/Student/Student.jsx';
import AddStudent from 'views/pt/Student/AddStudent.jsx';
import EditStudent from 'views/pt/Student/EditStudent.jsx';
import StudentProfile from 'views/pt/Student/StudentProfile.jsx';


import UploadImg from 'views/pt/Upload/UploadImg.jsx';



import UniversityEvents from 'views/pt/Events/UniversityEvents.jsx';



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
        path: "/pt/students", name: "Students", icon: "people",component: Student,
            child: [
                { path: BASEDIR+"/pt/students", name: "Students"},
                // { path: BASEDIR+"/pt/add-student", name: "Add Student"},
                // { path: BASEDIR+"/pt/edit-student", name: "Edit Student"},
                // { path: BASEDIR+"/pt/student-profile", name: "Student Profile"},
            ]
    },
        { path: BASEDIR+"/pt/students", component: Student, type: "child"},
        { path: BASEDIR+"/pt/add-student", component: AddStudent, type: "child"},
        { path: BASEDIR+"/pt/edit-student", component: EditStudent, type: "child"},
        { path: BASEDIR+"/pt/student-profile", component: StudentProfile, type: "child"},


            { path: BASEDIR+"/pt/upload-image/:id", component: UploadImg, type: "child"},

];
export default dashRoutes;
