// ##############################
// // // courses
// #############################

import axios from "axios";
const API_URL = "https://gachateambe.herokuapp.com/api/packages";
const token = localStorage.getItem("accessToken");

const getAllPackage = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
        category: pack.category,
        status: pack.activate,
        ptStatus: ptStatus, // thêm thuộc tính mới
        imgLink:
          "https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.15752-9/332773078_2141261912889325_4648798698662692148_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=oSPfdFG0cccAX_9nDPG&_nc_ht=scontent.fsgn5-3.fna&oh=03_AdQas4dGsNoikQrXg-vJcCTTy8UyjaoCQb0DYhtGPM8j7Q&oe=643179D3",
      };
    });
    return packages;
  } catch (error) {
    console.error(error);
  }
};

const getPayment = async () => {
  try {
    const response = await axios.get(
      "https://gachateambe.herokuapp.com/api/payments",{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const payments = response.data.payments;
    return payments;
  } catch (error) {
    console.error(error);
  }
};
const getAllTraineePack = async () => {
  try {
    const response = await axios.get(
      `https://gachateambe.herokuapp.com/api/trainees`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const packages = response.data.trainees;
    return packages;
  } catch (error) {
    console.error(error);
  }
};
const getPackageById = async (id) => {
  try {
    const response = await axios.get(
      `https://gachateambe.herokuapp.com/api/packages/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const packages = response.data.package;
 
    return packages;
  } catch (error) {
    console.error(error);
  }
};

const getPackage = async (id) => {
  try {
    const response = await axios.get(
      `https://gachateambe.herokuapp.com/api/trainee-packages?packageId=${id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const total = response.data.totalItems;
    const traineePackages = response.data.traineePackages;
    const packages = {
      total,
      traineePackages,
    };
    console.log(packages);
    return packages;
  } catch (error) {
    console.error(error);
  }
};

const packagesStatic = async () => {
  // Lấy thông tin tất cả các gói đang có
  const allPackages = await getAllPackage();
  // Lấy thông tin tất cả người dùng và gói tập đã mua
  const allTraineePacks = await getAllTraineePack();
  // Khởi tạo mảng để chứa thông tin khóa học
  const courseCount = [];

  // Duyệt qua mỗi gói trong allPackages để lấy thông tin khóa học
  allPackages.forEach((packages) => {
    const course = {
      id: packages.id, // Lấy tên gói
      name: packages.name,
      price: packages.price,
      numberOfTrainees: 0, // Số lượng người mua ban đầu = 0
      packCategory: packages.ptStatus,
    };
    // Duyệt qua mỗi gói trong allTraineePacks để đếm số lượng người mua
    allTraineePacks.forEach((traineePack) => {
      if (traineePack.currentTraineePackage.packageId === packages.id) {
        course.numberOfTrainees++; // Tăng số lượng người mua lên 1
      }
    });
    
    courseCount.push(course); // Thêm thông tin khóa học vào mảng courseCount
  });
  
  return courseCount; // In ra mảng thông tin khóa học
};
export {
  getAllPackage,
  getPayment,
  getPackageById,
  getPackage,
  packagesStatic,
};
