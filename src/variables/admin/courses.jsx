// ##############################
// // // courses
// #############################

import axios from "axios";
const API_URL = "https://gachateambe.herokuapp.com/api/packages";
const getAllPackage = async () => {
  try {
    const response = await axios.get(API_URL);
    const packagesData = response.data;
    const packages = packagesData.packages.map((pack) => {
      let ptStatus = "";
      if (pack.category === "havept") {
        ptStatus = "Have Personal Trainer";
      } else {
        ptStatus = "Don't have Personal Trainer";
      }
      return {
        id: pack.packageId,
        name: pack.packageName,
        price: pack.price,
        durationByMonth: pack.durationByMonth,
        durationByDay: pack.durationByDay,
        object: pack.object,
        created: pack.createdAt,
        category: pack.category ,
        status: pack.activate,
        ptStatus: ptStatus // thêm thuộc tính mới
      };
    });
    console.log(packages);
    return packages;
  } catch (error) {
    console.error(error);
  }
};

const courses = [
    {avatar: "/images/admin/courses/course-1.jpg", name: "Web Development", position: "IT Dept", length: "1 week", msg: "Their endowment by a prince or monarch and their role in training government officials"},
    {avatar: "/images/admin/courses/course-2.jpg", name: "Photography", position: "Art", length: "2 weeks", msg: "The first documentary evidence of this comes from early in the life of the admin "},
    {avatar: "/images/admin/courses/course-4.jpg", name: "Designing", position: "Architect", length: "3 weeks", msg: "An important idea in the definition of a admin is the notion of academic freedom."},
    {avatar: "/images/admin/courses/course-5.jpg", name: "Basics of Coding", position: "Computer Engg", length: "2 weeks", msg: "Some scholars, including Makdisi, have argued that early medieval universities were influenced"},
    {avatar: "/images/admin/courses/course-8.jpg", name: "Latest Tech", position: "General", length: "4 weeks", msg: "The admin is generally regarded as a formal institution that has its origin"},
    {avatar: "/images/admin/courses/course-9.jpg", name: "Hosting Management", position: "IT", length: "1 month", msg: "The earliest universities were developed under the governance to great philosophers"},
    {avatar: "/images/admin/courses/course-12.jpg", name: "File Management", position: "Computer Engg", length: "3 weeks", msg: "The propagation of universities was not necessarily a steady progression in history"},
    {avatar: "/images/admin/courses/course-13.jpg", name: "Project Lifecycle", position: "Management", length: "15 days", msg: "Universities were also reluctant to give up older curricula, and the continued reliance"},
]; 

export {
    courses, getAllPackage
};
